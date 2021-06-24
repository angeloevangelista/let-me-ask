import React from 'react';

import illustrationImg from '../../assets/illustration.svg';

import * as SC from './styles';

const HomeLayout: React.FC = ({ children }) => {
  return (
    <SC.Container>
      <aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas."
        />

        <strong>Crie salas de Q&amp;A ao vivo</strong>
        <p>Tire dúvidas da sua audiência em tempo real.</p>
      </aside>

      <main>{children}</main>
    </SC.Container>
  );
};

export { HomeLayout };
