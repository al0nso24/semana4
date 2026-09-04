import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function Formulario() {
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmarPassword, setConfirmarPassword] = useState("")
    const [telefono, setTelefono] = useState("")
    const [error, setError] = useState('');

    const validateForm = () => {
        if (!nombre || !email || !password || !telefono) {
            setError('Todos los campos son obligatorios');
        } else if (!email.includes('@')) {
            setError('El correo debe tener un formato válido');
        } else if (password.length < 6) {
            setError('La contraseña debe tener al menos 6 caracteres');
        } else if (password !== confirmarPassword) {
            setError('Las contraseñas no coinciden');
        } else {
            setError('');
            alert('Registro exitoso ✅');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registro</Text>
            <TextInput style={styles.input} keyboardType='default' placeholder="Nombre"
                value={nombre}
                onChangeText={setNombre}
            />
            <TextInput style={styles.input} placeholder="Correo electrónico"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput style={styles.input} placeholder="Contraseña"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TextInput
                style={styles.input}
                placeholder="Confirmar contraseña"
                secureTextEntry
                value={confirmarPassword}
                onChangeText={setConfirmarPassword}
            />
            <TextInput style={styles.input} keyboardType='phone-pad' placeholder="Teléfono"
                value={telefono}
                onChangeText={setTelefono}
            />
            {error ? <Text style={styles.error}>{error}</Text> : null}
            <TouchableOpacity style={styles.button} onPress={validateForm}>
                <Text style={styles.buttonText}>Registrar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        justifyContent: 'center', 
        padding: 20 
    },

    title: {
        fontSize: 22, 
        fontWeight: 'bold', 
        marginBottom: 20, 
        textAlign: 'center'
    },

    input: {
        borderWidth: 1, 
        borderColor: '#ccc', 
        padding: 10,
        marginBottom: 10, 
        borderRadius: 5
    },

    button: { 
        backgroundColor: '#007bff', 
        padding: 15, 
        borderRadius: 5 
    },

    buttonText: { 
        color: '#fff', 
        textAlign: 'center', 
        fontWeight: 'bold' 
    },

    error: { 
        color: 'red', 
        marginBottom: 10 
    },
});