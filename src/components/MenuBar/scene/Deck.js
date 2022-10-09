import { useGLTF } from "@react-three/drei"

export const Deck = () => {
    const { scene } = useGLTF('/deck(yellow).glb');

    return <primitive object={scene} />

}