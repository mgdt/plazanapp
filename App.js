import { useState, useCallback} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { ProfileScreen } from "./src/screens/ProfileScreen";
import { LoadingScreen } from './src/screens/LoadingScreen';
import { MainScreen } from './src/screens/MainScreen';
import { CatalogueScreen } from "./src/screens/CatalogueScreen";
import { CartScreen } from './src/screens/CartScreen';
import { OrdersScreen } from './src/screens/OrdersScreen';
import { InfoScreen } from './src/screens/InfoScreen';
import { PromoScreen } from './src/screens/PromoScreen';
import { CategoryScreen } from './src/screens/CategoryScreen';
import { useFonts } from "expo-font";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RegisterTab } from './src/tabs/RegisterTab';
import * as SplashScreen from "expo-splash-screen";
import { UserPrivateFormScreen } from './src/screens/UserPrivateFormScreen';
import { OrderTab } from './src/tabs/OrderTab';
import { ItemScreen } from './src/screens/ItemScreen';
import { FiltersScreen } from './src/screens/FiltersScreen'
import { SortScreen } from './src/screens/SortScreen'
import { SearchResulrScreen } from './src/screens/SearchResultScreen';
import { OrderSummaryScreen } from "./src/screens/OrderSummaryScreen";
import { FeedbackScreen } from './src/screens/FeedbackScreen';
import { SearchScreen } from './src/screens/SearchScreen';

// SplashScreen.preventAutoHideAsync();

const Tab = createBottomTabNavigator();

export default function App() {
    
  const [fontsLoaded] = useFonts({
    MontserratLight: require("./src/fonts/Montserrat-Light.ttf"),
    MontserratRegular: require("./src/fonts/Montserrat-Regular.ttf"),
    MontserratMedium: require("./src/fonts/Montserrat-Medium.ttf"),
    MontserratBold: require("./src/fonts/Montserrat-Bold.ttf"),
    MontserratSemiBold: require("./src/fonts/Montserrat-SemiBold.ttf"),
    MontserratExtraBold: require("./src/fonts/Montserrat-ExtraBold.ttf"),
  });

  const [initialScreen, setInitialScreen] = useState("LoadingScreen");

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer onLayout={onLayoutRootView}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
        initialRouteName={initialScreen}
        backBehavior="none"
      >
        <Tab.Screen
          options={{ tabBarStyle: { display: "none" } }}
          name="RegisterTab"
          component={RegisterTab}
        ></Tab.Screen>
        <Tab.Screen
          options={{ tabBarStyle: { display: "none" } }}
          name="OrderTab"
          component={OrderTab}
        ></Tab.Screen>
        <Tab.Screen
          name="Main"
          component={MainScreen}
          options={{ tabBarStyle: { display: "none" } }}
        />
        <Tab.Screen
          name="Catalogue"
          component={CatalogueScreen}
          options={{ tabBarStyle: { display: "none" } }}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{ tabBarStyle: { display: "none" } }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ tabBarStyle: { display: "none" } }}
        />
        <Tab.Screen
          name="PersonalInfo"
          component={UserPrivateFormScreen}
          options={{ tabBarStyle: { display: "none" } }}
        />
        <Tab.Screen
          name="Orders"
          component={OrdersScreen}
          options={{ tabBarStyle: { display: "none" } }}
        />
        <Tab.Screen
          name="Info"
          component={InfoScreen}
          options={{ tabBarStyle: { display: "none" } }}
        />
        <Tab.Screen
          name="Category"
          component={CategoryScreen}
          options={{ tabBarStyle: { display: "none" } }}
        />
        <Tab.Screen
          name="Promo"
          component={PromoScreen}
          options={{ tabBarStyle: { display: "none" } }}
        />
        <Tab.Screen
          name="Item"
          component={ItemScreen}
          options={{ tabBarStyle: { display: "none" } }}
        />
        <Tab.Screen
          name="Filter"
          component={FiltersScreen}
          options={{ tabBarStyle: { display: "none" } }}
        />
        <Tab.Screen
          name="Sort"
          component={SortScreen}
          options={{ tabBarStyle: { display: "none" } }}
        />
        <Tab.Screen
          name="SearchResult"
          component={SearchResulrScreen}
          options={{ tabBarStyle: { display: "none" } }}
        />
        <Tab.Screen
          name="OrderedItem"
          component={OrderSummaryScreen}
          options={{ tabBarStyle: { display: "none" } }}
        />
        <Tab.Screen
          name="Feedback"
          component={FeedbackScreen}
          options={{ tabBarStyle: { display: "none" } }}
        />
        <Tab.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{ tabBarStyle: { display: "none" } }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});