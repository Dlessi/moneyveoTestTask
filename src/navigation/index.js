import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

import LoginScreen from '../containers/LoginScreen';
import SearchScreen from '../containers/SearchScreen';
import MovieScreen from '../containers/MovieScreen';

const defaultScreenOptions = {
  headerShown: false,
  gestureEnabled: false,
};

const Stack = createSharedElementStackNavigator();

const RootNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={defaultScreenOptions}
      />
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={defaultScreenOptions}
      />
      <Stack.Screen
        name="MovieScreen"
        component={MovieScreen}
        options={defaultScreenOptions}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default RootNavigation;
