import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import firstScreen from './screens/firstScreen';
import screen1_a from './screens/screen1_a';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='firstScreen' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='firstScreen' component={screen1_a} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

