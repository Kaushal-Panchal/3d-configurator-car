import { Environment, MeshReflectorMaterial, PresentationControls, Stage } from '@react-three/drei';
import React, { Suspense } from 'react';
import { Car } from './Car';
import { CustomModel } from './CustomModel';

function Expereince() {
    return (
        <PresentationControls
            speed={1.5}
            global
            zoom={0.7}
            polar={[-0.1, Math.PI / 4]}
            rotation={[Math.PI / 8, Math.PI / 4, 0]}
        >
            <Stage shadows={false} environment={null} intensity={0.7} castShadow={false}>
                <Environment path="/" files="potsdamer_platz_1k.hdr" />

                <Suspense fallback={null}>
                    {/* <CustomModel modelPath="./models/car.glb" /> */}
                    <Car position={[0, 1.3, 0]} />
                </Suspense>
            </Stage>
            <mesh position={[0, -1.3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[170, 170]} />
                <MeshReflectorMaterial
                    color={'#101010'}
                    blur={[300, 100]}
                    resolution={2048}
                    mixBlur={1}
                    mixStrength={40}
                    roughness={1}
                    depthScale={1.4}
                    minDepthThreshold={0.4}
                    maxDepthThreshold={1.4}
                    metalness={0.5}
                />
            </mesh>
        </PresentationControls>
    );
}

export default Expereince;
