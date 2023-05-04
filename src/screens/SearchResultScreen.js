import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Navbar } from "../components/Navbar";
import ReturnIcon from "../icons/ReturnIcon";
import { PromoList } from "../components/PromoList";
import { SearchInput } from "../components/SearchInput";
import { FilterContainer } from "../components/FilterContainer";

export const SearchResulrScreen = () => {
  return(
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <ReturnIcon style={{left: 20,}}/>
        <Text style={styles.title}>Результаты поиска</Text>
        <SearchInput style={{marginBottom: 12,}} title="крем для лица"/>
        <FilterContainer style={{marginBottom: 23,}}/>
        <Text style={styles.amountText}>Найдено товаров: 126</Text>
        <PromoList/>
      </View>
      <Navbar active="Catalogue" activeText="Catalogue"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 66,
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  mainContainer: {
    width: "100%",
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    marginBottom: 21,
    fontFamily: "MontserratBold",
    fontSize: 18,
    lineHeight: 20,
    textAlign: "center",
    color: "#373737",
  },
  amountText: {
    marginBottom: 20,
    fontFamily: "MontserratRegular",
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
    color: "rgba(55, 55, 55, 0.5)"
  }
})