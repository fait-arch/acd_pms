'use client';

import { useEffect, useState } from 'react';

// Definimos la interfaz para el producto
interface Product {
	id: number;
	name: string;
	price: number;
	description: string;
	image: string;
	offer: boolean;
}

interface ProductsPageProps {
	showOffersOnly: boolean;
}

export default function ProductsPage({ showOffersOnly }: ProductsPageProps) {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		// Simulamos la carga de un JSON de productos
		const fetchProducts = async () => {
			const data: Product[] = [
				{
					id: 1,
					name: 'Laptop Gamer',
					price: 1500,
					description:
						'Potente laptop con procesador Intel i7 y RTX 4060.',
					image: 'https://via.placeholder.com/300',
					offer: true,
				},
				{
					id: 2,
					name: 'Mouse Inalámbrico',
					price: 40,
					description: 'Mouse ergonómico con batería recargable.',
					image: 'https://via.placeholder.com/300',
					offer: false,
				},
				{
					id: 3,
					name: 'Teclado Mecánico',
					price: 80,
					description: 'Teclado mecánico RGB con switches rojos.',
					image: 'https://via.placeholder.com/300',
					offer: true,
				},
			];
			const filteredProducts = showOffersOnly
				? data.filter((product) => product.offer)
				: data;
			setProducts(filteredProducts);
			console.log('Productos cargados:', filteredProducts); // Verifica los productos
		};

		fetchProducts();
	}, [showOffersOnly]);

	return (
		<div className="max-w-6xl mx-auto p-6 min-h-screen">
			<h1 className="text-4xl font-bold text-center mb-8">
				{showOffersOnly ? 'Ofertas Especiales' : 'Todos los Productos'}
			</h1>
			<div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{products.map((product) => (
					<div
						key={product.id}
						className="border rounded-lg p-4 shadow-lg"
					>
						<img
							src={product.image}
							alt={product.name}
							className="w-full h-48 object-cover rounded-md bg-gray-200"
						/>
						<h2 className="text-xl font-semibold mt-4">
							{product.name}
						</h2>
						<p className="text-gray-600">{product.description}</p>
						<p className="text-lg font-bold mt-2">
							${product.price.toFixed(2)}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}
