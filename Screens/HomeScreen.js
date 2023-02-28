import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../Components/PrimaryButton";

const HomeScreen = ({ pickHandleNumber }) => {
  const [inputValue, setInputValue] = useState("");

  const numberInputHandler = (e) => {
    setInputValue(e);
  };

  const resetInputValue = () => {
    setInputValue("");
  };

  const confirmInputValue = (e) => {
    const chooseNumber = parseInt(inputValue);
    if (isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 99) {
      Alert.alert(
        "Invalid Number!",
        "Number has tobe number between 1 and 99",
        [{ text: "Okay", onPress: resetInputValue }]
      );
      return;
    }

    pickHandleNumber(chooseNumber);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={inputValue}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputValue}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputValue}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4e0329",
    marginTop: 100,
    padding: 16,
    borderRadius: 10,
    marginHorizontal: 24,
    elevation: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
  },

  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});

export default HomeScreen;
