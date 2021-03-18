import React from 'react';
import { Text, View } from 'react-native';
import main from './MainStyles';

const Main: React.FC = () => {
  return (
    <View style={main.container}>
      <Text>Im Alive!!</Text>
    </View>
  );
};

export default Main;
