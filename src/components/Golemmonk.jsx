import React, { useMemo, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { SkeletonUtils } from  "three-stdlib";
import { useGraph } from '@react-three/fiber';

export default function Golemmonk(props) {
  const { scene, materials } = useGLTF('./characters/rockVilllan.glb')
  const  clone = useMemo(() =>  SkeletonUtils.clone(scene), [scene]);
	const { nodes } = useGraph(clone);

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.EyesCont.geometry} material={materials.ThirdMaterial} />
      <mesh geometry={nodes.Head.geometry} material={materials.PrimaryMaterial} />
      <mesh geometry={nodes.Arms.geometry} material={materials.PrimaryMaterial} />
      <mesh geometry={nodes.Body.geometry} material={materials.PrimaryMaterial} />
      <mesh geometry={nodes.BodyDetails.geometry} material={materials.SecondMaterial} />
      <mesh geometry={nodes.Ring.geometry} material={materials.ThirdMaterial} />
      <mesh geometry={nodes.Eyes.geometry} material={materials.QuarterMaterial} />
    </group>
  )
}

useGLTF.preload('./characters/rockVilllan.glb')
