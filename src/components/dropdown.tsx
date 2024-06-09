import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Entypo from "react-native-vector-icons/Entypo";

interface Item {
  title: string;
  value: string | number;
}

// Define the interface for the props
interface DropdownPickerProps {
  title: string;
  data: Item[];
  selectedValues: [];
  onSelect: (selected: []) => void;
  placeHolderTitle: string;
}

// Update the component to use the props interface
export const DropdownPicker: React.FC<DropdownPickerProps> = ({
  title,
  data,
  selectedValues,
  onSelect,
  placeHolderTitle,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleSelect = (item: Item) => {
    if (title === "Skills") {
      if (selectedValues.includes(item.title)) {
        onSelect(selectedValues.filter((value) => value !== item.title));
      } else {
        onSelect([...selectedValues, item.title]);
      }
    } else {
      onSelect(item.value);
    }
    setIsVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{title}</Text>
      <TouchableOpacity
        style={styles.input}
        onPress={() => setIsVisible(!isVisible)}
      >
        <Text style={styles.text}>
          <Text>
            {Array.isArray(selectedValues) && selectedValues.length > 0
              ? selectedValues.join(", ")
              : placeHolderTitle}
          </Text>
        </Text>
        <View style={styles.plusView}>
          <Entypo name={"plus"} size={20} color={"#fff"} />
        </View>
      </TouchableOpacity>
      {isVisible && (
        <View style={styles.dropdown}>
          <ScrollView nestedScrollEnabled={true}>
            {data.map((item) => (
              <TouchableOpacity
                key={item.value}
                style={styles.item}
                onPress={() => handleSelect(item)}
              >
                <Text>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

interface Item {
  title: string;
  value: string | number;
}

interface DropdownProps {
  title: string;
  data: Item[];
  selectedValue: Item | null;
  onSelect: (item: Item) => void;
  placeHolderTitle: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  title,
  data,
  selectedValue,
  onSelect,
  placeHolderTitle,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleSelect = (item: Item) => {
    onSelect(item);
    setIsVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{title}</Text>
      <TouchableOpacity
        style={styles.input}
        onPress={() => setIsVisible(!isVisible)}
      >
        <Text style={styles.text}>
          <Text>{selectedValue ? selectedValue.title : placeHolderTitle}</Text>
        </Text>
        <View style={[styles.plusView, { backgroundColor: "#F2F2F3" }]}>
          <Entypo name={"chevron-small-down"} size={20} color={"#95969D"} />
        </View>
      </TouchableOpacity>
      {isVisible && (
        <View style={styles.dropdown}>
          <ScrollView nestedScrollEnabled={true}>
            {data.map((item) => (
              <TouchableOpacity
                key={item.value}
                style={styles.item}
                onPress={() => handleSelect(item)}
              >
                <Text>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    marginTop: 10,
  },
  label: {
    fontSize: 14,
    color: "#040607",
    fontWeight: "500",
    marginBottom: 5,
  },
  input: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: wp(90),
    backgroundColor: "#F2F2F3",
    borderRadius: 8,
  },
  dropdown: {
    backgroundColor: "#F2F2F3",
    borderRadius: 8,
    marginTop: 5,
    maxHeight: 200,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
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
  text: {
    padding: 15,
  },
});
