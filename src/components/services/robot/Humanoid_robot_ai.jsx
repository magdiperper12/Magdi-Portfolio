import { useGLTF } from '@react-three/drei';

export function Model(props) {
	const { nodes, materials } = useGLTF('/humanoid_robot_ai.glb');
	return (
		<group
			{...props}
			dispose={null}>
			<mesh
				geometry={nodes.Object_4.geometry}
				material={materials.material_0}
			/>
			<mesh
				geometry={nodes.Object_5.geometry}
				material={materials.material_0}
			/>
		</group>
	);
}

useGLTF.preload('/humanoid_robot_ai.glb');
