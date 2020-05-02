import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Theme from './Theme';
import { Feather, AntDesign, Ionicons } from '@expo/vector-icons';
import PickUser from './screens/PickUser';
import UserSignup from './screens/UserSignup';
import MerchantSignup from './screens/MerchantSignup';
import UserMain from './screens/UserMain';
import MerchantMain from './screens/MerchantMain';
import BookingConfirmed from './screens/BookingConfirmed';
import MerchantApproved from './screens/MerchantApproved';
import Login from './screens/Login';
import Notice from './screens/Notice';
import Profile from './screens/user/Profile'
import Call from './screens/Call'
import Security from './screens/user/Security'
import Cost from './screens/user/Cost';
import HelpCenter from './screens/user/HelpCenter';
import Terms from './screens/user/Terms';
import CostMerchant from './screens/merchant/CostMerchant';
import HelpCenterMerchant from './screens/merchant/HelpCenterMerchant';
import ProfileMerchant from './screens/merchant/ProfileMerchant';
import SecurityMerchant from './screens/merchant/SecurityMerchant';
import TermsMerchant from './screens/merchant/TermsMerchant';
import PurchaseMerchant from './screens/merchant/PurchaseMerchant';
import AdApply from './screens/merchant/AdApply';
import License from './screens/merchant/License';
import OrderUser from './screens/user/OrderUser';
import OrderMerchant from './screens/merchant/OrderMerchant';




const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const img = 'https:randomuser.me/api/portraits/women/94.jpg';


// drawer content for sidebar design purpose
const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView
      style={{ backgroundColor: Theme.dark }}
      {...props}
    >
      <View style={{ padding: 25, alignItems: 'center' }}>
        <Text
          style={{
            color: '#fff',
            fontFamily: Theme.bison,
            paddingTop: 10,
            fontSize: Theme.large * 2,
          }}
        >
          Hello User
         </Text>
      </View>
      <DrawerItemList
        labelStyle={{ fontFamily: Theme.rubik, color: '#e5e5e5' }}
        activeTintColor={'white'}
        activeBackgroundColor={Theme.primaryLight}
        {...props}
      />
    </DrawerContentScrollView>
  );
};

//TODO: please make the following screens : Notice, Privacy Policy , My Matching , Report
// this drawer is made for merchant
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      initialRouteName='Home'
    >
      <Drawer.Screen
        options={{
          drawerIcon: ({ focused, activeTintColor }) => (
            <Feather name='home' size={20} color={'#fff'} />
          ),
        }}
        name='Home'
        component={UserMain}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ focused, activeTintColor }) => (
            <Feather name='user' size={20} color={'#fff'} />
          ),
        }}
        name='Profile'
        component={Profile}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ focused, activeTintColor }) => (
            <Feather name='lock' size={20} color={'#fff'} />
          ),
        }}
        name='Security'
        component={Security}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ focused, activeTintColor }) => (
            <Feather name='user' size={20} color={'#fff'} />
          ),
        }}
        name='My Matching'
        component={Cost}
      />

      <Drawer.Screen
        options={{
          drawerIcon: ({ focused, activeTintColor }) => (
            <Feather name='file' size={20} color={'#fff'} />
          ),
        }}
        name='Notice'
        component={HelpCenterMerchant}
      />

      <Drawer.Screen
        options={{
          drawerIcon: ({ focused, activeTintColor }) => (
            <Feather name='help-circle' size={20} color={'#fff'} />
          ),
        }}
        name='Terms & Condition'
        component={Terms}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ focused, activeTintColor }) => (
            <Feather name='help-circle' size={20} color={'#fff'} />
          ),
        }}
        name='Privacy Policy'
        component={Terms}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ focused, activeTintColor }) => (
            <AntDesign name='customerservice' size={20} color={'#fff'} />
          ),
        }}
        name='Help Center'
        component={HelpCenter}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ focused, activeTintColor }) => (
            <AntDesign name='customerservice' size={20} color={'#fff'} />
          ),
        }}
        name='Report'
        component={HelpCenter}
      />
    </Drawer.Navigator>
  );
}



//TODO: please make the following screens : Notice, Privacy Policy , My Matching , Report
// this drawer is made for user
function DrawerNavigatorMerchant() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContentMerchant {...props} />}
      initialRouteName='Home'
    >
      <Drawer.Screen
        options={{
          drawerIcon: ({ focused, activeTintColor }) => (
            <Feather name='home' size={20} color={'#fff'} />
          ),
        }}
        name='Home'
        component={MerchantMain}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ focused, activeTintColor }) => (
            <Feather name='user' size={20} color={'#fff'} />
          ),
        }}
        name='Profile'
        component={ProfileMerchant}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ focused, activeTintColor }) => (
            <Feather name='lock' size={20} color={'#fff'} />
          ),
        }}
        name='Security'
        component={SecurityMerchant}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ focused, activeTintColor }) => (
            <Ionicons name='md-image' size={20} color={'#fff'} />
          ),
        }}
        name='AD Apply'
        component={AdApply}
      />

      <Drawer.Screen
        options={{
          drawerIcon: ({ focused, activeTintColor }) => (
            <Feather name='file' size={20} color={'#fff'} />
          ),
        }}
        name='License Upload'
        component={License}
      />

      <Drawer.Screen
        options={{
          drawerIcon: ({ focused, activeTintColor }) => (
            <Feather name='dollar-sign' size={20} color={'#fff'} />
          ),
        }}
        name='Minimum Cost'
        component={CostMerchant}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ focused, activeTintColor }) => (
            <Feather name='dollar-sign' size={20} color={'#fff'} />
          ),
        }}
        name='Purhcase'
        component={PurchaseMerchant}
      />

      <Drawer.Screen
        options={{
          drawerIcon: ({ focused, activeTintColor }) => (
            <Feather name='user' size={20} color={'#fff'} />
          ),
        }}
        name='My Matching'
        component={TermsMerchant}
      />

      <Drawer.Screen
        options={{
          drawerIcon: ({ focused, activeTintColor }) => (
            <Feather name='file' size={20} color={'#fff'} />
          ),
        }}
        name='Notice'
        component={TermsMerchant}
      />

      <Drawer.Screen
        options={{
          drawerIcon: ({ focused, activeTintColor }) => (
            <Feather name='help-circle' size={20} color={'#fff'} />
          ),
        }}
        name='Terms & Condition'
        component={TermsMerchant}
      />

      <Drawer.Screen
        options={{
          drawerIcon: ({ focused, activeTintColor }) => (
            <Feather name='help-circle' size={20} color={'#fff'} />
          ),
        }}
        name='Privacy Policy'
        component={TermsMerchant}
      />

      <Drawer.Screen
        options={{
          drawerIcon: ({ focused, activeTintColor }) => (
            <AntDesign name='customerservice' size={20} color={'#fff'} />
          ),
        }}
        name='Help Center'
        component={HelpCenterMerchant}
      />

      <Drawer.Screen
        options={{
          drawerIcon: ({ focused, activeTintColor }) => (
            <AntDesign name='customerservice' size={20} color={'#fff'} />
          ),
        }}
        name='Report'
        component={HelpCenterMerchant}
      />

    </Drawer.Navigator>
  );
}


// drawer content for sidebar design purpose for merchant
const CustomDrawerContentMerchant = (props) => {
  return (
    <DrawerContentScrollView
      style={{ backgroundColor: Theme.dark }}
      {...props}
    >
      <View style={{ padding: 25, alignItems: 'center' }}>
        <Text
          style={{
            color: '#fff',
            fontFamily: Theme.bison,
            paddingTop: 10,
            fontSize: Theme.large * 2,
          }}
        >
          Hello Merchant
         </Text>
      </View>
      <DrawerItemList
        labelStyle={{ fontFamily: Theme.rubik, color: '#e5e5e5' }}
        activeTintColor={'white'}
        activeBackgroundColor={Theme.primaryLight}
        {...props}
      />
    </DrawerContentScrollView>
  );
};






class Route extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='PickUser' component={PickUser} />
          <Stack.Screen name='UserSignup' component={UserSignup} />
          <Stack.Screen name='MerchantSignup' component={MerchantSignup} />
          <Stack.Screen name='UserMain' component={DrawerNavigator} />
          <Stack.Screen name='MerchantMain' component={DrawerNavigatorMerchant} />
          <Stack.Screen name='BookingConfirmed' component={BookingConfirmed} />
          <Stack.Screen name='MerchantApproved' component={MerchantApproved} />
          <Stack.Screen name='Notice' component={Notice} />
          <Stack.Screen name='Call' component={Call} />
          <Stack.Screen name='OrderUser' component={OrderUser} />
          <Stack.Screen name='OrderMerchant' component={OrderMerchant} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Route;
