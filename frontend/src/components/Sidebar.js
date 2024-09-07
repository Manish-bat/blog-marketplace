import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  const categories = [
    "Today's Featured Articles",
    "Generative AI",
    "Contests and collaboration projects",
    "camera",
    "work",
    "design"
  ];

  return (
    <aside className="sidebar">
      <nav>
        <ul>
          {categories.map((category, index) => (
            <li key={index}>
              <Link to={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}>
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;