import { Button, StyleSheet, Text, View } from "react-native";
import { useAppDispatch } from "../../store/hooks";
import { login } from "../../store/slices/userSlice";

export default function LoginScreen() {

    const dispatch = useAppDispatch(); 
    

    const fakeData= {
        id: 'string',
        name: 'string',
        telephone: 'string',
        email: 'string',
        notifications: true,
        roles: ['User'],
        createdAt: '22-06-01',
    }


    const loinUser = () => {
        dispatch(login(fakeData));
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the Login Screen!</Text>
            <Button title="Fake login" onPress={loinUser} />
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