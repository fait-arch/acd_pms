'use client';

import { useEffect, useRef } from 'react';

interface LocationMapProps {
	latitude: number;
	longitude: number;
	title: string;
	address: string;
}

export default function LocationMap({
	latitude,
	longitude,
	title,
	address,
}: LocationMapProps) {
	const mapRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// Verificar si el link de estilos ya existe
		const linkExists = document.querySelector('link[href*="leaflet.css"]');

		// Si no existe, agregar link para estilos de Leaflet
		if (!linkExists) {
			const link = document.createElement('link');
			link.rel = 'stylesheet';
			link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
			link.integrity =
				'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
			link.crossOrigin = '';
			document.head.appendChild(link);
		}

		// Importar Leaflet dinámicamente (solo en el lado del cliente)
		import('leaflet').then((L) => {
			// Si ya hay un mapa inicializado, limpiarlo
			if (mapRef.current) {
				mapRef.current.innerHTML = '';
			}

			// Inicializar el mapa
			const map = L.map(mapRef.current!).setView(
				[latitude, longitude],
				15,
			);

			// Usar OpenStreetMap como proveedor de datos
			L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				attribution:
					'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
			}).addTo(map);

			// Agregar un marcador en la ubicación
			const marker = L.marker([latitude, longitude]).addTo(map);

			// Agregar un popup con información de la empresa
			marker
				.bindPopup(
					`
        <strong>${title}</strong><br>
        ${address}
      `,
				)
				.openPopup();

			// Limpiar el mapa cuando el componente se desmonte
			return () => {
				map.remove();
			};
		});
	}, [latitude, longitude, title, address]);

	return (
		<div className="border rounded-lg shadow-md overflow-hidden">
			<div
				ref={mapRef}
				className="h-64 w-full"
				style={{ minHeight: '300px' }}
			/>
		</div>
	);
}
