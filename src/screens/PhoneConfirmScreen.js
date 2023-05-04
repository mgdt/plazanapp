import React, { useRef} from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { MainButton } from "../components/MainButton";
import { useNavigation } from "@react-navigation/native";
import { InputSms } from "../components/InputSms";


export const PhoneConfirmScreen = () => {
  const navigation = useNavigation();

  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();

  const inputs = [firstInput, secondInput, thirdInput, fourthInput];

  function handleChange(index) {
    inputs[index].current.focus();
  }
  return(
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Введите код из смс</Text>
        <Text style={styles.descr}>Четырехзначный код был отправлен{"\n"}на номер +7 (999) 888 77 66</Text>
        <View style={styles.inputWrapper}>
          <InputSms
            innerRef={firstInput}
            onChangeText={() => handleChange(1)}
            keyboardType="phone-pad"
            textAlign="center"
            maxLength={1}
            style={{marginRight: 10,}}
          />
          <InputSms
            innerRef={secondInput}
            onChangeText={() => handleChange(2)}
            keyboardType="phone-pad"
            textAlign="center"
            maxLength={1}
            style={{marginRight: 10,}}
          />
          <InputSms
            innerRef={thirdInput}
            onChangeText={() => handleChange(3)}
            keyboardType="phone-pad"
            textAlign="center"
            maxLength={1}
            style={{marginRight: 10,}}
          />
          <InputSms
            innerRef={fourthInput}
            keyboardType="phone-pad"
            textAlign="center"
            maxLength={1}
          />
        </View>
        <View>
          <Text style={styles.descrBottom}>
            Отправить код еще раз
          </Text>
        </View>
        
        <MainButton 
          title="Продолжить"
          onPress={() => {
            navigation.navigate("SignupThanksScreen");
          }}
        />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 126,
    paddingHorizontal: 20,
    alignItems: "center",
    backgroundColor: "#fff",
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
  descrBottom: {
    marginBottom: 20,
    fontFamily: "MontserratMedium",
    fontSize: 14,
    lineHeight: 17,
    textAlign: "center",
    color: "#71727A",
  },
  inputWrapper: {
    marginBottom: 103,
    paddingHorizontal: 41,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    paddingHorizontal: 21,
    paddingVertical: 16,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#C5C6CC",
    borderRadius: 12,
    color: "#9AC6AD",
  }
})