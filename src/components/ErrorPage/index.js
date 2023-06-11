import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function ErrorPage() {
  return (
    <div className="error-page">
      <h1 className="error-page__heading">404</h1>
      <p className="error-page__message">Oops! Something went wrong.</p>
      <p className="error-page__message">Please return to the <Link to="/" className="error-page__link">homepage</Link>.</p>
    </div>
  );
}

export default ErrorPage;
