import React from 'react';
import NewsCard from './NewsCard';

interface News {
	id: number;
	imageSrc: string;
	date: string;
	title: string;
	content: string;
}

interface NewsListProps {
	newsData: News[];
}

const NewsList: React.FC<NewsListProps> = ({ newsData }) => {
	return (
		<div className="space-y-6">
			{newsData.map((news) => (
				<NewsCard
					key={news.id}
					imageSrc={news.imageSrc}
					date={news.date}
					title={news.title}
					content={news.content}
				/>
			))}
		</div>
	);
};

export default NewsList;
