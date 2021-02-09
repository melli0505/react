// 뉴스 정보를 보여주는 컴포넌트
import React from 'react';
import styled from 'styled-components';

// style
const NewsItemBlock = styled.div`
    display: flex;
    .thumbnail {
        margin-right: 1rem;
        img{
            display: block;
            width: 160px;
            height: 100px;
            object-fit: cover;
        }
    }
    .contents {
        h2 {
            margin: 0;
            a {
                color: black;
            }
        }
        p {
            margin: 0;
            line-height: 1.5;
            margin-top: 0.5rem;
            white-space: normal;
        }
    }
    & + & {
        margin-top: 3rem;
    }
`;

const NewsItem = ({ article }) => {
    const {title, description, url, urlToImage } = article;
    return (
        <NewsItemBlock>
            {urlToImage && (
                <div className="thumbnail">
                    {/* noreferrer 사용자가 하이퍼링크를 클릭할 때 브라우저가 HTTP 리퍼러 헤더(referer header)를 전송해서는 안 됨을 나타냄. */}
                    {/* noopener 하이퍼링크를 따라 연결되는 어떠한 브라우징 컨텍스트(browsing context)도 오프너(opener)여서는 안 됨을 나타냄. */}
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <img src={urlToImage} alt="thumbnail" />
                    </a>
                </div>
            )}
            <div className="contens">
                <h2>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                </h2>
                <p>{description}</p>
            </div>
        </NewsItemBlock>
    );
};

export default NewsItem;