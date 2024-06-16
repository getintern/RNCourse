import { StyleSheet, Text, View } from "react-native";

function GameScreen() {
  return (
    <View style={style.screen}>
      <Text>Opponent's Guess!</Text>
      <View>
        <Text>Higher Or Lower</Text>
        {/* <Text>+ -</Text> */}
      </View>
      <View>
        <Text>LOG Rounds</Text>
      </View>
    </View>
  );
}

export default GameScreen;

const style = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 40,
  },
});
