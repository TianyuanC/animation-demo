import { useEffect, useState } from "react";
import { PanResponder } from "react-native";

export const useDnD = (initPos, limit) => {
    const [panResponder, setPanResponder] = useState({});
    const [dragging, setDragging] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const [deleted, setDeleted] = useState(false);
    const [pos, setPos] = useState(initPos);
    useEffect(() => {
        setPanResponder(
            PanResponder.create({
                onStartShouldSetPanResponder: () => true,
                onMoveShouldSetPanResponder: () => true,
                onPanResponderGrant: () => {
                    setDragging(true);
                },
                onPanResponderMove: (e, gestureState) => {
                    newTop = pos[0] + gestureState.dy;
                    setPos([newTop, pos[1] + gestureState.dx]);
                    if (newTop > limit) {
                        setDeleting(true);
                    } else if (deleting) {
                        setDeleting(false);
                    }
                },
                onPanResponderRelease: () => {
                    setDragging(false);
                    if (deleting) {
                        setDeleted(true);
                        alert("deleted");
                    }
                },
                onPanResponderTerminate: () => {
                    console.log("terminate");
                }
            })
        );
    });

    return [panResponder, pos, dragging, deleting, deleted];
};
