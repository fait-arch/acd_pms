'use client';

export default function Empresa() {
	const empresa = {
		mision: 'Brindar soluciones innovadoras y de alta calidad en materiales de construcción.',
		vision: 'Ser líderes en el mercado con un compromiso de sostenibilidad y excelencia.',
		valores: [
			'Innovación',
			'Calidad',
			'Compromiso',
			'Sostenibilidad',
			'Trabajo en equipo',
		],
		organigrama: [
			{ cargo: 'CEO', nombre: 'Juan Pérez', foto: '/images/ceo.jpg' },
			{
				cargo: 'Gerente de Ventas',
				nombre: 'Ana Gómez',
				foto: '/images/ventas.jpg',
			},
			{
				cargo: 'Gerente de Producción',
				nombre: 'Carlos Ramírez',
				foto: '/images/produccion.jpg',
			},
		],
	};

	return (
		<div className="p-6 space-y-6 bg-gray-100 min-h-screen dark:bg-gray-900 dark:text-white">
			<h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 text-center">
				Información de la Empresa
			</h1>

			<section className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800 dark:text-gray-200">
				<h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
					Misión
				</h2>
				<p className="text-gray-600 dark:text-gray-400">
					{empresa.mision}
				</p>
			</section>

			<section className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800 dark:text-gray-200">
				<h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
					Visión
				</h2>
				<p className="text-gray-600 dark:text-gray-400">
					{empresa.vision}
				</p>
			</section>

			<section className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800 dark:text-gray-200">
				<h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
					Valores
				</h2>
				<ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
					{empresa.valores.map((valor, index) => (
						<li key={index}>{valor}</li>
					))}
				</ul>
			</section>

			<section className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800 dark:text-gray-200">
				<h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
					Organigrama Empresarial
				</h2>
				<div className="grid md:grid-cols-3 gap-6 mt-4">
					{empresa.organigrama.map((persona, index) => (
						<div
							key={index}
							className="border p-4 rounded-lg shadow-md text-center bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
						>
							<img
								src={persona.foto}
								alt={persona.nombre}
								className="w-24 h-24 rounded-full mx-auto mb-2"
							/>
							<h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
								{persona.nombre}
							</h3>
							<p className="text-gray-600 dark:text-gray-400">
								{persona.cargo}
							</p>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
