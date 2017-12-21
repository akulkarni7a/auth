import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';

import {Header,Button,Spinner} from './components/common';
import LoginForm from './components/LoginForm';



class App extends Component{
	state = {
		loggedIn:null
	}

	componentWillMount(){
		firebase.initializeApp({
			    apiKey: "AIzaSyDTgnDLfVTzs9YQMfzwkCM75ZSwxz1mBdw",
			    authDomain: "authentication-2f71a.firebaseapp.com",
			    databaseURL: "https://authentication-2f71a.firebaseio.com",
			    projectId: "authentication-2f71a",
			    storageBucket: "authentication-2f71a.appspot.com",
			    messagingSenderId: "748005494118"  
		});	

		firebase.auth().onAuthStateChanged((user)=>{
			if(user){
				this.setState({loggedIn:true})
			} else {
				this.setState({loggedIn:false})
			}
		})
	}

	renderContent(){
		switch(this.state.loggedIn){
			case true:
				return (
					<Button onPress={()=>firebase.auth().signOut()}>Log Out</Button>
					);
			case false:
				return <LoginForm />;
			default:
				return <Spinner size='large' />;
		}

		

		
	}

	render(){
		return(
			<View>
				<Header headerText="Authentication"/>
				{this.renderContent()}
			</View>
		)
	}
}

export default App;