/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.1 FullDemoGenDeci.glb -t 
*/

import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

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
    ["Material.037"]: THREE.MeshStandardMaterial;
    ["Material.038"]: THREE.MeshStandardMaterial;
    ["Material.039"]: THREE.MeshStandardMaterial;
    ["Material.040"]: THREE.MeshStandardMaterial;
    ["Material.041"]: THREE.MeshStandardMaterial;
    ["Material.042"]: THREE.MeshStandardMaterial;
    ["Material.043"]: THREE.MeshStandardMaterial;
    ["Material.044"]: THREE.MeshStandardMaterial;
    ["Material.045"]: THREE.MeshStandardMaterial;
    ["Material.046"]: THREE.MeshStandardMaterial;
    ["Material.047"]: THREE.MeshStandardMaterial;
    ["Material.048"]: THREE.MeshStandardMaterial;
    ["Material.049"]: THREE.MeshStandardMaterial;
    ["Material.050"]: THREE.MeshStandardMaterial;
    ["Material.051"]: THREE.MeshStandardMaterial;
    ["Material.052"]: THREE.MeshStandardMaterial;
    ["Material.053"]: THREE.MeshStandardMaterial;
    ["Material.054"]: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("./FullDemoGenDeci.glb") as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.GEN0.geometry}
        material={materials["Material.037"]}
        position={[149.173, -154.388, -114.406]}
        rotation={[Math.PI, -0.016, Math.PI]}
      />
      <mesh
        geometry={nodes.GEN1.geometry}
        material={materials["Material.038"]}
        position={[149.173, -154.388, -114.406]}
        rotation={[Math.PI, -0.016, Math.PI]}
      />
      <mesh
        geometry={nodes.GEN2.geometry}
        material={materials["Material.039"]}
        position={[149.173, -154.388, -114.406]}
        rotation={[Math.PI, -0.016, Math.PI]}
      />
      <mesh
        geometry={nodes.GEN3.geometry}
        material={materials["Material.040"]}
        position={[149.173, -154.388, -114.406]}
        rotation={[Math.PI, -0.016, Math.PI]}
      />
      <mesh
        geometry={nodes.GEN4.geometry}
        material={materials["Material.041"]}
        position={[149.173, -154.388, -114.406]}
        rotation={[Math.PI, -0.016, Math.PI]}
      />
      <mesh
        geometry={nodes.GEN5.geometry}
        material={materials["Material.042"]}
        position={[149.173, -154.388, -114.406]}
        rotation={[Math.PI, -0.016, Math.PI]}
      />
      <mesh
        geometry={nodes.GEN6.geometry}
        material={materials["Material.043"]}
        position={[149.173, -154.388, -114.406]}
        rotation={[Math.PI, -0.016, Math.PI]}
      />
      <mesh
        geometry={nodes.GEN7.geometry}
        material={materials["Material.044"]}
        position={[149.173, -154.388, -114.406]}
        rotation={[Math.PI, -0.016, Math.PI]}
      />
      <mesh
        geometry={nodes.GEN8.geometry}
        material={materials["Material.045"]}
        position={[149.173, -154.388, -114.406]}
        rotation={[Math.PI, -0.016, Math.PI]}
      />
      <mesh
        geometry={nodes.GEN9.geometry}
        material={materials["Material.046"]}
        position={[149.173, -154.388, -114.406]}
        rotation={[Math.PI, -0.016, Math.PI]}
      />
      <mesh
        geometry={nodes.GEN10.geometry}
        material={materials["Material.047"]}
        position={[149.173, -154.388, -114.406]}
        rotation={[Math.PI, -0.016, Math.PI]}
      />
      <mesh
        geometry={nodes.GEN11.geometry}
        material={materials["Material.048"]}
        position={[149.173, -154.388, -114.406]}
        rotation={[Math.PI, -0.016, Math.PI]}
      />
      <mesh
        geometry={nodes.GEN12.geometry}
        material={materials["Material.049"]}
        position={[149.173, -154.388, -114.406]}
        rotation={[Math.PI, -0.016, Math.PI]}
      />
      <mesh
        geometry={nodes.GEN13.geometry}
        material={materials["Material.050"]}
        position={[149.173, -154.388, -114.406]}
        rotation={[Math.PI, -0.016, Math.PI]}
      />
      <mesh
        geometry={nodes.GEN14.geometry}
        material={materials["Material.051"]}
        position={[149.173, -154.388, -114.406]}
        rotation={[Math.PI, -0.016, Math.PI]}
      />
      <mesh
        geometry={nodes.GEN15.geometry}
        material={materials["Material.052"]}
        position={[149.173, -154.388, -114.406]}
        rotation={[Math.PI, -0.016, Math.PI]}
      />
      <mesh
        geometry={nodes.GEN16.geometry}
        material={materials["Material.053"]}
        position={[149.173, -154.388, -114.406]}
        rotation={[Math.PI, -0.016, Math.PI]}
      />
      <mesh
        geometry={nodes.GEN17.geometry}
        material={materials["Material.054"]}
        position={[149.173, -154.388, -114.406]}
        rotation={[Math.PI, -0.016, Math.PI]}
      />
    </group>
  );
}

useGLTF.preload("./FullDemoGenDeci.glb");