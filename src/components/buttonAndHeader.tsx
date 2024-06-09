import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Feather from "react-native-vector-icons/Feather";

interface ButtonProps {
  title: string;
}
export const Header: React.FC<ButtonProps> = ({ title }) => {
  return (
    <View style={styles.headerView}>
      <Feather name="chevron-left" size={24} color="#222741" />
      <Text style={styles.jobText}>{title}</Text>
    </View>
  );
};

interface ButtonProps {
  title: string;
  handleOnpress: () => void;
}
export const Button: React.FC<ButtonProps> = ({ title, handleOnpress }) => {
  return (
    <View style={styles.buttonView}>
      <TouchableOpacity onPress={handleOnpress} style={styles.button}>
        <Text style={styles.startText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerView: {
    width: wp(30),
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 15,
  },
  jobText: {
    fontSize: 17,
    color: "#222741",
    fontWeight: "500",
  },
  mainView: {
    width: wp(90),
    alignSelf: "center",
    marginTop: 10,
  },
  inputView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: wp(90),
    backgroundColor: "#F2F2F3",
    borderRadius: 8,
  },
  jobTitleText: {
    fontSize: 14,
    color: "#040607",
    fontWeight: "500",
    marginVertical: 5,
  },
  input: {
    paddingHorizontal: 15,
  },
  plusView: {
    width: 34,
    height: 34,
    backgroundColor: "#01C96C",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  plus: {
    color: "#fff",
    fontSize: 24,
  },
  buttonView: {
    width: wp(100),
    height: hp(10),
    position: "absolute",
    bottom: 0,
    borderTopWidth: 1,
    borderColor: "#AFB0B6",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  button: {
    width: wp(90),
    backgroundColor: "#01C96C",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  startText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
    padding: 15,
  },
});
