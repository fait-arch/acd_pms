// components/Contacto.tsx
'use client';

import { useState } from 'react';

const Contacto = () => {
	const [nombre, setNombre] = useState('');
	const [email, setEmail] = useState('');
	const [mensaje, setMensaje] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Aquí puedes agregar la lógica para guardar los datos, como hacer una petición a un backend.
		console.log('Enviando:', { nombre, email, mensaje });
	};

	return (
		<div className="m-15 max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
			<h2 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">
				Contacto
			</h2>
			<form onSubmit={handleSubmit}>
				<div className="mb-4">
					<label
						htmlFor="nombre"
						className="block text-sm font-medium text-gray-700 dark:text-gray-300"
					>
						Nombre
					</label>
					<input
						id="nombre"
						type="text"
						value={nombre}
						onChange={(e) => setNombre(e.target.value)}
						required
						className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-blue-500"
					/>
				</div>
				<div className="mb-4">
					<label
						htmlFor="email"
						className="block text-sm font-medium text-gray-700 dark:text-gray-300"
					>
						Email
					</label>
					<input
						id="email"
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
						className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-blue-500"
					/>
				</div>
				<div className="mb-4">
					<label
						htmlFor="mensaje"
						className="block text-sm font-medium text-gray-700 dark:text-gray-300"
					>
						Mensaje
					</label>
					<textarea
						id="mensaje"
						value={mensaje}
						onChange={(e) => setMensaje(e.target.value)}
						required
						rows={4}
						className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-blue-500"
					/>
				</div>
				<div className="text-center">
					<button
						type="submit"
						className="px-6 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600"
					>
						Guardar
					</button>
				</div>
			</form>
		</div>
	);
};

export default Contacto;
