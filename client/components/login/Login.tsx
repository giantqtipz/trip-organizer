import React, { useState } from 'react';
import {
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import login from './LoginStyles';

const Main: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const logIn = () => {
    console.log(email, password);
  };
  return (
    <View style={login.container}>
      <View>
        <Text style={login.headerText}>Trip Organizer</Text>
      </View>
      <View style={login.margin}>
        <TextInput
          style={[login.input, login.margin]}
          onChangeText={(e) => setEmail(e)}
          placeholder="E-mail"
          value={email}
        />
        <TextInput
          style={[login.input, login.margin]}
          onChangeText={(e) => setPassword(e)}
          placeholder="Password"
          secureTextEntry
          value={password}
        />
      </View>
      <View>
        <TouchableOpacity style={login.button} onPress={logIn}>
          <Text style={login.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Main;
