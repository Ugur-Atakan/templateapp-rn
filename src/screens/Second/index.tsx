import { StyleSheet, Text, View } from "react-native";

export default function SecondScreen() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the SecondScreen Screen!</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});