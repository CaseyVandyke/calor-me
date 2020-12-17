import React from 'react';
import  Navbar  from './components/Navbar';
import SpinningIcon from './components/SpinningIcon';
import './App.scss';

import { Canvas } from "react-three-fiber";

function App() {
  return (
      <>
        <Navbar />
        <Canvas colorManagement camera={{ position: [-5, 2, 10]}}>
            <ambientLight intensity={0.3} />
            <pointLight position={[-10, 0, -20]} intensity={0.5}/>
            <pointLight position={[0, -10, 0]} intensity={1.5}/>
            <SpinningIcon position={[0, 1, 0]} args={[3, 2, 1]} color="#ff0000"/>
            <SpinningIcon position={[-2, 1, -5]} color="#000" />
            <SpinningIcon position={[5, 1, -2]} color="#000" />
        </Canvas>
      </>
  );
}

export default App;
