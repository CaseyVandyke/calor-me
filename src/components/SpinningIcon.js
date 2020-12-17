import React, { useState, useRef } from 'react';

import { useFrame } from "react-three-fiber";
import { softShadows, MeshWobbleMaterial, OrbitControls } from 'drei';
import { useSpring, a } from 'react-spring/three';

softShadows();

const SpinningIcon = ({position, args, color, speed}) => {
    const [expand, setExpand] = useState(false);

    const props = useSpring({
        scale: expand ? [1.4, 1.4, 1.4] : [1,1,1]
    })
    const mesh = useRef(null);
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
    return (
        <a.mesh 
        onClick={() => setExpand(!expand)}
        scale={props.scale}
        castShadow 
        position={position} ref={mesh}>
            <boxBufferGeometry 
            attach='geometry' 
            args={args}/>
            <MeshWobbleMaterial 
            attach='material' 
            color={color}
            speed={speed}
            factor={1} 
            />
            <OrbitControls />
        </a.mesh>
    )
}

export default SpinningIcon;