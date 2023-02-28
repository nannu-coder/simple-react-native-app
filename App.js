import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  ImageBackground,
} from "react-native";
import HomeScreen from "./Screens/HomeScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./Screens/GameScreen";

export default function App() {
  const [pickedNumber, setPickedNumber] = useState();

  const pickNumberHandler = (userNumber) => {
    setPickedNumber(userNumber);
  };

  let screen = <HomeScreen pickHandleNumber={pickNumberHandler} />;

  if (pickedNumber) {
    screen = <GameScreen />;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient
        colors={["#4e0329", "rgba(221, 181, 47,0.8)"]}
        style={styles.background}
      >
        <ImageBackground>
          {screen}
          <ExpoStatusBar style="auto" />
        </ImageBackground>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    // marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    flexDirection: "column",
    // backgroundColor: "#ddb52f",
  },
  background: {
    flex: 1,
  },
});
