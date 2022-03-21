import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

export default function Splash() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topVew}>
        <Image
          style={styles.image}
          source={require("../assets/images/main.jpg")}
        />
      </View>
      <View style={styles.bottomVew}>
        <Text style={styles.heading}> App heading Goes Here </Text>
        <Text style={styles.paragraph}>
          A simple paragraph is comprised of three major components. The first
          sentence, which is often a declarative sentence, is called the “topic
          sentence.” It introduces the topic of the paragraph, setting its tone
          and mood.
        </Text>
        <TouchableOpacity style={styles.buttonOutline}>
          <Text style={styles.buttonTextOutline}>create account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
  },
  image: {
    height: "80%",
    width: "80%",
  },
  topVew: {
    height: "40%",
    width: "95%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomVew: {
    height: "58%",
    width: "95%",
    alignSelf: "center",
    backgroundColor: "#FFBC97",
    // marginTop : 9,
    borderRadius: 40,
    borderColor: "#DDDDDD",
    borderWidth: 1,
  },
  heading: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 28,
    fontWeight: "bold",
  },
  paragraph: {
    textAlign: "center",
    padding: 20,
    fontSize: 20,
    color : "#444444"
  },
  button: {

    height: 60,
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#EA5C2B",
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontWeight : "bold",
    fontSize : 20
  },
  buttonOutline: {
    height: 60,
    width: "90%",
    alignSelf: "center",
    backgroundColor: "white",
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#EA5C2B",
  },
  buttonTextOutline: {
    color: "#EA5C2B",
    fontWeight : "bold",
    fontSize : 20,
  },
});
