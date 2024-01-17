import * as React from 'react';
import { Animated, ImageSourcePropType } from 'react-native';

export interface MayoLoaderProps {
  isVisible: boolean;
  imageSource: ImageSourcePropType;
  duration?: number;
}

declare const MayoLoader: React.FC<MayoLoaderProps>;

export default MayoLoader;
