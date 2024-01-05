import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, Image } from 'react-native';

interface MayoLoaderProps {
  isVisible: boolean;
  imageSource: any;
  duration?: number; // Optional prop
}

const MayoLoader: React.FC<MayoLoaderProps> = ({ isVisible, imageSource, duration = 1000 }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    if (isVisible) {
      // Fade in
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration,
        useNativeDriver: true,
      }).start();
    } else {
      // Fade out
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration,
        useNativeDriver: true,
      }).start();
    }
  }, [isVisible, fadeAnim, duration]);

  return (
    <View style={styles.centeredContainer}>
      <Animated.View style={{...styles.logo, opacity: fadeAnim}}>
        <Image source={imageSource} style={styles.logo} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default MayoLoader;
