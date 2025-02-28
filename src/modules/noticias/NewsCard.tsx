import React from 'react';

interface NewsCardProps {
	imageSrc: string;
	date: string;
	title: string;
	content: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
	imageSrc,
	date,
	title,
	content,
}) => {
	return (
		<div className="border border-gray-600 dark:border-gray-300 p-4 bg-orange-500 dark:bg-gray-900 text-black dark:text-white rounded-lg w-full max-w-2xl mx-auto">
			<h2 className="text-center font-bold">NOTICIA</h2>
			<div className="flex space-x-4 mt-2">
				{/* Imagen */}
				<div className="bg-green-600 dark:bg-green-800 w-32 h-32 flex items-center justify-center text-white font-bold">
					<img
						src={imageSrc}
						alt="Imagen"
						className="w-full h-full object-cover rounded-md"
					/>
				</div>
				{/* Información */}
				<div className="bg-green-600 dark:bg-green-800 p-4 flex-1 text-white rounded-md">
					<p>
						<span className="font-bold">FECHA:</span> {date}
					</p>
					<p>
						<span className="font-bold">TÍTULO:</span> {title}
					</p>
					<p>
						<span className="font-bold">CONTENIDO:</span> {content}
					</p>
				</div>
			</div>
		</div>
	);
};

export default NewsCard;
