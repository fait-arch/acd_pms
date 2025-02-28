import NewsList from '@/modules/noticias/NewsList';

const newsData = [
	{
		id: 1,
		imageSrc: 'https://via.placeholder.com/150',
		date: '28/02/2025',
		title: 'Título de la Noticia 1',
		content: 'Breve descripción de la noticia 1...',
	},
	{
		id: 2,
		imageSrc: 'https://via.placeholder.com/150',
		date: '29/02/2025',
		title: 'Título de la Noticia 2',
		content: 'Breve descripción de la noticia 2...',
	},
];

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 p-4">
			<h1 className="text-2xl font-bold text-black dark:text-white mb-4">
				Últimas Noticias
			</h1>
			<NewsList newsData={newsData} />
		</div>
	);
}
