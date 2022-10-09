import { useGLTF } from "@react-three/drei"
import { useLayoutEffect } from "react";

export const Board = ({currentColor}) => {
    
    const txt = "Skateboard.004"
    const { scene , materials} = useGLTF('/board.glb');

    useLayoutEffect(() => {
        Object.assign(materials[txt], { 
          color: currentColor})
      }, [scene, materials, currentColor]);
    

    return <primitive object={scene} />

}