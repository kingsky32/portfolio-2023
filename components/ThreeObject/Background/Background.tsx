/* eslint-disable react/no-unknown-property */

import React from 'react';
import { Box } from '@react-three/drei';
import Cloud from '#components/ThreeObject/Cloud';
import { useFrame } from '@react-three/fiber';
import { CloudRef } from '#components/ThreeObject/Cloud/Cloud';

export interface BackgroundProps {
  width: number;
  height: number;
  depth: number;
}

const Background = React.memo(function Background({
  width,
  height,
  depth,
}: BackgroundProps) {
  const cloudsRef = React.useRef<(CloudRef | null)[]>([]);

  useFrame(() => {
    cloudsRef.current.forEach((mesh) => {
      if (mesh) {
        if (mesh.position.x > 10) {
          mesh.position.x = -10;
        } else {
          mesh.position.x += 0.005;
        }
      }
    });
  });

  return (
    <>
      {[...new Array(6)].map((_, index) => {
        return (
          <Cloud
            key={`Cloud-${index}`}
            ref={(ref) => {
              cloudsRef.current[index] = ref;
            }}
            width={0.25}
            height={0.25}
            depth={0.05}
            position={[
              Math.round(Math.random() * 20) - 10,
              Math.random() * 5 + 4,
              Math.round(Math.random() * 10) - 5,
            ]}
          />
        );
      })}
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
});

export default Background;
