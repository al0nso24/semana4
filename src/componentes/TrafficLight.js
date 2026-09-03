import { useState } from "react";
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
}

const styles = StyleSheet.create({
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
    }
})