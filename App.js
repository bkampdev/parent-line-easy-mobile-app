import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View, StyleSheet, Dimensions, Platform } from "react-native";
import { BlurView } from "expo-blur";
import Toast from "react-native-toast-message";
import { enableScreens } from "react-native-screens";

import Home from "./src/pages/home/Home.jsx";
import Search from "./src/pages/search/Search.jsx";
import Settings from "./src/pages/settings/Settings.jsx";
import Login from "./src/pages/login/Login.jsx";

enableScreens();

import { AuthProvider, useAuth } from "./src/context/AuthContext";
import { BlurProvider, BlurContext } from "./src/context/BlurContext";
import { ProductsProvider } from "./src/context/ProductsContext";
import FirstAccess from "./src/pages/login/FirstAccess/FirstAccess.jsx";
import ChangePassword from "./src/pages/login/ChangePassword/ChangePassword";
import ApprovedOrder from "./src/Components/ApprovedOrder/ApprovedOrder";
import HomeIcon from "./assets/icons/HomeIcon.jsx";
import SearchIcon from "./assets/icons/Search.jsx";
import SettingsIcon from "./assets/icons/SettingsIcon.jsx";
import PixDeposit from "./src/Components/PixDeposit/PixDeposit.jsx";
import NotificationsScreen from "./src/pages/settings/Notifications/Notifications.jsx";
import PixAndCard from "./src/pages/settings/PixAndCard/PixAndCard.jsx";
import PixAndCardSchedule from "./src/pages/settings/PixAndCardSchedule/PixAndCardSchedule.jsx";
import HideCategories from "./src/pages/settings/HideCategories/HideCategories.jsx";
import HideProducts from "./src/pages/settings/HideProducts/HideProducts.jsx";
import IceCreamDayConfig from "./src/pages/settings/IceCreamDayConfig/IceCreamDayConfig.jsx";
import { TransactionsProvider } from "./src/context/TransactionsContext.jsx";
import { ResponsibleProvider } from "./src/context/ResponsibleContext.jsx";
import { CategoriesProvider } from "./src/context/CategoriesContext.jsx";
import { CardProvider } from "./src/context/CardContext.jsx";
import { NotificationsProvider } from "./src/context/NotificationsContext.jsx";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function CustomTabBarIcon({ component: Component, focused }) {
  return (
    <View style={{ alignItems: "center" }}>
      <Component color={focused ? "#FF6900" : "gray"} />
      {focused && <View style={styles.activeTabIndicator} />}
    </View>
  );
}

function TabNavigator() {
  const { setSearchBlurActive } = useContext(BlurContext);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,

        tabBarIcon: ({ focused, color, size }) => {
          const iconColor = focused ? "#FF6900" : "#3E3E3E";
          let iconName;

          switch (route.name) {
            case "Home":
              iconName = "home";
              return <HomeIcon color={iconColor} />;
            case "Search":
              iconName = "search1";
              return <SearchIcon color={iconColor} />;
            case "Settings":
              iconName = "settings";
              return <SettingsIcon color={iconColor} />;
          }
        },
        tabBarShowLabel: true,
        headerShown: false,
        tabBarStyle: {
          paddingVertical: 5,
          backgroundColor: "white",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.53,
          shadowRadius: 13.97,
          elevation: 21,
        },
        tabBarActiveTintColor: "#FF6900",
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        name="Search"
        component={Search}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();

            setSearchBlurActive(true);

            <Search />;
          },
        })}
      />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

function AppContent() {
  const { userToken } = useAuth();
  const { isBlurActive, isSearchBlurActive } = useContext(BlurContext);

  const screenHeight = Dimensions.get("window").height;

  const styles = StyleSheet.create({
    blurView: {
      ...StyleSheet.absoluteFillObject,
      top: Platform.OS === "ios" ? screenHeight * 0.372 : screenHeight * 0.33,
    },
  });

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false, gestureEnabled: false }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="TabNavigator" component={TabNavigator} />
          <Stack.Screen name="FirstAccess" component={FirstAccess} />
          <Stack.Screen name="ChangePassword" component={ChangePassword} />
          <Stack.Screen name="ApprovedOrder" component={ApprovedOrder} />
          <Stack.Screen name="PixDeposit" component={PixDeposit} />
          <Stack.Screen name="Notifications" component={NotificationsScreen} />
          <Stack.Screen name="PixAndCard" component={PixAndCard} />
          <Stack.Screen
            name="PixAndCardSchedule"
            component={PixAndCardSchedule}
          />
          <Stack.Screen name="HideCategories" component={HideCategories} />
          <Stack.Screen name="HideProducts" component={HideProducts} />
          <Stack.Screen
            name="IceCreamDayConfig"
            component={IceCreamDayConfig}
          />
        </Stack.Navigator>

        {isSearchBlurActive && (
          <>
            <BlurView
              style={StyleSheet.absoluteFillObject}
              intensity={30}
              tint="light"
            />

            <Search />
          </>
        )}
      </NavigationContainer>

      {isBlurActive && (
        <BlurView style={styles.blurView} intensity={30} tint="light" />
      )}
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <ResponsibleProvider>
        <TransactionsProvider>
          <CategoriesProvider>
            <BlurProvider>
              <ProductsProvider>
                <CardProvider>
                  <NotificationsProvider>
                    <AppContent />
                  </NotificationsProvider>
                </CardProvider>
              </ProductsProvider>
              <Toast />
            </BlurProvider>
          </CategoriesProvider>
        </TransactionsProvider>
      </ResponsibleProvider>
    </AuthProvider>
  );
}
