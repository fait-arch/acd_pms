export async function fetchProducts() {
	return [
		{
			id: 1,
			name: 'Producto A',
			price: 10.99,
			image: '/products/productA.jpg',
		},
		{
			id: 2,
			name: 'Producto B',
			price: 15.49,
			image: '/products/productB.jpg',
		},
	];
}

export async function fetchOffers() {
	return [
		{
			id: 1,
			name: 'Oferta Especial',
			discount: '20%',
			validUntil: '2025-03-01',
		},
	];
}
