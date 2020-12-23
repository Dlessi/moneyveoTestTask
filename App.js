
import React from 'react';
import {Provider} from 'react-redux';
import 'react-native-gesture-handler';
import {store} from './src/redux';
import RootNavigation from './src/navigation';

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};

export default App;

