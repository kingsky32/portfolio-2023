/* eslint-disable react/no-unknown-property */

import React from 'react';
import { Box, Cylinder } from '@react-three/drei';
import { MeshProps } from '@react-three/fiber';
import * as THREE from 'three';

export interface CloudProps extends MeshProps {
  width: number;
  height: number;
  depth: number;
}

export type CloudRef = THREE.Mesh;

const Cloud = React.forwardRef<CloudRef, CloudProps>(function Cloud(
  { width, height, depth, ...props },
  ref,
) {
  return (
    <mesh ref={ref} {...props}>
      <Cylinder
        args={[width, height, depth]}
        position={[0, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial color="white" envMapIntensity={0.25} />
      </Cylinder>
      <Cylinder
        args={[width, height, depth]}
        position={[width, width, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial color="white" envMapIntensity={0.25} />
      </Cylinder>
      <Cylinder
        args={[width, height, depth]}
        position={[width * 2, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial color="white" envMapIntensity={0.25} />
      </Cylinder>
      <Box
        args={[width * 2, height, depth]}
        position={[width, 0 - height / 2, 0]}
      >
        <meshStandardMaterial color="white" envMapIntensity={0.25} />
      </Box>
    </mesh>
  );
});

export default Cloud;
