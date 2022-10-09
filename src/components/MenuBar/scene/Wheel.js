import { useGLTF } from "@react-three/drei"

export const Wheel = () => {
    const { scene } = useGLTF('/wheel.glb');

    return <primitive object={scene} />

}