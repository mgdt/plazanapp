import React from "react";
import { View, Text, ScrollView, TextInput, StyleSheet } from "react-native";
import { MainButton } from "../../components/MainButton";
import ReturnIcon from "../../icons/ReturnIcon";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export const OrderFirstForm = () => {
  const navigation = useNavigation();
  return(
    <LinearGradient colors={["#f7f7f7", "#fff"]} style={styles.container}>
      <ScrollView style={styles.scroll}>
        <ReturnIcon/>
        <Text style={styles.title}>
          Оформление
        </Text>
        <View style={styles.status}>
          <LinearGradient colors={['#C2ECD4', '#9AC6AD']} style={styles.statusActive}></LinearGradient>
        </View>
        <View style={styles.statusDescrContainer}>
          <Text style={styles.statusDescrActive}>Получатель</Text>
          <Text style={styles.statusDescr}>Доставка</Text>
          <Text style={styles.statusDescr}>Оплата</Text>
        </View>
        <Text style={styles.subTitle}>Данные получателя</Text>
        <View style={styles.form}>
          <TextInput 
            style={styles.input}
            placeholder="Имя"
            placeholderTextColor="rgba(55, 55, 55, 0.5)"
          />
          <TextInput 
            style={styles.input}
            placeholder="Фамилия"
            placeholderTextColor="rgba(55, 55, 55, 0.5)"
          />
          <TextInput 
            style={styles.input}
            placeholder="E-mail"
            inputMode="email"
            placeholderTextColor="rgba(55, 55, 55, 0.5)"
          />
          <TextInput 
            style={styles.input}
            placeholder="Телефон"
            inputMode="tel"
            placeholderTextColor="rgba(55, 55, 55, 0.5)"
          />
        </View>
      </ScrollView>
      <View style={styles.btnContainer}>
        <MainButton 
          title="Выбрать способ доставки"
          onPress={() => navigation.navigate('SecondStep')}  
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingBottom: 40,
  },
  scroll: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 64,
  },
  title: {
    marginBottom: 35,
    fontFamily: 'MontserratBold',
    fontSize: 20,
    textAlign: "center",
    color: "#373737",
  },
  status: {
    marginBottom: 16,
    width: "100%",
    height: 5,
    backgroundColor: "rgba(31, 32, 36, 0.15)",
    borderRadius: 100,
  },
  statusActive: {
    height: "100%",
    width: "33%",
  },
  statusDescrContainer: {
    marginBottom: 45,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },
  statusDescrActive: {
    fontFamily: 'MontserratSemiBold',
    fontSize: 14,
    lineHeight: 17,
    color: "#373737",
  },
  statusDescr: {
    fontFamily: 'MontserratRegular',
    fontSize: 14,
    lineHeight: 17,
    color: "rgba(rgba(113, 114, 122, 0.5)",
  },
  subTitle: {
    marginBottom: 25,
    fontFamily: 'MontserratBold',
    fontSize: 18,
    lineHeight: 22,
    textAlign: "center",
    color: "#373737",
  }, 
  form: {
    width: "100%",
  },
  input: {
    marginBottom: 15,
    paddingHorizontal: 24,
    paddingVertical: 18,
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(55, 55, 55, 0.15)",
    borderRadius: 10,
    fontFamily: "MontserratRegular",
    fontSize: 16,
    lineHeight: 20,
  },
  btnContainer: {
    width: "100%",
    paddingHorizontal: 20,
  }
})

