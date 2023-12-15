import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import AllCourses from './components/all_courses/AllCourses';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <AllCourses />
  </React.StrictMode>
);