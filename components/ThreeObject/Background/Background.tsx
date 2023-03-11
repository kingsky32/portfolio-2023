/* eslint-disable react/no-unknown-property */

import React from 'react';
import { Box } from '@react-three/drei';
import Cloud from '#components/ThreeObject/Cloud';

export interface BackgroundProps {
  width: number;
  height: number;
  depth: number;
}

export default function Background({ width, height, depth }: BackgroundProps) {
  return (
    <>
      <Cloud width={0.25} height={0.25} depth={0.05} position={[-2, 4, -2]} />
      <Cloud width={0.25} height={0.25} depth={0.05} position={[2, 4, 0]} />
      <Cloud width={0.25} height={0.25} depth={0.05} position={[-4, 4, 3]} />
      <Box args={[width, 0.1, depth]} position={[0, -0.1, 0]}>
        <meshStandardMaterial color="green" envMapIntensity={0.25} />
      </Box>
      <Box
        args={[depth, height, depth]}
        position={[0, -(height / 2) - 0.15, 0]}
      >
        <meshStandardMaterial color="brown" envMapIntensity={0.25} />
      </Box>
    </>
  );
}
