import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import ReturnIcon from "../icons/ReturnIcon";
import { OrderList } from "../components/OrderList";
import { Navbar } from "../components/Navbar";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";


export const OrdersScreen = (props) => {
  const navigation = useNavigation();

  return(
    <LinearGradient colors={['#f7f7f7', '#fff']} style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.containerTop}>
          <Text style={styles.title}>Мои заказы</Text>
          <ReturnIcon 
            onPress={() => navigation.navigate('Profile')}
          />
          <OrderList/>
        </View>
      </ScrollView>
      <Navbar active="Profile" activeText="Profile"/>
    </LinearGradient>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center"
  },
  scroll: {
    flex: 1,
    width: "100%",
    paddingTop: 64,
    paddingHorizontal: 20,
  },
  containerTop: {
    position: "relative",
    width: "100%",
  },
  title: {
    marginBottom: 52,
    fontFamily: "MontserratBold",
    fontSize: 18,
    lineHeight: 22,
    textAlign: "center",
    color: "#373737",
  }
})