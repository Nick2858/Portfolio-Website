/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.1 FullDemoGenDeci.glb -t 
*/

import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    GEN0: THREE.Mesh;
    GEN1: THREE.Mesh;
    GEN2: THREE.Mesh;
    GEN3: THREE.Mesh;
    GEN4: THREE.Mesh;
    GEN5: THREE.Mesh;
    GEN6: THREE.Mesh;
    GEN7: THREE.Mesh;
    GEN8: THREE.Mesh;
    GEN9: THREE.Mesh;
    GEN10: THREE.Mesh;
    GEN11: THREE.Mesh;
    GEN12: THREE.Mesh;
    GEN13: THREE.Mesh;
    GEN14: THREE.Mesh;
    GEN15: THREE.Mesh;
    GEN16: THREE.Mesh;
    GEN17: THREE.Mesh;
  };
  materials: {
    ["Material.002"]: THREE.MeshStandardMaterial;
    ["Material.003"]: THREE.MeshStandardMaterial;
    ["Material.004"]: THREE.MeshStandardMaterial;
    ["Material.005"]: THREE.MeshStandardMaterial;
    ["Material.006"]: THREE.MeshStandardMaterial;
    ["Material.007"]: THREE.MeshStandardMaterial;
    ["Material.008"]: THREE.MeshStandardMaterial;
    ["Material.009"]: THREE.MeshStandardMaterial;
    ["Material.010"]: THREE.MeshStandardMaterial;
    ["Material.011"]: THREE.MeshStandardMaterial;
    ["Material.012"]: THREE.MeshStandardMaterial;
    ["Material.013"]: THREE.MeshStandardMaterial;
    ["Material.014"]: THREE.MeshStandardMaterial;
    ["Material.015"]: THREE.MeshStandardMaterial;
    ["Material.016"]: THREE.MeshStandardMaterial;
    ["Material.017"]: THREE.MeshStandardMaterial;
    ["Material.018"]: THREE.MeshStandardMaterial;
    ["Material.019"]: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/FullDemoGenDeci.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.GEN0.geometry}
        material={materials["Material.002"]}
        position={[-150.746, -192.857, 106.545]}
      />
      <mesh
        geometry={nodes.GEN1.geometry}
        material={materials["Material.003"]}
        position={[-150.746, -192.857, 106.545]}
      />
      <mesh
        geometry={nodes.GEN2.geometry}
        material={materials["Material.004"]}
        position={[-150.746, -192.857, 106.545]}
      />
      <mesh
        geometry={nodes.GEN3.geometry}
        material={materials["Material.005"]}
        position={[-150.746, -192.857, 106.545]}
      />
      <mesh
        geometry={nodes.GEN4.geometry}
        material={materials["Material.006"]}
        position={[-150.746, -192.857, 106.545]}
      />
      <mesh
        geometry={nodes.GEN5.geometry}
        material={materials["Material.007"]}
        position={[-150.746, -192.857, 106.545]}
      />
      <mesh
        geometry={nodes.GEN6.geometry}
        material={materials["Material.008"]}
        position={[-150.746, -192.857, 106.545]}
      />
      <mesh
        geometry={nodes.GEN7.geometry}
        material={materials["Material.009"]}
        position={[-150.746, -192.857, 106.545]}
      />
      <mesh
        geometry={nodes.GEN8.geometry}
        material={materials["Material.010"]}
        position={[-150.746, -192.857, 106.545]}
      />
      <mesh
        geometry={nodes.GEN9.geometry}
        material={materials["Material.011"]}
        position={[-150.746, -192.857, 106.545]}
      />
      <mesh
        geometry={nodes.GEN10.geometry}
        material={materials["Material.012"]}
        position={[-150.746, -192.857, 106.545]}
      />
      <mesh
        geometry={nodes.GEN11.geometry}
        material={materials["Material.013"]}
        position={[-150.746, -192.857, 106.545]}
      />
      <mesh
        geometry={nodes.GEN12.geometry}
        material={materials["Material.014"]}
        position={[-150.746, -192.857, 106.545]}
      />
      <mesh
        geometry={nodes.GEN13.geometry}
        material={materials["Material.015"]}
        position={[-150.746, -192.857, 106.545]}
      />
      <mesh
        geometry={nodes.GEN14.geometry}
        material={materials["Material.016"]}
        position={[-150.746, -192.857, 106.545]}
      />
      <mesh
        geometry={nodes.GEN15.geometry}
        material={materials["Material.017"]}
        position={[-150.746, -192.857, 106.545]}
      />
      <mesh
        geometry={nodes.GEN16.geometry}
        material={materials["Material.018"]}
        position={[-150.746, -192.857, 106.545]}
      />
      <mesh
        geometry={nodes.GEN17.geometry}
        material={materials["Material.019"]}
        position={[-150.746, -192.857, 106.545]}
      />
    </group>
  );
}

useGLTF.preload("/FullDemoGenDeci.glb");