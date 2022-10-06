import { Stage } from "@react-three/drei";
import { Skateboard } from "./Stakeboard";

export const Scene = () => {
    return (
        <Stage adjustCamera intensity={1}>
            <mesh>
                <Skateboard />
            </mesh>
        </Stage>
    );
}