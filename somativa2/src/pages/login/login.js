import React, { useState } from 'react';
import { auth } from 'firebase/auth';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const history = useHistory();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      // Faça login com o Firebase Authentication
      await auth.signInWithEmailAndPassword(email, senha);
      history.push('/dashboard'); // Redirecione para a página Principal
    } catch (error) {
      alert('Erro ao fazer login: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Senha:</label>
          <input type="password" value={senha} onChange={handleSenhaChange} />
        </div>
        <button type="submit">Acessar</button>
      </form>
    </div>
  );
};

export default Login;
