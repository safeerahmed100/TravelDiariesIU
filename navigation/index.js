import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import WelcomeScreen from '../screens/WelcomeScreen'
import LoginScreen from '../screens/LoginScreen'
import SignupScreen from '../screens/SignupScreen'
import ProfileSetup from '../screens/ProfileSetup'

const Stack = createNativeStackNavigator();

function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Welcome' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Signup' component={SignupScreen} />
            <Stack.Screen name='Profile' component={ProfileSetup} />
            <Stack.Screen name='Welcome' component={WelcomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;
