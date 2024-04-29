import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app/AppNavigator";
import { Provider } from 'react-redux';
import { store } from './app/redux/store';
import { navigationRef } from './app/NavigationRoot';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoryBookList from './app/components/CategoryBookList';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <AppNavigator/>
      </NavigationContainer>
    </Provider>
  );
}
