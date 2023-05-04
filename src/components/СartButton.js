import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CartIcon from "../icons/CartIcon";

export const CartButton = () => {
  return(
    <TouchableOpacity>
      <View style={styles.linearGradient}>
        <Text style={styles.buttonText}>
          В корзину
        </Text>
        <CartIcon style={{position: "absolute", top: 10, left: 26,}}/>
      </View>
    </TouchableOpacity>
    
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    backgroundColor: "#9AC6AD",
    borderRadius: 10,
    paddingVertical: 13,
    paddingLeft: 52,
    paddingRight: 28,
  },
  buttonText: {
    textAlign: "center",
    fontFamily: "MontserratSemiBold",
    fontSize: 12,
    color: "#fff"
  }
})