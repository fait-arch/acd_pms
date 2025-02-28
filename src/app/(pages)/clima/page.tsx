import Weather from '@/modules/clima/Weather';

export default function Home() {
	return (
		<main className="min-h-screen py-8 bg-gray-100 dark:bg-gray-900 transition-colors">
			<div className="container mx-auto px-4">
				<Weather />
			</div>
		</main>
	);
}
