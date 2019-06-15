import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Animated
} from "react-native";
import { useBounce } from "./useBounce";
import { useDnD } from "./useDnD";
export default function App() {
    const [width, height, bounceAnimation] = useBounce(200, 50);
    const [panResponder, pos, dragging, deleting, deleted] = useDnD(
        [300, 82],
        700
    );
    AnimatedTouchableOpacity = Animated.createAnimatedComponent(
        TouchableOpacity
    );

    return (
        <View style={styles.container}>
            <AnimatedTouchableOpacity
                onPress={() => {
                    bounceAnimation().start();
                }}
                style={[styles.button, { width, height }]}
            >
                <Text style={{ color: "white" }}>Click Me</Text>
            </AnimatedTouchableOpacity>
            <View
                {...panResponder.panHandlers}
                style={[
                    styles.button,
                    styles.draggable,
                    {
                        width: 200,
                        height: 50,
                        top: pos[0],
                        left: pos[1],
                        opacity: deleted ? 0 : 100,
                        backgroundColor: dragging
                            ? deleting
                                ? "red"
                                : "skyblue"
                            : "steelblue"
                    }
                ]}
            >
                <Text style={{ color: "white" }}>Drag Me</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    button: {
        backgroundColor: "steelblue",
        justifyContent: "center",
        alignItems: "center",
        margin: 5
    },
    draggable: {
        position: "absolute"
    }
});
