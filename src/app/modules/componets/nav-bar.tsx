'use client';
import { Home } from 'lucide-react';
import Link from 'next/link';

export default function NavBar() {
	const links = [
		{ name: 'HOME', path: '/' },
		{ name: 'EMPRESA', path: '/empresa' },
		{ name: 'PRODUCTOS', path: '/productos' },
		{ name: 'OFERTA DEL MES', path: '/oferta' },
		{ name: 'LOCALIZACIÓN', path: '/localizacion' },
		{ name: 'CONTACTO', path: '/contacto' },
		{ name: 'NOTICIAS', path: '/noticias' },
		{ name: 'CLIMA', path: '/clima' },
	];

	return (
		<div className="w-full h-full bg-emerald-800">
			{/* Barra superior */}
			<div className="flex justify-center items-center bg-gray-200 dark:bg-gray-800 p-4 fixed top-0 left-0 right-0 z-50">
				<h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
					Material Fadrell
				</h1>
				<Home className="w-8 h-8 text-blue-500 ml-2 dark:text-blue-400" />
			</div>

			{/* Barra de navegación fija */}
			<div className="pt-24">
				{' '}
				{/* Agregar padding-top para evitar que se superponga */}
				<nav className="flex flex-wrap gap-2 justify-center bg-white dark:bg-gray-700 p-4 shadow-md fixed top-16 left-0 right-0 z-40">
					{links.map(({ name, path }) => (
						<Link key={name} href={path}>
							<button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition dark:bg-blue-600 dark:hover:bg-blue-700">
								{name}
							</button>
						</Link>
					))}
				</nav>
			</div>

			{/* Aquí puedes agregar el contenido de la página */}
		</div>
	);
}
