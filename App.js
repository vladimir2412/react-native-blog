import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native'

import Home from './screens/Home'
import Post from './screens/Post'
const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{ title: 'Main' }}
          component={Home}
        />
        <Stack.Screen
          name="Post"
          options={{ title: 'Post' }}
          component={Post}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
