import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'
import Game from "@/src/Game";
export default function Index() {
  return (
     <LinearGradient
      colors={['#000000', '#FFD700']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={style.container}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
       <Game/>
      </View>
    </LinearGradient>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
  
  },

});
