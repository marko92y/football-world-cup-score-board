import * as THREE from "three";
import { FC, useRef, useState } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  Detailed,
  Environment,
  OrbitControls,
} from "@react-three/drei";
import { Mesh } from "three";
import { GoldCupModel } from "./GoldCup";

interface GoldCupType {
  z: number;
  index: number;
}

const GoldCup: FC<GoldCupType> = ({ z, index }) => {
  const ref = useRef<Mesh>(null!);
  const { viewport, camera } = useThree();
  const { width, height } = viewport.getCurrentViewport(
    camera,
    new THREE.Vector3(0, 0, z)
  );
  const [data] = useState({
    x: THREE.MathUtils.randFloatSpread(2),
    y: THREE.MathUtils.randFloatSpread(height),
  });

  useFrame((state, delta) => {
    ref.current.position.set(data.x * width, (data.y += delta), z);
    ref.current.rotation.set(0, (data.y += delta * 0.02), 0);
    if (data.y > height / 1.5) {
      data.y = -height / 1.5;
    }
  });

  return (
    <mesh ref={ref}>
      <GoldCupModel scale={0.0035} />
    </mesh>
  );
};

const GoldCupBackground = ({ count = 1000 }) => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100vw",
        height: "100vh",
        zIndex: "-20",
      }}
    >
      <Canvas>
        <color attach="background" args={["#000000"]} />
        <Environment preset="sunset" />
        {[...Array(count)].map((_, key) => (
          <GoldCup key={key} index={key} z={-key} />
        ))}
      </Canvas>
    </div>
  );
};

export default GoldCupBackground;
