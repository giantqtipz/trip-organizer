import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import registration from './RegistrationStyles';

const Registration: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const register = () => {
    console.log(email, password);
  };
  return (
    <View style={registration.container}>
      <View style={registration.margin}>
        <TextInput
          style={[registration.input, registration.margin]}
          onChangeText={(e) => setEmail(e)}
          placeholder="E-mail"
          value={email}
        />
        <TextInput
          style={[registration.input, registration.margin]}
          onChangeText={(e) => setPassword(e)}
          placeholder="Password"
          secureTextEntry
          value={password}
        />
        <TextInput
          style={[registration.input, registration.margin]}
          onChangeText={(e) => setPassword(e)}
          placeholder="Confirm Password"
          secureTextEntry
          value={password}
        />
      </View>
      <View>
        <TouchableOpacity style={registration.button} onPress={register}>
          <Text style={registration.buttonText}>Sign Up!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Registration;
