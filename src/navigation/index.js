import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {
  MaterialCommunityIcons,
  MaterialIcons
}  from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import {PRIMARY_SCREEN_COLOR} from "../../res/colors";
import Home from '../Screens/HomeScreen';
import Favourite from '../Screens/FaviouriteScreen';
import Setting from '../Screens/Setting';

const Tab = createMaterialBottomTabNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName="Home"
      activeColor="#3e2465"
      inactiveColor="#8366ae"
      barStyle={{backgroundColor: PRIMARY_SCREEN_COLOR}}
      >
      <Tab.Screen 
      name="Home" 
      component={Home}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name='home' color={color} size={26}/>
        ),
      }} />
      <Tab.Screen
      name='Favourite'
      component={Favourite}
      options={{
        tabBarLabel: 'Favourite',
        tabBarIcon: ({color}) => (
          <MaterialIcons name='favorite' color={color} size={26}/>
        ),
      }}
      />
      <Tab.Screen
      name='Setting'
      component={Setting}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({color}) => (
            <MaterialIcons name='settings' color={color} size={26}/>
          ),
        }}
      />
      
    </Tab.Navigator>
    </NavigationContainer>
    
  );
}
export default Navigation;