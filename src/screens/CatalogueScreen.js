import React from "react";
import { ScrollView, StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Navbar } from "../components/Navbar";
import { SearchInput } from "../components/SearchInput";
import { useNavigation } from "@react-navigation/native";
import CategoryBgTan from "../icons/CategoryBgTan";

export const CatalogueScreen = (props) => {
  const navigation = useNavigation();
  return(
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        
        <ScrollView 
          style={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.title}>Каталог</Text>
          <SearchInput style={{marginBottom: 20,}} title="Что вы ищите?"/>
          <View style={styles.scrollTopContainer}>
            <TouchableOpacity 
              style={{width: "48.5%"}}
              onPress={() => navigation.navigate('Category')}
            >
              <LinearGradient colors={['#EDDFCB', '#DBC3A0']} style={styles.bigItem}>
                <Text style={[styles.itemTitle, {marginBottom: 7,}]}>Средства по уходу за телом</Text>
                <Text style={styles.itemDescr}>Краткое описание категории</Text>
                <LinearGradient colors={['#DBC3A0', '#EDDFCB']} locations={[1, 0.99]} style={styles.itemBgTan}></LinearGradient>
                <Image
                  source={require("../img/category1.png")}
                  style={styles.categoryImg1}
                />
              </LinearGradient>
            </TouchableOpacity>
            
            <View style={styles.categoryTopRight}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Category')}
              >
                <LinearGradient colors={['#F7ECE8', '#E3C3B6']} style={styles.smallItem}>
                  <Text style={styles.itemTitle}>Уход за кожей лица</Text>
                  <LinearGradient colors={['#E3C3B6', '#F7ECE8']} locations={[1, 0.99]} style={styles.itemBgPink}></LinearGradient>
                  <Image
                    source={require("../img/category2.png")}
                    style={styles.categoryImg2}
                  />
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Category')}
              >
                <LinearGradient colors={['#D0EBD5', '#98CBA1']} style={[styles.smallItem, {marginBottom: 0,}]}>
                  <Text style={styles.itemTitle}>Сыворотки Активные компоненты</Text>
                  <LinearGradient colors={['#9AC6AD', '#C2ECD4']} locations={[0, 0.01]} style={styles.itemBgGreen}></LinearGradient>
                  <Image
                    source={require("../img/category3.png")}
                    style={styles.categoryImg3}
                  />
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Category')}
          >
            <LinearGradient colors={['#E6B8D6', '#F1DCEA']} style={styles.itemBottom}>
              <Text style={[styles.itemTitle, {marginBottom: 5, textAlign: "left"}]}>Средства по уходу за телом</Text>
              <Text style={[styles.itemDescr, {textAlign: "left"}]}>Краткое описание{"\n"}категории</Text>
              <LinearGradient colors={['#F1DCEA', '#E3C3B6']} locations={[0.99, 1]} style={styles.itemBgPurple}></LinearGradient>
              <Image
                source={require("../img/category4.png")}
                style={styles.categoryImg4}
              />
            </LinearGradient>
          </TouchableOpacity>
          
        </ScrollView>
      </View>
      <Navbar navigation={navigation} active="Catalogue" activeText="Catalogue"/>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    width: "100%",
  },
  container: {
    paddingTop: 66,
    flex: 1,
    alignItems: "center",
    width: "100%"
  },
  mainContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    marginBottom: 21,
    fontFamily: "MontserratBold",
    fontSize: 20,
    lineHeight: 20,
    textAlign: "center",
    color: "#373737",
  },
  scrollTopContainer: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bigItem: {
    flexGrow: 1,
    width: "100%",
    paddingHorizontal: 23,
    paddingTop: 287,
    paddingBottom: 48,
    borderRadius: 25,
  },
  categoryTopRight: {
    width: "48.5%",
  },
  smallItem: {
    marginBottom: 11,
    paddingTop: 150,
    paddingBottom: 17,
    width: "100%",
    paddingHorizontal: 33,
    flexGrow: 1,
    borderRadius: 25,
  },
  categoryImg1: {
    position: "absolute",
    top: 75,
    left: 51,
  },
  categoryImg2: {
    position: "absolute",
    top: 21,
    left: 53,
  },
  categoryImg3: {
    position: "absolute",
    top: 17,
    left: 57,
  },
  itemTitle: {
    fontFamily: "MontserratBold",
    fontSize: 12,
    lineHeight: 14,
    textAlign: "center",
    textTransform: "uppercase",
    color: "#FFFFFF",
  },
  itemDescr: {
    fontFamily: "MontserratRegular",
    fontSize: 10,
    lineHeight: 12,
    textAlign: "center",
    color: "#FFFFFF",
  },
  itemBottom: {
    paddingTop: 36,
    paddingRight: 52,
    paddingBottom: 36,
    paddingLeft: 138,
    borderRadius: 25,
  },
  categoryImg4: {
    position: "absolute",
    top: 4,
    left: 39,
  },

  itemBgTan: {
    position: "absolute",
    top: 115,
    left: "22%",
    width: 115,
    height: 115,
    borderRadius: 100,
  },
  itemBgPink: {
    position: "absolute",
    top: 50,
    left: "42%",
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  itemBgGreen: {
    position: "absolute",
    top: 45,
    left: "42%",
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  itemBgPurple: {
    position: "absolute",
    top: 28,
    left: "16%",
    width: 80,
    height: 80,
    borderRadius: 100,
  }
})