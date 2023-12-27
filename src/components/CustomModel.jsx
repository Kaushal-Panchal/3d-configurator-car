import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useControls } from 'leva';

export function CustomModel({ modelPath = '', ...props }) {
    console.log('model path', modelPath);
    const { nodes, materials, scene } = useGLTF(modelPath || '');
    const material1 = materials['Material.001'];
    console.log('Materials', materials);
    console.log('Material 1', material1);
    let customMaterial = {};
    Object.keys(material1).map((key) => {
        if (typeof material1[key] === 'number' || typeof material1[key] === 'boolean') {
            customMaterial[key] = material1[key];
        }
    });
    console.log('Custom material', customMaterial);
    const levaControls = useControls('Material 1', customMaterial);

    materials['Material.001'] = { ...materials['Material.001'], ...levaControls };
    console.log('Scene ', scene);

    return (
        <group {...props} dispose={null}>
            <primitive object={scene} />
        </group>
    );
}
