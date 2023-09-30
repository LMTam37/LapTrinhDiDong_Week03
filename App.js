import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import firstScreen from './screens/firstScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='firstScreen' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='firstScreen' component={firstScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

