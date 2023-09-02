import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Button,
  Alert,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>dskjfhsdka</Text>
      <TouchableHighlight onPress={() => console.log("hfdskajf")}>
        <Image
          source={{
            width: 300,
            height: 300,
            uri: "https://picsum.photos/id/1/200/300",
          }}
        />
      </TouchableHighlight>
      <Button title="click me" color="orange" onPress={() => {
        Alert.alert("xinchao" ,"chaoxin" , [
          {text: "chaocc" , onPress: () => console.log('qqq')},
          {text: "chaocc" , onPress: () => console.log('sss')}
        ])
      }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
