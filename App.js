import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app/AppNavigator";
import { Provider } from 'react-redux';
import { store } from './app/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator/>
      </NavigationContainer>
    </Provider>
  );
}
