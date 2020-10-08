import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import LoadingScreen from '../screens/LoadingPageScreen';
import LoginScreen from '../screens/LoginPageScreen';
import SignupScreen from '../screens/SignupPageScreen';
import ProfileScreen from '../screens/ProfilePageScreen';
import HomeScreen from '../screens/HomePageScreen';
import RewardScreen from '../screens/RewardPageScreen';
import StatisticScreen from '../screens/StatisticPageScreen';
import StatisticTreeScreen from '../screens/StatisticTreePageScreen';
import StatisticMapScreen from '../screens/StatisticMapPageScreen';
import { BottomTabParamList, HomeParamList, ProfileParamList, RewardParamList, StatisticParamList} from '../types';


const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Reward"
        component={RewardNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="md-basket" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Statistic"
        component={StatisticNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="md-analytics" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="md-person" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="LoadingScreen"
        component={LoadingScreen}
        options={{ headerTitle: 'Loading Page' }}
      />
      <HomeStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerTitle: 'Login Page' }}
      />
      <HomeStack.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={{ headerTitle: 'Signup Page' }}
      />
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: 'Home Page' }}
      />
    </HomeStack.Navigator>
  );
}

const ProfileStack = createStackNavigator<ProfileParamList>();

function ProfileNavigator() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerTitle: 'Profile Page' }}
      />
    </ProfileStack.Navigator>
  );
}

const RewardStack = createStackNavigator<RewardParamList>();

function RewardNavigator() {
  return (
    <RewardStack.Navigator>
      <RewardStack.Screen
        name="RewardScreen"
        component={RewardScreen}
        options={{ headerTitle: 'Reward Page' }}
      />
    </RewardStack.Navigator>
  );
}

const StatisticStack = createStackNavigator<StatisticParamList>();

function StatisticNavigator() {
  return (
    <StatisticStack.Navigator>
      <StatisticStack.Screen
        name="StatisticScreen"
        component={StatisticScreen}
        options={{ headerTitle: 'Statistic Page' }}
      />
      <StatisticStack.Screen
        name="StatisticTreeScreen"
        component={StatisticTreeScreen}
        options={{ headerTitle: 'StatisticTree Page' }}
      />
      <StatisticStack.Screen
        name="StatisticMapScreen"
        component={StatisticMapScreen}
        options={{ headerTitle: 'StatisticMap Page' }}
      />
    </StatisticStack.Navigator>
  );
}