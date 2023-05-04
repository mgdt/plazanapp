import React from "react";
import { StyleSheet, View, Text, Image } from "react-native"
import AvatarEditIcon from "../icons/AvatarEditIcon";

export const ProfileUser = (props, {userAvatar, userPhone, userName}) => {
  return(
    <View style={[styles.container, props.style]}>
      <View>
        <Image style={styles.profilePhoto} 
          source={require('../img/profile-photo.png')}
        /> 
        <AvatarEditIcon style={{position: "absolute", top: 65, right: 0}}/>
      </View>
        <Text style={styles.profilePhone}>
          +7 (909) 912 49 59
        </Text>
        <Text style={styles.profileName}>
          Екатерина М.
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  profilePhoto: {
    marginBottom: 13,
  },
  profilePhone: {
    marginBottom: 4,
    fontFamily: "MontserratBold",
    fontSize: 18,
    lineHeight: 22,
    textAlign: "center",
    color: "#373737",
  },
  profileName: {
    fontFamily: "MontserratRegular",
    fontSize: 14,
    lineHeight: 16,
    textAlign: "center",
    color: "#71727A",

  }
});