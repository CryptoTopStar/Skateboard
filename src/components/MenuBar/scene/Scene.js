import { Stage } from "@react-three/drei";
import { Deck } from "./Deck";

export const Scene = () => {
    return (
        <Stage adjustCamera intensity={1}>
            <mesh>
                <Deck />
            </mesh>
        </Stage>
    );
}