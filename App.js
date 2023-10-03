import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import firstScreen from './screens/firstScreen';
import screen1_a from './screens/screen1_a';
import screen1_b from './screens/screen1_b';
import screen1_c from './screens/screen1_c';
import screen1_d from './screens/screen1_d';
import screen1_e from './screens/screen1_e';
import screen2_a from './screens/screen2_a';
import screen2_b from './screens/screen2_b';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='firstScreen' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='firstScreen' component={screen2_b} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

