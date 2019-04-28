

import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

class HomeScreen extends Component {
  render(){
    return(
      <View style={{ flex: 1, justifyContent: "center" }}>
         <View style={{alignItems: 'center'}}>
           <Text style={{fontSize: 50}}>Home Screen</Text>
      
         </View>
         <View style={{margin:20}}>
            <Button
              title= 'Ir para tela Perfil'
              onPress ={() => this.props.navigation.navigate('Profile')} 
              />
         </View>
       
      </View>
    );
  }
}

class ProfileScreen extends Component {
  render(){
    return(
      <View style={{ flex: 1, justifyContent: "center" }}>

         <View style={{alignItems: 'center'}}>
           <Text style={{fontSize: 50}}>Tela de Perfil</Text>
      
         </View>
         <View style={{margin:20}}>
            <Button
              title= 'Ir para tela Detales'
              onPress = {() => this.props.navigation.navigate('Details')} 
              />
         </View>
       
      </View>
    )
  }
}
class DetailsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>

      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 50}}>Tela de Detales</Text>
   
      </View>
      <View style={{margin:20}}>
            <Button
              title= 'Ir para tela Inicial'
              onPress = {() => this.props.navigation.navigate('Home')} 
              />
         </View>
         <View style={{margin:20}}>
            <Button
              title= 'Voltar'
              onPress = {() => this.props.navigation.goBack()} 
              />
         </View>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Profile: {
    screen: ProfileScreen
  },
  Details: {
    screen: DetailsScreen
  }
},
{
  initialRouteName: 'Home'
}
);





const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer/>;
  }
}

