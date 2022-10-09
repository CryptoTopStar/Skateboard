import { useGLTF } from "@react-three/drei"

export const Deck1 = () => {
    const { scene } = useGLTF('/deck(red).glb');

    return <primitive object={scene} />

}