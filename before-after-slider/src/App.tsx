import React, { useState } from 'react';
import './App.scss';
import {Orientation} from './enums';
import Divider from './components/divider';

interface SliderProps {
  before: string;
  after: string;
  width: number;
  height: number;
  orientation: Orientation;
}

function App({before, after, height, width, orientation}: SliderProps) {
  const [beforeWidth, setWidth] = useState<string>(`${width/2.0}px`);
  return <div className="slider" style={{width, height}}>
      <div className="slider__img-wrapper "><div className="slider__after-image" style={{width, height, backgroundImage: `url('${after}')`}} /></div>
      <div className="slider__divider"><Divider orientation={orientation} setWidth={setWidth} panelWidth={width}/></div>
      <div className="slider__img-wrapper"><div className="slider__before-image" style={{width: beforeWidth, height, backgroundImage: `url('${before}')`}} /></div>
    </div>;
}

export default App;   
