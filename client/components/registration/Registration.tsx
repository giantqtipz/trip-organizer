import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { createUser } from '../../store/user/actions';
import registration from './RegistrationStyles';
import { passwordValidator } from '../utils';

const Registration: React.FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const register = () => {
    if (passwordValidator(password, passwordConfirmation)) {
      dispatch(
        createUser({
          newUser: {
            email,
            password,
          },
        })
      );
    }
  };
  return (
    <View style={registration.container}>
      <View>
        <Text>Password must:</Text>
        <Text>be at least 6 characters long</Text>
        <Text>contain an uppercase letter</Text>
        <Text>contain a special character</Text>
      </View>
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
          onChangeText={(e) => setPasswordConfirmation(e)}
          placeholder="Confirm Password"
          secureTextEntry
          value={passwordConfirmation}
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
