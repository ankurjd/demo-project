import React, { useRef, useState, useEffect } from 'react';
import { Button, View } from 'react-native';
import { Canvas } from '@benjeau/react-native-draw';
import styles from './styles';

const SketchCanvas = () => {
  const canvasRef = useRef(null);
  const [tool, setTool] = useState('brush');

  useEffect(() => {
    let featuresString = canvasRef.current?.getFeatures();
    console.log('features', featuresString);
  }, []);

  const handleUndo = () => {
    canvasRef.current?.undo();
  };

  const handleClear = () => {
    canvasRef.current?.clear();
  };
  return (
    <View>
      <Canvas
        ref={canvasRef}
        height={650}
        thickness={5}
        opacity={1}
        tool={tool}
      />
      <View style={styles.buttonContainer}>
        <Button title='Undo' onPress={handleUndo} />
        <Button title='Clear' onPress={handleClear} />
      </View>
    </View>
  );
};

export default SketchCanvas;
