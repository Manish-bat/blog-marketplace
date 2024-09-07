import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ArticleList from './components/ArticleList';
import ArticleDetail from './components/ArticleDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main-content">
          <Sidebar />
          <main>
            <Routes>
              <Route path="/" element={<ArticleList />} />
              <Route path="/article/:id" element={<ArticleDetail />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;