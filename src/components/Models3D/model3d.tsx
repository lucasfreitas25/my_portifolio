import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

function CamisaModel() {
  // Carrega o modelo 3D da camisa
  const { scene } = useGLTF("src\\assets\\3D models\\T Shirt.glb"); // Caminho do arquivo dentro de "public/"
  return <primitive object={scene} scale={2} />;
}

export default function Camisa3D() {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <Suspense fallback={null}>
        <CamisaModel /> {/* Renderiza a camisa 3D */}
      </Suspense>
      <OrbitControls /> {/* Permite girar e dar zoom no modelo */}
    </Canvas>
  );
}
