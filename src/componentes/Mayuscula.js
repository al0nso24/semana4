import { useState } from "react";
import { Alert, Text } from "react-native";
import { TextInput, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { StyleSheet } from "react-native";

export default function Mayuscula() {
    const [texto, setTexto] = useState("")
    const [resultado, setResultado] = useState("")

    const convertirMayuscula = () => {
        if(!texto){
            Alert.alert("Escribe algo >:v")
            return;
        }else{
            const textoMayus = texto.toUpperCase()
            setResultado(textoMayus)
            setTexto("")  //Limpia el campo del input
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.indicacion}>Escribe un texto:</Text>
            <TextInput value={texto} onChangeText={setTexto} keyboardType="default" style={styles.input}></TextInput>
            <TouchableOpacity onPress={convertirMayuscula} style={styles.btn}>
                <Text style={{color: "white"}}>Convertir texto a mayusculas</Text>
            </TouchableOpacity>
            <Text style={styles.resultado}>{resultado}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    indicacion: {
        fontSize: 18,
        marginBottom: 10
    },

    input: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "gray",
        padding: 5,
        marginBottom: 10
    },

    btn: {
        backgroundColor: "purple",
        padding: 13,
        borderRadius: 9,
        marginTop: 7,
        marginBottom: 7,
    },

    resultado: {
        marginTop: 10,
        fontWeight: "bold",
        fontSize: 18
    }
})