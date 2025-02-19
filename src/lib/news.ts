export async function fetchNews() {
	return [
		{
			id: 1,
			date: '2025-02-19',
			title: 'Nueva Oferta Disponible',
			content:
				'Hemos lanzado una nueva promoción especial para este mes.',
			image: '/news/news1.jpg',
		},
		{
			id: 2,
			date: '2025-02-18',
			title: 'Evento Corporativo',
			content:
				'Nuestro equipo participará en una feria internacional este viernes.',
			image: '/news/news2.jpg',
		},
	];
}
