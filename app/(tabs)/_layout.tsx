import { Tabs } from "expo-router";
import React from "react";
import TabBar from "../../components/TabBar";
import { useUI } from "../../context/UIContext";


const TabsLayout = () => {
  const { isTabBarVisible } = useUI();

  return (
    <Tabs tabBar={(props) => (isTabBarVisible ? <TabBar {...props} /> : null)}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="manage"
        options={{
          title: "Manage",
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
