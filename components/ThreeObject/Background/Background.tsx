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
  const cloud1Ref = React.useRef<null | CloudRef>(null);
  const cloud2Ref = React.useRef<null | CloudRef>(null);
  const cloud3Ref = React.useRef<null | CloudRef>(null);
  const cloud4Ref = React.useRef<null | CloudRef>(null);
  const cloud5Ref = React.useRef<null | CloudRef>(null);

  useFrame(() => {
    [
      cloud1Ref.current,
      cloud2Ref.current,
      cloud3Ref.current,
      cloud4Ref.current,
      cloud5Ref.current,
    ].forEach((mesh) => {
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
      <Cloud
        ref={cloud1Ref}
        width={0.25}
        height={0.25}
        depth={0.05}
        position={[2, 4, -2]}
      />
      <Cloud
        ref={cloud2Ref}
        width={0.25}
        height={0.25}
        depth={0.05}
        position={[-9, 4, 0]}
      />
      <Cloud
        ref={cloud3Ref}
        width={0.25}
        height={0.25}
        depth={0.05}
        position={[0, 4, 3]}
      />
      <Cloud
        ref={cloud4Ref}
        width={0.25}
        height={0.25}
        depth={0.05}
        position={[5, 2, 3]}
      />
      <Cloud
        ref={cloud5Ref}
        width={0.25}
        height={0.25}
        depth={0.05}
        position={[-8, 1, 3]}
      />
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
