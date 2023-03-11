/* eslint-disable react/no-unknown-property */

import React from 'react';
import { Environment as EnvironmentImpl } from '@react-three/drei';

const Environment = React.memo(function Environment() {
  return (
    <>
      <directionalLight
        position={[5, 5, 5]}
        intensity={0.5}
        shadow-mapSize={1024}
        castShadow
      />
      <directionalLight
        position={[-5, 5, 5]}
        intensity={0.1}
        shadow-mapSize={128}
        castShadow
      />
      <directionalLight
        position={[-5, 5, -5]}
        intensity={0.1}
        shadow-mapSize={128}
        castShadow
      />
      <directionalLight
        position={[0, 5, 0]}
        intensity={0.1}
        shadow-mapSize={128}
        castShadow
      />
      <EnvironmentImpl preset="sunset" />
    </>
  );
});

export default Environment;
