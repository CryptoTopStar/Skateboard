import { Stage } from "@react-three/drei";
import { Deck1 } from "./Deck1";

export const Scene0 = () => {
    return (
        <Stage adjustCamera intensity={1}>
            <mesh>
                <Deck1 />
            </mesh>
        </Stage>
    );
}