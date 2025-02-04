import './services.css';
import { Canvas } from '@react-three/fiber';
function Services() {
	return (
		<div>
			<div id='canvas-container'>
				<Canvas>
					<mesh>
						<boxGeometry args={[2, 2, 2]} />
						<meshPhongMaterial />
					</mesh>
					<ambientLight intensity={0.1} />
					<directionalLight
						position={[0, 0, 5]}
						color='red'
					/>
					<orbitControls
						ref={orbitControlsRef}
						args={[camera, gl.domElement]}
					/>
				</Canvas>
			</div>
		</div>
	);
}

export default Services;
