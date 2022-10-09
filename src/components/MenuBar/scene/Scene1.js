import { Stage } from "@react-three/drei";
import { Board } from "./Board";
import { Wheel } from "./Wheel";
import { Truck } from "./Truck";

export const Scene1 = ({currentColor}) => {
    return (
        <Stage adjustCamera intensity={1}>
            <mesh>
                <Board currentColor={currentColor} />
            </mesh>
            <mesh>
                <Wheel />
            </mesh>
            <mesh>
                <Truck />
            </mesh>
        </Stage>
    );
}