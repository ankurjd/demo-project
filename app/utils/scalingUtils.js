import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const responsiveHeight = (h) => height * (h / 100);

export const responsiveWidth = (w) => width * (w / 100);

export const DEVICE_HEIGHT = height;

export const DEVICE_WIDTH = width;
