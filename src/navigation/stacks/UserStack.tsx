import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, SecondScreen } from '../../screens';

const Tabs = createBottomTabNavigator();

const UserStack = () => {
    return (
       <Tabs.Navigator>
          <Tabs.Screen name="Home" component={HomeScreen} />
          <Tabs.Screen name="Second" component={SecondScreen} />
       </Tabs.Navigator>
    );
    };

export default UserStack;
