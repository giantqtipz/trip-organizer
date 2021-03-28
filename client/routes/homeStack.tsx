import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../components/login/Login';
import Registration from '../components/registration/Registration';

const screens = {
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    },
  },
  Registration: {
    screen: Registration,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
