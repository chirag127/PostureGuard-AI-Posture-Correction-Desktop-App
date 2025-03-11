import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import * as Haptics from "expo-haptics";
import { useState, useRef, useEffect } from "react";

export default function App() {
    const [hasPermission, setHasPermission] = useState(null);
    const [isTracking, setIsTracking] = useState(false);
    const cameraRef = useRef(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === "granted");
        })();
    }, []);

    const toggleTracking = () => {
        setIsTracking(!isTracking);
    };

    const checkPosture = async () => {
        if (isTracking && cameraRef.current) {
            // TODO: Implement ML vision analysis here
            // For now, just simulate bad posture detection
            const isBadPosture = Math.random() > 0.7;

            if (isBadPosture) {
                Haptics.notificationAsync(
                    Haptics.NotificationFeedbackType.Warning
                );
            }
        }
    };

    useEffect(() => {
        const interval = setInterval(checkPosture, 2000);
        return () => clearInterval(interval);
    }, [isTracking]);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <Camera
                style={styles.camera}
                ref={cameraRef}
                type={Camera.Constants.Type.front}
            >
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={toggleTracking}
                    >
                        <Text style={styles.text}>
                            {isTracking ? "Stop Tracking" : "Start Tracking"}
                        </Text>
                    </TouchableOpacity>
                </View>
            </Camera>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: "transparent",
        flexDirection: "row",
        justifyContent: "center",
        margin: 20,
    },
    button: {
        alignSelf: "flex-end",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
        padding: 15,
        borderRadius: 8,
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        color: "white",
    },
});
