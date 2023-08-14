import React from 'react';
import './newsItem.css';

const NewsItem = ({ title, description, url, urlToImage }) => {
    return (
        <div className='news-item'>
            <img className='news-img' src={urlToImage} alt={urlToImage} />
            <h3 className='news-title'><a href={url}>{title}</a></h3>
            <p className='news-description'>{description}</p>
        </div>
    );
};

export default NewsItem;
