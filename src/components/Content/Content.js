import './content.css'
import { Canvas } from "@react-three/fiber";
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Scene } from './scene/Scene';

export default function Content() {
    return (
        <div className="content1">
            <div className="main_content" style={{ width: "100%", height: "100%" }}>
                <Canvas dpr={[1, 2]} camera={{ fov: 50 }} flat linear>
                    <color attach="background" args={['#253B56']} />
                    <Suspense fallback={null}>
                        <Scene />
                    </Suspense>
                    <OrbitControls autoRotate enableZoom={true} enablePan={true} />
                </Canvas>
            </div>
        </div>
    )
}