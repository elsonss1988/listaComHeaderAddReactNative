import { SafeAreaView } from "react-native-safe-area-context";
import {
  FlatList,
  TextInput,
  Text,
  ScrollView,
  Button,
  View,
} from "react-native";
import { styles } from "../../globalStyle";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

let listItems: string[] = [];

export default function Home() {
  const navigation = useNavigation();
  const [item, setItems] = useState("");
  const [list, setList] = useState<string[]>([]);

  function handleList() {
    listItems.push(item);
    setList((prev) => [...prev, item]);
    console.log(listItems);
    console.log(list);
    setItems("");
  }
  {
    navigation.setOptions({
      title: "Hello",
      headerLeft: () => <Text>Exercicio</Text>,
      headerRight: () => <Button title="Adicionar" onPress={handleList} />,
    });
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}> Faca um Bolo</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Digite seu ingrediente"
        placeholderTextColor={"#999"}
        value={item}
        onChangeText={(t) => {
          setItems(t);
        }}
        onSubmitEditing={handleList}
      />

      <FlatList
        data={list}
        keyExtractor={(data) => data}
        renderItem={(data) => (
          <View>
            <Text style={styles.listText}>{data.item}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
