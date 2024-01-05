"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const MayoLoader = ({ isVisible, imageSource, duration = 1000 }) => {
    const fadeAnim = (0, react_1.useRef)(new react_native_1.Animated.Value(0)).current; // Initial value for opacity: 0
    (0, react_1.useEffect)(() => {
        if (isVisible) {
            // Fade in
            react_native_1.Animated.timing(fadeAnim, {
                toValue: 1,
                duration,
                useNativeDriver: true,
            }).start();
        }
        else {
            // Fade out
            react_native_1.Animated.timing(fadeAnim, {
                toValue: 0,
                duration,
                useNativeDriver: true,
            }).start();
        }
    }, [isVisible, fadeAnim, duration]);
    return (react_1.default.createElement(react_native_1.View, { style: styles.centeredContainer },
        react_1.default.createElement(react_native_1.Animated.View, { style: Object.assign(Object.assign({}, styles.logo), { opacity: fadeAnim }) },
            react_1.default.createElement(react_native_1.Image, { source: imageSource, style: styles.logo }))));
};
const styles = react_native_1.StyleSheet.create({
    centeredContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    logo: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
});
exports.default = MayoLoader;
