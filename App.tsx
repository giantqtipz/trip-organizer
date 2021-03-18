import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './client/store/store';
import { Main } from './client/components/index';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.SafeArea}>
        <Main />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  SafeArea: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});

export default App;
