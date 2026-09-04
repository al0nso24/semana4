import { useState } from "react";
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function QuickSurvey() {
    const [respuesta, setRespuesta] = useState("");

    const borrarRespuesta = () => {
        setRespuesta("");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>¿Te gusta React Native?</Text>

            {["Sí", "No"].map((opcion) => (
                <Pressable
                    key={opcion}
                    style={styles.option}
                    onPress={() => setRespuesta(opcion)}
                    accessibilityRole="radio"
                    accessibilityState={{ selected: respuesta === opcion }}
                >
                    <View
                        style={[
                            styles.radio,
                            respuesta === opcion && styles.radioSelected,
                        ]}
                    />

                    <Text style={styles.optionText}>{opcion}</Text>
                </Pressable>
            ))}

            <Text style={styles.resultado}>
                Respuesta: {respuesta || "Nada"}
            </Text>

            <TouchableOpacity onPress={borrarRespuesta} style={styles.btnBorrar}>
                <Text style={styles.textoBorrar}>Borrar respuesta</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 24,
    },

    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
    },
    
    option: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
    },

    radio: {
        width: 22,
        height: 22,
        borderRadius: 11,
        borderWidth: 2,
        borderColor: "#555",
        marginRight: 10,
    },

    radioSelected: {
        borderColor: "white",
        backgroundColor: "#2563eb",
    },

    optionText: {
        fontSize: 16,
    },

    resultado: {
        marginTop: 20,
        fontSize: 16,
    },

    btnBorrar: {
        marginTop: 14,
        backgroundColor: "red",
        padding: 10,
        borderRadius: 8,
    },

    textoBorrar: {
        textAlign: "center",
        color: "white"
    }
});