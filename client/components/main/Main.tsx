import React from 'react';
import { View } from 'react-native';
import main from './MainStyles';
import Login from '../login/Login';

const Main: React.FC = () => {
  return (
    <View style={main.container}>
      <Login />
    </View>
  );
};

export default Main;
