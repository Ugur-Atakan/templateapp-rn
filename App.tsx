import React from 'react';
import Navigation from './src/navigation';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import Toast from 'react-native-toast-message';


export default function App() {
  return (

  <Provider store={store}>
  <Navigation />
  <Toast/>
</Provider>

);
}
