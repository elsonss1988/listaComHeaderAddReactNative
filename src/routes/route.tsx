import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import Home from "../components/home";
import { styles } from "../../globalStyle";

const { Navigator, Screen } = createNativeStackNavigator();

export default () => {
  return (
    <View style={styles.routeContainer}>
      <NavigationContainer>
        <Navigator>
          <Screen name="home" component={Home} />
        </Navigator>
      </NavigationContainer>
    </View>
  );
};
