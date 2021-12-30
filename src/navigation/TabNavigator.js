import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, ContactStackNavigator } from "./StackNavigator";
import Home from "../screens/home";
import About from "../screens/about";
import Contact from "../screens/contact";
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TabHome" component={Home} />
      <Tab.Screen name="TabContact" component={Contact} />
      <Tab.Screen name="TabAbout" component={About} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;