import React from 'react';
import {Navigation} from './screens/Navigation';
import {StatusBar} from "react-native";

const App = () => {
  return <Navigation><StatusBar barStyle='dark-content' /></Navigation>
}

export default App;
