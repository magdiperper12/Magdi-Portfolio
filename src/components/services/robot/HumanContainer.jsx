import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei';
import { Model } from './Humanoid_robot_ai';

const HumanContainer = () => {
	return (
		<Canvas>
			<Suspense fallback='loading...'>
				<Stage
					environment='night'
					intensity={1}>
					<Model />
				</Stage>
				<OrbitControls
					enableZoom={false}
					autoRotate
				/>
				<PerspectiveCamera
					position={[-1, 0, 1.8]}
					zoom={1}
					makeDefault
				/>
			</Suspense>
		</Canvas>
	);
};

export default HumanContainer;
