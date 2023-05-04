import React from "react";
import { StyleSheet, View, Text } from "react-native";
import SignupThanksIcon from "../icons/SignupThanksIcon";
import { MainButton } from "../components/MainButton";
import CloseBtnIcon from "../icons/CloseBtnIcon";
import { useNavigation } from "@react-navigation/native";

export const SignupThanksScreen = () => {
  const navigation = useNavigation();

  return(
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <Text style={styles.title}>Спасибо за регистрацию</Text>
        <Text style={styles.descr}>Заполните поля, чтобы получить скидку{"\n"}на первый заказ, а также получать от{"\n"}нас подарки в ваш День Рождения </Text>
        <SignupThanksIcon />
        <CloseBtnIcon 
          onPress={() => {
            navigation.navigate("Main");
          }}
        />
      </View>
      <View style={styles.containerBottom}>
        <MainButton 
          style={{width: "100%",}}
          title="Заполнить информацию"
          onPress={() => {
            navigation.navigate("UserPrivateFormScreen");
          }}
        />
        <Text style={styles.descrBottom}>
          Заполнить и отредактировать информацию{"\n"}можно позже в личном кабинете
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 127,
    paddingBottom: 50,
    paddingHorizontal: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#fff",
  },
  containerTop: {
    flex: 1,
    alignItems: "center",
  },
  containerBottom: {
    width: "100%",
  },
  title: {
    marginBottom: 20,
    fontFamily: "MontserratBold",
    fontSize: 20,
    lineHeight: 24,
  },
  descr: {
    marginBottom: 69,
    fontFamily: "MontserratRegular",
    fontSize: 15,
    lineHeight: 18,
    textAlign: "center",
    color: "#71727A",
  },
  descrBottom: {
    fontFamily: "MontserratLight",
    fontSize: 12,
    lineHeight: 16,
    textAlign: "center",
    color: "#71727A",
  },
})