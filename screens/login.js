import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput, KeyboardAvoidingView, Alert } from 'react-native';
import firebase from 'firebase'
import db from '../config'

export default class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            emailID:'',
            password:''
        }
    }
    login=async(emailID,password)=>{
        if(emailID&&password){
            try{
                const response = await firebase.auth().signInWithEmailAndPassword(emailID,password)
                if(response){
                    this.props.navigation.navigate('Transaction')
                }
            }

            catch(error){
                switch(error.code){
                    case 'auth/user-not-found':
                        Alert.alert('User does not exist!')
                        break;
                    case 'auth/invalid-email':
                        Alert.alert('Invalid email or password!')    
                }

            }

        }

        else{
            Alert.alert('Enter emailID and password')
        }

    }
    render(){
        return(
            <KeyboardAvoidingView style = {{alignItems:'center', marginTop:25}}>
                <View>
                    <Image source = {require('../assets/booklogo.jpg')} style = {{width:200,height:200}}/>
                    <Text style = {{textAlign:'center',fontSize:20}}>Online Library</Text>
                </View>
                <View>
                    <TextInput style = {styles.loginbox}
                    placeholder = 'abc@example.com'
                    keyboardType = 'email-address'
                    onChangeText = {(text)=>{
                        this.setState({
                            emailID:text
                        })

                    }}
                    
                    />
                    <TextInput style = {styles.loginbox}
                    placeholder = 'Enter Password'
                   secureTextEntry = {true}
                    onChangeText = {(text)=>{
                        this.setState({
                            password:text
                        })

                    }}
                    
                    />
                    
                </View>

                <View>
                    <TouchableOpacity style = {{height:50,width:100,borderWidth:10,marginTop:30,borderRadius:10}}
                    onPress = {()=>{
                        this.login(this.state.emailID,this.state.password)
                    }}
                    
                    >
                        <Text style = {{textAlign:'center', fontSize:20}}>Login</Text>
                    </TouchableOpacity>
                </View>
                <Text>Login to your Account!</Text>
                </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
    loginbox:{
        width:325,
        height:50,
        borderWidth:7,
        fontSize:17,
        marginTop:30
    }
})