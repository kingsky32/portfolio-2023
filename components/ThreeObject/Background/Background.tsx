/* eslint-disable react/no-unknown-property */

import React from 'react';
import { Box } from '@react-three/drei';

export interface BackgroundProps {
  width: number;
  height: number;
  depth: number;
}

export default function Background({ width, height, depth }: BackgroundProps) {
  return (
    <>
      <Box args={[width, 0.1, depth]} position={[0, height / 2 + 0.05, 0]}>
        <meshStandardMaterial color="green" envMapIntensity={0.25} />
      </Box>
      <Box args={[depth, height, depth]} position={[0, 0, 0]}>
        <meshStandardMaterial color="brown" envMapIntensity={0.25} />
      </Box>
    </>
  );
}
