/* eslint-disable react/no-unknown-property */

import React from 'react';
import { Box, Cylinder } from '@react-three/drei';

export interface CloudProps {
  width: number;
  height: number;
  depth: number;
  position?: [x: number, y: number, z: number];
}

export default function Cloud({
  width,
  height,
  depth,
  position = [0, 0, 0],
}: CloudProps) {
  return (
    <>
      <Cylinder
        args={[width, height, depth]}
        position={position}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial color="white" envMapIntensity={0.25} />
      </Cylinder>
      <Cylinder
        args={[width, height, depth]}
        position={[position[0] + width, position[1] + width, position[2]]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial color="white" envMapIntensity={0.25} />
      </Cylinder>
      <Cylinder
        args={[width, height, depth]}
        position={[position[0] + width * 2, position[1], position[2]]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial color="white" envMapIntensity={0.25} />
      </Cylinder>
      <Box
        args={[width * 2, height, depth]}
        position={[position[0] + width, position[1] - height / 2, position[2]]}
      >
        <meshStandardMaterial color="white" envMapIntensity={0.25} />
      </Box>
    </>
  );
}
