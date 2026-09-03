import { useState } from "react";
import { Text } from "react-native";
import { Alert, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

export default function DoubleNumber() {
    const [number, setNumber] = useState("");  //TextInput siempre maneja cadenas
    const [resultado, setResultado] = useState(0);

    const calcularDouble = () => {
        if (!number){
            Alert.alert("Error, por favor ingresa un número.")
            return; //Para detener la ejecución
        }else{
            const double = parseFloat(number) * 2;
            setResultado(double);
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Calculadora de Doble</Text>
            <TextInput style={styles.input} keyboardType="numeric"
            value={number} onChangeText={setNumber}></TextInput>
            <TouchableOpacity style={styles.button} onPress={calcularDouble}>
                <Text style={styles.buttonText}>Calcular</Text>
            </TouchableOpacity>
            {resultado !== 0 && (
                <Text style={styles.result}>Resultado: {resultado}</Text>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20
    },

    title: {
        fontSize: 22,
        textAlign: "center",
        marginBottom: 20
    },

    input: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        borderRadius: 5
    },

    button: {
        backgroundColor: "#007bff",
        padding: 15,
        borderRadius: 5
    },

    buttonText: {
        color: "#fff",
        textAlign: "center"
    },

    result: {
        marginTop: 20,
        fontSize: 18,
        textAlign: "center"
    }
})