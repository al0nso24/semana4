import { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { StyleSheet } from "react-native";

export default function TrafficLight() {
    const [color, setColor] = useState("red");  //El semáforo empieza en rojo

    //Para los colores:
    const getMessage = () => {
        switch(color){
            case "red":
                return "¡Detente!";
            case "green": 
                return "¡Avanza!";
            default:
                return "¡Precaución!"
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Semáforo</Text>
            <View style={[styles.circle, {backgroundColor: color}]}></View>
            <Text style={styles.message}>{getMessage()}</Text>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.btnRed} onPress={() => setColor("red")}>
                    <Text style={styles.text}>Rojo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnYellow} onPress={() => setColor("yellow")}>
                    <Text style={styles.text}>Amarillo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnGreen} onPress={() => setColor("green")}>
                    <Text style={styles.text}>Verde</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: "bold"
    },

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    circle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20
    },

    message: {
        fontSize: 18,
        marginBottom: 20
    },

    buttons: {
        flexDirection: "row",
        gap: 10
    },

    btnRed: {
        backgroundColor: "red",
        padding: 10
    },

    btnYellow: {
        backgroundColor: "yellow",
        padding: 10
    },

    btnGreen: {
        backgroundColor: "green",
        padding: 10
    },

    text: {
        color: "#fff"
    }
})