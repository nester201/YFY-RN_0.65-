import { Animated, StyleProp, ViewStyle } from 'react-native';
import { ReactNode } from 'react';

export interface LightboxProps {
  activeProps?: any;
  renderHeader?: (onClose?: () => void) => ReactNode;
  renderContent?: () => ReactNode;
  underlayColor?: string;
  backgroundColor?: string;
  didOpen?: () => void;
  onOpen?: () => void;
  willClose?: () => void;
  onClose?: () => void;
  onLongPress?: () => void;
  springConfig?: Animated.SpringAnimationConfig;
  swipeToDismiss?: boolean;
  style?: StyleProp<ViewStyle>;
  useNativeDriver?: boolean;
  navigator?: any;
  children?: any;
}

export interface ILightboxOverlayProps {
  origin: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  springConfig?: Animated.SpringAnimationConfig;
  backgroundColor?: string;
  isOpen: boolean;
  renderHeader?: (onClose?: () => void) => ReactNode;
  onClose?: () => void;
  didOpen?: () => void;
  willClose?: () => void;
  swipeToDismiss: boolean;
  useNativeDriver: boolean;
  children?: any;
  navigator?: any;
}

export interface ILightboxOverlayState {
  isAnimating: boolean;
  isPanning: boolean;
  target: {
    x: number;
    y: number;
    opacity: number;
  };
  pan: Animated.AnimatedValue;
  openVal: Animated.AnimatedValue;
}
