'use client';

import { useState, useEffect } from 'react';

const data = {
	home: {
		title: 'Bienvenido a Nuestro Emprendimiento',
		description: 'Descubre nuestros productos y ofertas del mes.',
	},
};

export default function Home() {
	const [content, setContent] = useState(data);

	useEffect(() => {
		setContent(data);
	}, []);

	return (
		<div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
			<h1 className="text-4xl font-bold">{content.home.title}</h1>
			<p className="mt-2 text-lg">{content.home.description}</p>
		</div>
	);
}
