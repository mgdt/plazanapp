import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView, Modal, TouchableOpacity } from "react-native";
import { Navbar } from "../components/Navbar";
import MyOrdersIcon from "../icons/MyOrdersIcon";
import MyInfoIcon from "../icons/MyInfoIcon";
import MyProfileIcon from "../icons/MyProfileIcon";
import LogoutIcon from "../icons/LogoutIcon";
import ArrowIcon from "../icons/ArrowIcon";
import { ProfileUser } from "../components/ProfileUser";
import { Contacts } from "../components/Contacts";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

export const ProfileScreen = (props) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <LinearGradient colors={['#f7f7f7', '#fff']} style={styles.container}>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
          <View style={[styles.centeredView, {zIndex: 10}]}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Выйти из профиля</Text>
            <Text style={styles.modalDescr}>
            Вы уверены, что хотите выйти?{"\n"}Чтобы использовать приложение,{"\n"}необходимо будет заново{"\n"}авторизоваться по номеру{"\n"}телефона
            </Text>
            <View style={styles.modalBottom}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Отмена</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setModalVisible(!modalVisible)}
              >
                <LinearGradient colors={['#C2ECD4', '#9AC6AD']} style={[styles.linearGradient]}>
                  <Text style={styles.btnText}>Выйти</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={this.modalVisible ? [styles.dimBackground, {display: "none",}] : [styles.dimBackground, {display: "block",}]}></View>

      </Modal>

      <View style={styles.containerTop}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scroll}
          alignItems="center"
        >
          <Text style={styles.title}>Профиль</Text>
          <ProfileUser style={{marginBottom: 42,}} />
          
          <View style={styles.menu}>
            <TouchableOpacity 
              style={styles.profileMenuItem}
              onPress={() => navigation.navigate('PersonalInfo')}
            >
              <View style={styles.profileMuneItemLeft}>
                <MyProfileIcon/>
                <Text style={styles.listText}>Личные данные</Text>
              </View>
              <ArrowIcon />
            </TouchableOpacity>
            <TouchableOpacity style={styles.profileMenuItem}
              onPress={() => navigation.navigate('Orders')}
            >
              <View style={styles.profileMuneItemLeft}>
                <MyOrdersIcon/>
                <Text style={styles.listText}>Мои заказы</Text>
              </View>
              <ArrowIcon />
            </TouchableOpacity>
            <TouchableOpacity style={styles.profileMenuItem}
              onPress={() => navigation.navigate('Info')}
            >
              <View style={styles.profileMuneItemLeft}>
                <MyInfoIcon/>
                <Text style={styles.listText}>Информация</Text>
              </View>
              <ArrowIcon />
            </TouchableOpacity>
            <TouchableOpacity style={styles.profileMenuItemLast}
            onPress={() => setModalVisible(true)}>
              <View style={styles.profileMuneItemLeft}>
                <LogoutIcon/>
                <Text style={styles.listTextRed}>Выйти из профиля</Text>
              </View>
              <View></View>
            </TouchableOpacity>
          </View>

          <Contacts />
        </ScrollView>
      </View>
      <Navbar navigation={navigation} active="Profile"/>
    </LinearGradient>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  dimBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(55, 55, 55, 0.9)",
  },
  containerTop: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 64,
    paddingBottom: 120,
  },
  title: {
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "MontserratBold",
    fontWeight: 700,
    fontSize: 20,
    lineHeight: 24,
    color: "#373737",
  },
  scroll: {

    flex: 1,
    width: "100%",
    height: "100%",
  },
  menu: {
    width: 335,
    paddingBottom: 40,
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderBottomColor: "rgba(55, 55, 55, 0.15)", 
  },
  profileMenuItem: {
    width: "100%",
    marginBottom: 34,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileMenuItemLast: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  listText: {
    paddingLeft: 38,
    fontFamily: "MontserratMedium",
    fontSize: 15,
    lineHeight: 20,
    color: "#373737",
  },
  listTextRed: {
    paddingLeft: 38,
    fontFamily: "MontserratBold",
    fontSize: 15,
    lineHeight: 20,
    color: "#EB4747",
  },
  profileMuneItemLeft: {
    flexDirection: "row",
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingTop: 24,
    paddingBottom: 16,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  button: {
    marginRight: 8,
    paddingVertical: 11,
    paddingHorizontal: 35,
    borderRadius: 12,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#71727A",
  },
  textStyle: {
    fontFamily: 'MontserratMedium',
    fontSize: 15,
    lineHeight: 18,
    color: "#71727A",
  },
  modalText: {
    marginBottom: 8,
    fontFamily: 'MontserratBold',
    fontSize: 18,
    lineHeight: 22,
    color: "#373737",
    textAlign: 'center',
  },
  modalDescr: {
    marginBottom: 20,
    fontFamily: 'MontserratRegular',
    fontSize: 14,
    lineHeight: 18,
    textAlign: "center",
    color: "#71727A",
  },
  modalBottom : {
    flexDirection: "row",
  },
  linearGradient: {
    paddingVertical: 11,
    paddingHorizontal: 39,
    borderRadius: 12,
  },

  btnText: {
    fontFamily: 'MontserratSemiBold',
    fontSize: 15,
    lineHeight: 18,
    color: "#FFFFFF",
  }
  
});