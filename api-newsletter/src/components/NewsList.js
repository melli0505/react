// API 요청, 데이터 배열을 컴포넌트 배열로 변환, 렌더링하는 컴포넌트
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const sampleArticle = {
    title: '제목',
    description: '내용',
    url: 'https://google.com',
    urlToImage: 'https://via.placeholder.com/160',
};

const NewsList = () => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // async 사용 함수는 따로 선언
        const fetchData = async ()=>{
            setLoading(true);
            try{
                const response = await axios.get('http://newsapi.org/v2/top-headlines?country=kr&apiKey=2240b244bccf4a5ba26330614e1840d0', );
                setArticles(response.data.articles);
            } catch(e) {
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    // 대기 중일 때
    if(loading) {
        return <NewsListBlock>now loading...</NewsListBlock>;
    }
    // 아직 articles 값이 설정되기 전일 때
    if (!articles){
        return null;
    }

    // article 값이 유효할 때
    return (
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key={article.url} article={article} />
            ))}
        </NewsListBlock>
    );
};

export default NewsList;