import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';

function Shape() {
	return (
		<>
			<Sphere
				args={[1.1, 150, 250]}
				scale={2.3}>
				<MeshDistortMaterial
					color='red'
					attach='material'
					distort={0.5}
					speed={2}
				/>
			</Sphere>
			<ambientLight intensity={1} />
			<directionalLight position={[5, 4, 1]} />
			<OrbitControls
				enableZoom='false'
				autoRotate
			/>
		</>
	);
}

export default Shape;
