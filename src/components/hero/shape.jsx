import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';

function Shape() {
	return (
		<>
			<Sphere
				args={[1.1, 50, 250]}
				scale={2.3}>
				<MeshDistortMaterial
					color='#694aa7'
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
