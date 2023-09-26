import React, { useState } from 'react';
import { auth, firestore } from '../firebase';

const Cadastro = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
  };

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleSobrenomeChange = (event) => {
    setSobrenome(event.target.value);
  };

  const handleDataNascimentoChange = (event) => {
    setDataNascimento(event.target.value);
  };

  const handleCadastro = async (event) => {
    event.preventDefault();

    try {
      // Crie o usuário no Firebase Authentication
      const userCredential = await auth.createUserWithEmailAndPassword(email, senha);
      const user = userCredential.user;

      // Adicione os outros dados ao Firestore
      await firestore.collection('users').doc(user.uid).set({
        uid: user.uid,
        email,
        nome,
        sobrenome,
        dataNascimento
      });

      alert('Cadastro bem-sucedido!');
    } catch (error) {
      alert('Erro ao fazer cadastro: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Cadastro</h2>
      <form onSubmit={handleCadastro}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Senha:</label>
          <input type="password" value={senha} onChange={handleSenhaChange} />
        </div>
        <div>
          <label>Nome:</label>
          <input type="text" value={nome} onChange={handleNomeChange} />
        </div>
        <div>
          <label>Sobrenome:</label>
          <input type="text" value={sobrenome} onChange={handleSobrenomeChange} />
        </div>
        <div>
          <label>Data de Nascimento:</label>
          <input type="date" value={dataNascimento} onChange={handleDataNascimentoChange} />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
