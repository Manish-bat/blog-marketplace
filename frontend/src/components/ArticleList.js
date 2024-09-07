import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/articles')
      .then(response => response.json())
      .then(data => setArticles(data));
  }, []);

  return (
    <div className="article-list">
      <h2>Today's Featured Articles</h2>
      <div className="article-grid">
        {articles.map(article => (
          <div key={article.id} className="article-card">
            <Link to={`/article/${article.id}`}>
              <img src={article.image} alt={article.title} />
              <h3>{article.title}</h3>
              <div className="article-meta">
                <img src={article.authorImage} alt={article.author} className="author-image" />
                <span>{article.author}</span>
                <span>{article.likes} likes</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArticleList;