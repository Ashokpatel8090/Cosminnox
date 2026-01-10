import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

// The NetworkGraphic component handles the setup of the 3D scene (Canvas)
// and includes the PointsGroup component which is responsible for the animation.

const PointsGroup = (props) => {
  const ref = useRef();
  // Generate 500 random points in a sphere
  const [sphere] = React.useState(() => random.inSphere(new Float32Array(500 * 3), { radius: 1.5 }));

  // Animate the points group: rotate it around its center
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#8beaff" 
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export default function NetworkGraphic() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <PointsGroup />
      </Canvas>
    </div>
  );
}


// import React, { useRef, useMemo } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { Points, PointMaterial } from '@react-three/drei';
// import * as THREE from 'three';
// import * as random from 'maath/random/dist/maath-random.esm';

// // Configuration
// const NUM_POINTS = 150; 
// const POINT_RADIUS = 2; 
// const CONNECTION_DISTANCE = 0.3; 
// const MAX_LINES = (NUM_POINTS * (NUM_POINTS - 1)) / 2; // Max possible lines
// const MAX_VERTICES = MAX_LINES * 2 * 3; // Max vertices * 2 points/line * 3 components/point (x,y,z)
// const COLOR = new THREE.Color('#38bdf8'); 

// const NetworkPoints = (props) => {
//   const lineRef = useRef();
//   const pointsRef = useRef();
  
//   // 1. Generate Point Positions (The nodes)
//   const [pointPositions] = useMemo(() => {
//     return [random.inSphere(new Float32Array(NUM_POINTS * 3), { radius: POINT_RADIUS })];
//   }, []);

//   // 2. Initialize Line Positions Array
//   // We use a fixed size buffer for the geometry attribute
//   const linePositions = useMemo(() => new Float32Array(MAX_VERTICES), []);

//   // 3. Animate and Calculate Connections
//   useFrame((state, delta) => {
//     // Rotate the point group for subtle movement
//     pointsRef.current.rotation.x -= delta / 20;
//     pointsRef.current.rotation.y -= delta / 30;

//     const vertices = pointPositions;
//     let lineIndex = 0;
    
//     // Check distance between every pair of points
//     for (let i = 0; i < NUM_POINTS; i++) {
//       for (let j = i + 1; j < NUM_POINTS; j++) {
//         // Retrieve positions from the pointPositions array
//         const i3 = i * 3;
//         const j3 = j * 3;
        
//         const x1 = vertices[i3];
//         const y1 = vertices[i3 + 1];
//         const z1 = vertices[i3 + 2];
        
//         const x2 = vertices[j3];
//         const y2 = vertices[j3 + 1];
//         const z2 = vertices[j3 + 2];

//         const dx = x1 - x2;
//         const dy = y1 - y2;
//         const dz = z1 - z2;
        
//         const distSq = dx * dx + dy * dy + dz * dz;

//         // If points are close, add line vertices to the linePositions buffer
//         if (distSq < CONNECTION_DISTANCE * CONNECTION_DISTANCE) {
//           if (lineIndex + 6 <= MAX_VERTICES) {
//             // Point 1
//             linePositions[lineIndex++] = x1;
//             linePositions[lineIndex++] = y1;
//             linePositions[lineIndex++] = z1; 
//             // Point 2
//             linePositions[lineIndex++] = x2;
//             linePositions[lineIndex++] = y2;
//             linePositions[lineIndex++] = z2; 
//           }
//         }
//       }
//     }

//     // Update the line geometry in the Three.js structure
//     if (lineRef.current) {
//         // Get the position attribute buffer
//         const positionAttribute = lineRef.current.geometry.attributes.position;
        
//         // Copy the calculated vertices into the buffer data array
//         positionAttribute.copyArray(linePositions);
        
//         // Update the item size (only the used part of the buffer)
//         positionAttribute.count = lineIndex / 3; 

//         // Tell Three.js that the buffer needs updating
//         positionAttribute.needsUpdate = true;
//     }
//   });

//   return (
//     <group rotation={[0, 0, Math.PI / 4]}>
//       {/* 1. Render the Lines (Edges of the Network) */}
//       <lineSegments ref={lineRef}>
//         <bufferGeometry attach="geometry">
//           {/* CRITICAL FIX: Explicitly define the BufferAttribute for positions */}
//           <bufferAttribute
//             attach="attributes-position"
//             array={linePositions} // Attach the initialized Float32Array
//             count={0} // Start with zero lines
//             itemSize={3} // X, Y, Z
//             usage={THREE.DynamicDrawUsage} // Indicate it will change often
//           />
//         </bufferGeometry>
//         <lineBasicMaterial attach="material" color={COLOR} opacity={0.5} transparent linewidth={0.5} />
//       </lineSegments>

//       {/* 2. Render the Points (Nodes of the Network) */}
//       <Points ref={pointsRef} positions={pointPositions} stride={3} frustumCulled={false} {...props}>
//         <PointMaterial
//           transparent
//           color={COLOR}
//           size={0.03}
//           sizeAttenuation={true}
//           depthWrite={false}
//         />
//       </Points>
//     </group>
//   );
// };

// export default function NetworkGraphic() {
//   return (
//     <div className="absolute inset-0 z-0">
//       <Canvas 
//         camera={{ position: [0, 0, 1] }} 
//         style={{ width: '100%', height: '100%' }}
//       >
//         <ambientLight intensity={0.5} />
//         <color attach="background" args={['#0b0f1a']} />
//         <NetworkPoints />
//       </Canvas>
//     </div>
//   );
// }