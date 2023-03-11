'use client';

/* eslint-disable react/no-unknown-property */

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Environment from './Environment';

export interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div style={{ height: '100vh' }}>
      <Canvas shadows camera={{ position: [-15, 10, 15], fov: 25 }}>
        <color attach="background" args={['skyblue']} />
        {children}
        <Environment />
        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
}
