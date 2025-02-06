import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei';
import { Model } from './Reaponsive';

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
					position={[-1, 0, 8]}
					zoom={0.8}
					makeDefault
				/>
			</Suspense>
		</Canvas>
	);
};

export default HumanContainer;
