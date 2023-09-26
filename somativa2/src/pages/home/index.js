import React, { useEffect, useState } from 'react';
import { auth, firestore } from 'firebase';

const Home = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser;

        if (user) {
          const userDoc = await firestore.collection('users').doc(user.uid).get();

          if (userDoc.exists) {
            setUserData(userDoc.data());
          } else {
            console.log('Usuário não encontrado no Firestore.');
          }
        }
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <h2>Seja bem-vindo!</h2>
      {userData && (
        <div>
          <p>Nome: {userData.nome}</p>
          <p>Sobrenome: {userData.sobrenome}</p>
          <p>Data de Nascimento: {userData.dataNascimento}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
