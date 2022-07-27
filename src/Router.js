import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Jobs from './pages/Jobs';
import JobDetail from './pages/Details';
import FavoriteJobs from './pages/FavoriteJobs';

import {favoriteSelectors} from './redux/favoritesSlice';
import {useSelector} from 'react-redux';

import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const JobStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="JobsPage"
        component={Jobs}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitle: 'Jobs',
          headerTintColor: '#fff',
          headerStyle: {backgroundColor: '#166e4f'},
        }}
      />
      <Stack.Screen
        name="JobDetailPage"
        component={JobDetail}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitle: 'Details',
          headerTintColor: '#fff',
          headerStyle: {backgroundColor: '#166e4f'},
        }}
      />
    </Stack.Navigator>
  );
};

const FavoriteStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="FavoriteJobsPage"
        component={FavoriteJobs}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitle: 'Favorite Jobs',
          headerTintColor: '#fff',
          headerStyle: {backgroundColor: '#166e4f'},
        }}
      />
    </Stack.Navigator>
  );
};

const Router = () => {
  const favorites = useSelector(favoriteSelectors.selectTotal);

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Jobs"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            let iconName;
            if (route.name === 'Jobs') {
              iconName = focused ? 'ios-briefcase' : 'ios-briefcase-outline';
            } else if (route.name === 'Favorites') {
              iconName = focused ? 'star' : 'star-outline';
            }
            return <Icon name={iconName} size={24} color="#fff" />;
          },
          tabBarStyle: {backgroundColor: 'red'},
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: 'grey',
          tabBarIconStyle: {textAlign: 'center'},
          headerShown: false,
          tabBarLabelStyle: {fontSize: 14},
        })}>
        <Tab.Screen name="Jobs" component={JobStack} />
        <Tab.Screen
          name="Favorites"
          component={FavoriteStack}
          options={{
            tabBarBadge: favorites > 0 ? favorites : null,
            tabBarBadgeStyle: {
              backgroundColor: '#166e4f',
              color: '#fff',
              borderColor: '#fff',
              borderWidth: 2,
              marginLeft: 9,
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
