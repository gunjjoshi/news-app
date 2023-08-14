import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';
import './newsList.css'

const NewsList = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCountry, setSelectedCountry] = useState('us'); // Default country is 'us'

    const countryList = [
        { code: 'us', name: 'United States' },
        { code: 'ca', name: 'Canada' },
        { code: 'gb', name: 'United Kingdom' },
        { code: 'au', name: 'Australia' },
        { code: 'jp', name: 'Japan' },
        { code: 'in', name: 'India' },
        { code: 'fr', name: 'France' },
        { code: 'de', name: 'Germany' },
    ];


    useEffect(() => {
        const getArticles = async () => {
            try {
                const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${selectedCountry}&apiKey=89d5ca5716cd4e25a65c5ca562a3553f`);
                console.log(response);
                setArticles(response.data.articles);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching articles:', error);
                setLoading(false);
            }
        };
        getArticles();
    }, [selectedCountry]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="news-list-container">
            <select className="country-select" value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
                {countryList.map(country => (
                    <option key={country.code} value={country.code}>
                        {country.name}
                    </option>
                ))}
            </select>

            <div className="news-items">
                {articles.map(article => (
                    <NewsItem
                        key={article.title}
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        urlToImage={article.urlToImage}
                    />
                ))}
            </div>
        </div>
    );
};

export default NewsList;