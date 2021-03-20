import { StyleSheet } from 'react-native';

const login = StyleSheet.create({
  button: {
    borderColor: 'lightgray',
    borderRadius: 10,
    borderWidth: 1,
    padding: 4,
  },
  buttonText: {
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    textAlign: 'center',
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  margin: {
    marginVertical: 14,
  },
});

export default login;
