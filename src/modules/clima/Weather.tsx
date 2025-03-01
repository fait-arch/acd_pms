'use client';

import { useState, useEffect } from 'react';
import { WeatherData } from '@/app/api/weather/route';

export default function Weather() {
	const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);
	const [city, setCity] = useState<string>('Madrid'); // Ciudad por defecto
	const [inputCity, setInputCity] = useState<string>('');

	const fetchWeatherData = async (cityName: string) => {
		setLoading(true);
		setError(null);
		try {
			const response = await fetch(
				`/api/weather?city=${encodeURIComponent(cityName)}`,
			);

			if (!response.ok) {
				const errorData = await response.json();
				throw new Error(
					errorData.error || 'Error al obtener datos del clima',
				);
			}

			const data = await response.json();
			setWeatherData(data);
		} catch (err) {
			setError(err instanceof Error ? err.message : 'Error desconocido');
			console.error(err);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchWeatherData(city);
	}, [city]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (inputCity.trim()) {
			setCity(inputCity.trim());
		}
	};

	return (
		<div className="max-w-md mx-auto p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-colors duration-200 gap-y-4">
			<h1 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
				Clima Actual
			</h1>

			<form onSubmit={handleSubmit} className="mb-6">
				<div className="flex gap-2">
					<input
						type="text"
						value={inputCity}
						onChange={(e) => setInputCity(e.target.value)}
						placeholder="Ingresa una ciudad"
						className="flex-1 p-2 border rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-600"
					/>
					<button
						type="submit"
						className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors dark:bg-blue-600 dark:hover:bg-blue-800"
					>
						Buscar
					</button>
				</div>
			</form>

			{loading && (
				<div className="text-center py-4">
					<p className="text-gray-600 dark:text-gray-300">
						Cargando...
					</p>
				</div>
			)}

			{error && (
				<div className="text-center py-4">
					<p className="text-red-500 dark:text-red-400">{error}</p>
				</div>
			)}

			{weatherData && !loading && !error && (
				<div className="bg-blue-100 dark:bg-blue-800 p-4 rounded-lg transition-colors">
					<div className="flex justify-between items-center mb-4">
						<h2 className="text-xl font-semibold text-gray-800 dark:text-white">
							{weatherData.city}, {weatherData.country}
						</h2>
						<img
							src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
							alt={weatherData.description}
							className="w-16 h-16"
						/>
					</div>

					<div className="flex justify-between items-center mb-4">
						<p className="text-4xl font-bold text-gray-800 dark:text-white">
							{weatherData.temperature}°C
						</p>
						<p className="text-gray-600 dark:text-gray-300 capitalize">
							{weatherData.description}
						</p>
					</div>

					<div className="grid grid-cols-2 gap-4 mt-4 gap-y-4">
						<div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow">
							<p className="text-sm text-gray-500 dark:text-gray-400">
								Sensación térmica
							</p>
							<p className="text-lg font-semibold text-gray-800 dark:text-white">
								{weatherData.feels_like}°C
							</p>
						</div>
						<div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow">
							<p className="text-sm text-gray-500 dark:text-gray-400">
								Humedad
							</p>
							<p className="text-lg font-semibold text-gray-800 dark:text-white">
								{weatherData.humidity}%
							</p>
						</div>
						<div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow">
							<p className="text-sm text-gray-500 dark:text-gray-400">
								Viento
							</p>
							<p className="text-lg font-semibold text-gray-800 dark:text-white">
								{weatherData.windSpeed} m/s
							</p>
						</div>
						<div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow">
							<p className="text-sm text-gray-500 dark:text-gray-400">
								Presión
							</p>
							<p className="text-lg font-semibold text-gray-800 dark:text-white">
								{weatherData.pressure} hPa
							</p>
						</div>
					</div>

					<div className="flex justify-between mt-4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow">
						<div>
							<p className="text-sm text-gray-500 dark:text-gray-400">
								Mín
							</p>
							<p className="text-lg font-semibold text-gray-800 dark:text-white">
								{weatherData.min_temp}°C
							</p>
						</div>
						<div>
							<p className="text-sm text-gray-500 dark:text-gray-400">
								Máx
							</p>
							<p className="text-lg font-semibold text-gray-800 dark:text-white">
								{weatherData.max_temp}°C
							</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
