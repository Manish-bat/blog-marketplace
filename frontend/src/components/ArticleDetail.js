import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function ArticleDetail() {
  const [article, setArticle] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/api/articles/${id}`)
      .then(response => response.json())
      .then(data => setArticle(data));
  }, [id]);

  if (!article) return <div>Loading...</div>;

  return (
    <div className="article-detail">
      <Link to="/" className="back-link">← Back</Link>
      <div className="author-info">
        <img src={article.authorImage} alt={article.author} className="author-image" />
        <h2>{article.author}</h2>
        <button className="follow-button">Follow</button>
      </div>
      <img src={article.image} alt={article.title} className="article-image" />
      <h1>{article.title}</h1>
      <div className="article-meta">
        <span>{article.date}</span>
        <span>{article.likes} likes</span>
      </div>
      <div className="article-content">
        <p>{article.content}</p>
      </div>
    </div>
  );
}

export default ArticleDetail;