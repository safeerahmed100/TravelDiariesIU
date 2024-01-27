import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import WelcomeScreen from '../screens/WelcomeScreen'
import LoginScreen from '../screens/LoginScreen'
import SignupScreen from '../screens/SignupScreen'
import ProfileSetup from '../screens/ProfileSetup'
import HomeScreen from '../screens/HomeScreen'
import Journal from '../screens/Journal'
import CreateJournal from '../screens/CreateJournal'
import MapScreen from '../screens/MapScreen'
import PolicyScreen from '../screens/PolicyScreen'

const Stack = createNativeStackNavigator();

function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Signup' component={SignupScreen} />
            <Stack.Screen name='Profile' component={ProfileSetup} />
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Journal' component={Journal} />
            <Stack.Screen name='CreateJournal' component={CreateJournal} />
            <Stack.Screen name='Map' component={MapScreen} />
            <Stack.Screen name='Policy' component={PolicyScreen} />

            <Stack.Screen name='Welcome' component={WelcomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;
