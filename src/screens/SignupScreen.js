import React from "react";
import { StyleSheet, Text, TextInput, View} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { MainButton } from "../components/MainButton";
import { useNavigation } from "@react-navigation/native";


export const SignupScreen = () => {
  const navigation = useNavigation();
  
  return (
    <LinearGradient colors={['#f7f7f7', '#fff']} style={styles.container}>
      <View>
        <Text style={styles.title}>Регистрация</Text>
        <Text style={styles.descr}>Укажите номер телефона,{"\n"}на который будет отправлен{"\n"}код подтверждения</Text>
        <TextInput
          style={styles.input} 
          placeholder="Номер телефона"
          textAlign="center"
          placeholderTextColor="rgba(55, 55, 55, 0.5)"
          keyboardType="phone-pad"
          inputMode="tel"
        />
        <MainButton 
          title="Отправить код"
          onPress={() => {
            navigation.navigate("PhoneConfirmScreen");
          }}
        />
      </View>
      <View>
        <Text style={styles.descrBottom}>
          Нажимая кнопку, вы даете согласие{"\n"}на обработку моих персональных данных
        </Text>
      </View>
      
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: 156,
    paddingBottom: 50,
    paddingHorizontal: 20,
  },
  title: {
    marginBottom: 20,
    fontFamily: "MontserratBold",
    fontSize: 20,
    lineHeight: 24,
    textAlign: "center",
  },
  descr: {
    marginBottom: 29,
    fontFamily: "MontserratRegular",
    fontSize: 15,
    lineHeight: 18,
    textAlign: "center",
    color: "#71727A",
  },
  input: {
    fontFamily: "MontserratRegular",
    marginBottom: 15,
    paddingVertical: 18,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
    borderColor: "rgba(55, 55, 55, 0.15)",
    backgroundColor: "#fff",
    fontSize: 16,
    lineHeight: 20,
  },
  descrBottom: {
    fontFamily: "MontserratRegular",
    fontSize: 12,
    lineHeight: 15,
    textAlign: "center",
    color: "rgba(113, 114, 122, 0.6)",
  },
});