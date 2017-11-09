import React from 'react';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { activeTab, inactiveTab } from '../constants/colors';
import RoutineScreen from '../screens/RoutineScreen';
import TimerScreen from '../screens/TimerScreen';


export default TabNavigator (
  {
    Routines: {
      screen: RoutineScreen,
    },
    Timers: {
      screen: TimerScreen,
    },
  }, {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch(routeName) {
          case 'Routines':
          iconName = 'run-fast';
          break;
          case 'Timers':
          iconName = 'timer-sand';
          break;
        }
        return (
          < MaterialCommunityIcons 
            name={iconName}
            size={25}
            style ={{marginBottom: -3}}
            color={ focused ? activeTab : inactiveTab }
          />    
        );
      }, 
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    // swipeEnabled: true,
  }
);