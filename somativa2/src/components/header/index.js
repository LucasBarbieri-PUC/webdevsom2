import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/cadastro">Cadastro</Link>
    </div>
  );
};

export default Header;
