import { useGLTF } from "@react-three/drei"

export const Skateboard = () => {
    const { scene } = useGLTF('/skateboard.glb');

    return <primitive object={scene} />

}