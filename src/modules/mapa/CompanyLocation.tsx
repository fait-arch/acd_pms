'use client';
import LocationMap from './LocationMap';

interface LocationData {
	name: string;
	address: string;
	latitude: number;
	longitude: number;
}

export default function CompanyLocation() {
	// Datos de la única ubicación de la empresa
	const location: LocationData = {
		name: 'Oficina Central',
		address: 'Calle Gran Vía 28, Madrid, España',
		latitude: 40.4202, // Coordenadas de Gran Vía, Madrid
		longitude: -3.7067,
	};

	return (
		<div className="max-w-4xl mx-auto p-4 bg-gray-800 rounded-lg shadow-lg">
			<h2 className="text-2xl font-bold mb-4 text-white">
				Nuestra Ubicación
			</h2>
			<div className="flex flex-col md:flex-row gap-6">
				{/* Información de ubicación */}
				<div className="md:w-1/3">
					<div className="bg-gray-700 p-4 rounded-lg shadow-inner">
						<h3 className="text-lg font-semibold mb-3 text-white">
							Oficina Principal
						</h3>
						<div className="bg-gray-600 p-3 rounded-lg">
							<p className="text-white mb-2">
								{location.address}
							</p>
							<p className="text-white">
								<span className="font-medium">Teléfono:</span>{' '}
								+34 91 234 5678
							</p>
							<p className="text-white">
								<span className="font-medium">Email:</span>{' '}
								info@ikaros.com
							</p>
							<p className="text-white">
								<span className="font-medium">Horario:</span>{' '}
								Lunes a Viernes, 9:00 - 18:00
							</p>
						</div>
					</div>
				</div>
				{/* Mapa */}
				<div className="md:w-2/3">
					<div className="space-y-4">
						<div className="bg-blue-900 p-4 rounded-lg">
							<h3 className="text-xl font-semibold text-white">
								{location.name}
							</h3>
							<p className="text-white mt-1">
								Encuentra nuestra oficina central
							</p>
						</div>
						<LocationMap
							latitude={location.latitude}
							longitude={location.longitude}
							title={location.name}
							address={location.address}
						/>
						<div className="bg-gray-700 p-4 rounded-lg">
							<h3 className="font-semibold text-white mb-2">
								Cómo llegar
							</h3>
							<p className="text-white">
								Estamos ubicados en pleno centro de Madrid, con
								fácil acceso mediante transporte público. Las
								estaciones de metro más cercanas son Gran Vía y
								Callao.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
