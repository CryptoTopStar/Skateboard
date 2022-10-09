import { useGLTF } from "@react-three/drei"

export const Truck = () => {
    const { scene } = useGLTF('/truck.glb');

    return <primitive object={scene} />

}