import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import * as THREE from "three";

export function TrustedPartners22() {
  const earthRef = useRef<THREE.Mesh>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);

  // Using higher quality Earth textures
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(TextureLoader, [
    "https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg", // Blue/green day map
    "https://threejs.org/examples/textures/planets/earth_normal_2048.jpg", // Normal map
    "https://threejs.org/examples/textures/planets/earth_specular_2048.jpg", // Specular map
    "https://threejs.org/examples/textures/planets/earth_clouds_1024.png" // Clouds
  ]);

  // Improve texture quality
  [colorMap, normalMap, specularMap, cloudsMap].forEach(map => {
    map.anisotropy = 16;
    map.colorSpace = THREE.SRGBColorSpace;
  });
  
  cloudsMap.wrapS = cloudsMap.wrapT = THREE.RepeatWrapping;

  useFrame((_, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.15; // Slightly faster rotation
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += delta * 0.22; // Clouds move faster than surface
    }
  });

  return (
    <group scale={3}>
      {/* Main Earth sphere with enhanced materials */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[1, 128, 128]} />
        <meshPhongMaterial
          map={colorMap}
          normalMap={normalMap}
          normalScale={new THREE.Vector2(0.85, 0.85)}
          specularMap={specularMap}
          specular={new THREE.Color(0x111111)}
          shininess={5}
          bumpMap={normalMap}
          bumpScale={0.05}
        />
      </mesh>

      {/* Animated cloud layer */}
      <mesh ref={cloudsRef} scale={1.02}>
        <sphereGeometry args={[1, 128, 128]} />
        <meshPhongMaterial
          map={cloudsMap}
          transparent
          opacity={0.4}
          depthWrite={false}
          alphaMap={cloudsMap}
          specular={new THREE.Color(0x111111)}
          shininess={2}
        />
      </mesh>

      {/* Optional city lights on night side */}
      <mesh>
        <sphereGeometry args={[1.001, 64, 64]} />
        <meshBasicMaterial
          map={useLoader(TextureLoader, "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_lights_2048.png")}
          blending={THREE.AdditiveBlending}
          transparent
          opacity={0.8}
        />
      </mesh>
    </group>
  );
}
