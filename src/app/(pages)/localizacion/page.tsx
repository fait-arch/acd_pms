import CompanyLocation from '@/modules/mapa/CompanyLocation';

export default function LocationPage() {
	return (
		<main className="min-h-screen py-8 bg-gray-100 dark:bg-gray-900 transition-colors">
			<div className="container mx-auto px-4">
				<h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
					Dónde Encontrarnos
				</h1>
				<CompanyLocation />
			</div>
		</main>
	);
}
