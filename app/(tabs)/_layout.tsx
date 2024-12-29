import { Tabs, Redirect } from "expo-router";
import React from "react";
import TabBar from "../../components/TabBar";
import { useUI } from "../../context/UIContext";
import { useAuth } from '@clerk/clerk-expo';

const TabsLayout = () => {
  const { isTabBarVisible } = useUI();
  const { isSignedIn } = useAuth();

  // Redirect to sign-in if not authenticated
  if (!isSignedIn) {
    return <Redirect href="/sign-in" />;
  }

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
