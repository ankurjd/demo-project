import React, { useRef, useState } from 'react';
import { Button, View } from 'react-native';
import MathJax from 'react-native-mathjax';
import styles from './styles';

const MathEquations = () => {
  return (
    <View style={styles.container}>
      <MathJax
        html={'Solve the equation $\\frac{x-2}{x+3}=\\frac{x-3}{2}$'}
        style={styles.htmlStyle}
      />
      <MathJax html={'A. $x=1\\pm\\sqrt{6}$'} style={styles.htmlStyle} />
      <MathJax html={'B. $x=1\\pm2\\sqrt{3}$'} style={styles.htmlStyle} />
      <MathJax html={'C. $x=1\\pm2i$'} style={styles.htmlStyle} />
      <MathJax html={'D. $x=-1\\pm\\sqrt{6}$'} style={styles.htmlStyle} />
      <MathJax
        html={
          'Solution<br><br>$\\frac{x-2}{x+3}=\\frac{x-3}{2}$$<br>$2(x-2)=(x-3)(x+3)$<br>$$2x-4=x^2-9$<br>$x^2-2x-5=0$<br><br>$x=\\frac{-(-2)\\pm\\sqrt{(-2)^2-4(1)(-5)}}{2(1)}$<br>$x=\\frac{2\\pm\\sqrt{24}}{2}$<br>$x=1\\pm\\sqrt{6}$'
        }
        style={styles.htmlStyle}
      />
    </View>
  );
};

export default MathEquations;
