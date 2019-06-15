import { useState } from "react";
import { Animated } from "react-native";

export const useBounce = (width, height) => {
    const [animatedWidth] = useState(new Animated.Value(width));
    const [animatedHeight] = useState(new Animated.Value(height));

    const bounceAnimation = () =>
        Animated.sequence([
            Animated.parallel([
                Animated.timing(animatedWidth, {
                    toValue: width * 1.5,
                    duration: 50
                }),
                Animated.timing(animatedHeight, {
                    toValue: height * 1.2,
                    duration: 50
                })
            ]),

            Animated.parallel([
                Animated.spring(animatedWidth, {
                    toValue: width,
                    friction: 0.5
                }),
                Animated.spring(animatedHeight, {
                    toValue: height,
                    friction: 2
                })
            ])
        ]);

    return [animatedWidth, animatedHeight, bounceAnimation];
};
