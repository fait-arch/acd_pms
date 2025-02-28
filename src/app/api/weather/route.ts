import { NextRequest, NextResponse } from 'next/server';

// Define el tipo para los datos del clima
export interface WeatherData {
	city: string;
	country: string;
	temperature: number;
	description: string;
	icon: string;
	humidity: number;
	windSpeed: number;
	pressure: number;
	feels_like: number;
	min_temp: number;
	max_temp: number;
}

// Datos simulados para ciudades comunes
const mockWeatherData: Record<string, WeatherData> = {
	madrid: {
		city: 'Madrid',
		country: 'ES',
		temperature: 22,
		description: 'cielo despejado',
		icon: '01d',
		humidity: 45,
		windSpeed: 3.5,
		pressure: 1012,
		feels_like: 21,
		min_temp: 18,
		max_temp: 25,
	},
	barcelona: {
		city: 'Barcelona',
		country: 'ES',
		temperature: 24,
		description: 'nubes dispersas',
		icon: '03d',
		humidity: 60,
		windSpeed: 2.8,
		pressure: 1010,
		feels_like: 25,
		min_temp: 20,
		max_temp: 26,
	},
	sevilla: {
		city: 'Sevilla',
		country: 'ES',
		temperature: 28,
		description: 'cielo despejado',
		icon: '01d',
		humidity: 35,
		windSpeed: 2.1,
		pressure: 1008,
		feels_like: 29,
		min_temp: 22,
		max_temp: 32,
	},
	bilbao: {
		city: 'Bilbao',
		country: 'ES',
		temperature: 18,
		description: 'lluvia ligera',
		icon: '10d',
		humidity: 75,
		windSpeed: 4.2,
		pressure: 1005,
		feels_like: 17,
		min_temp: 15,
		max_temp: 20,
	},
	valencia: {
		city: 'Valencia',
		country: 'ES',
		temperature: 25,
		description: 'nubes dispersas',
		icon: '03d',
		humidity: 55,
		windSpeed: 3.0,
		pressure: 1011,
		feels_like: 26,
		min_temp: 21,
		max_temp: 27,
	},
	'ciudad de méxico': {
		city: 'Ciudad de México',
		country: 'MX',
		temperature: 23,
		description: 'parcialmente nublado',
		icon: '02d',
		humidity: 40,
		windSpeed: 2.2,
		pressure: 1023,
		feels_like: 23,
		min_temp: 18,
		max_temp: 25,
	},
	'buenos aires': {
		city: 'Buenos Aires',
		country: 'AR',
		temperature: 26,
		description: 'cielo despejado',
		icon: '01d',
		humidity: 50,
		windSpeed: 3.8,
		pressure: 1014,
		feels_like: 27,
		min_temp: 21,
		max_temp: 29,
	},
};

// Función para generar datos aleatorios para ciudades no encontradas
function generateRandomWeatherData(cityName: string): WeatherData {
	// Lista de posibles descripciones del clima
	const descriptions = [
		'cielo despejado',
		'nubes dispersas',
		'parcialmente nublado',
		'nublado',
		'lluvia ligera',
		'lluvia moderada',
		'tormenta',
	];

	// Lista de posibles iconos
	const icons = ['01d', '02d', '03d', '04d', '09d', '10d', '11d'];

	// Generar temperatura base según la primera letra del nombre de la ciudad (solo para variedad)
	const baseTemp = 15 + (cityName.charCodeAt(0) % 15);

	return {
		city: cityName.charAt(0).toUpperCase() + cityName.slice(1),
		country: 'XX',
		temperature: baseTemp,
		description:
			descriptions[Math.floor(Math.random() * descriptions.length)],
		icon: icons[Math.floor(Math.random() * icons.length)],
		humidity: 30 + Math.floor(Math.random() * 50),
		windSpeed: 1 + Math.random() * 6,
		pressure: 1000 + Math.floor(Math.random() * 30),
		feels_like: baseTemp - 1 + Math.floor(Math.random() * 3),
		min_temp: baseTemp - 5,
		max_temp: baseTemp + 5,
	};
}

export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams;
	let city = searchParams.get('city') || 'madrid'; // Ciudad por defecto
	city = city.toLowerCase();

	// Simular tiempo de respuesta de una API real
	await new Promise((resolve) => setTimeout(resolve, 500));

	try {
		// Buscar en nuestros datos simulados
		let weatherData = mockWeatherData[city];

		// Si no encontramos la ciudad, generar datos aleatorios
		if (!weatherData) {
			weatherData = generateRandomWeatherData(city);
		}

		return NextResponse.json(weatherData);
	} catch (error) {
		console.error('Error al procesar datos del clima simulados:', error);
		return NextResponse.json(
			{ error: 'Error al procesar la solicitud' },
			{ status: 500 },
		);
	}
}
