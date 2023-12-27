import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Canvas } from '@react-three/fiber';
import Expereince from './components/Expereince';
import { Leva } from 'leva';

function App() {
    return (
        <div className="App">
            <Leva flat collapsed />
            <Canvas>
                <color attach={'background'} args={['#101b24']} />
                <fog attach="fog" args={['#101b24', 0, 20]} />
                <Expereince />
            </Canvas>
        </div>
    );
}

export default App;
