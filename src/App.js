import React from 'react';
import  Navbar  from './components/Navbar';
//import SpinningIcon from './components/SpinningIcon';
import './App.scss';

import { Canvas } from "react-three-fiber";

function App() {
  return (
      <>
        <Navbar />
        {/*<Canvas shadowMap colorManagement camera={{ position: [-5, 2, 10]}}>
            <ambientLight intensity={0.3} />
            <directionalLight castShadow
            position={[0, 10, 0]} intensity={1.5} shadow-mapSize-width={1024} shadow-mapSize-height={1024}
            />
            <pointLight position={[-10, 0, -20]} intensity={0.5}/>
            <pointLight position={[0, -10, 0]} intensity={1.5}/>
            <group>
              <mesh 
              receiveShadow rotation={[-Math.PI / 2, 0 , 0]} position={[0, -3, 0]}>
                <planeBufferGeometry attach='geometry' args={[100, 100]} />
                <shadowMaterial attach='material' opacity={0.3} />
              </mesh>
            </group>
            <SpinningIcon position={[0, 1, 0]} args={[10, 6, 3]} color="#ff0000" speed={1} />
            <SpinningIcon position={[-4, 2, -10]} args={[10, 6, 3]} color="pink" speed={2} />
            <SpinningIcon position={[14, 3, -4]} args={[10, 6, 3]} color="pink" speed={2} />
        </Canvas>
        */}
      </>
  );
}

export default App;
