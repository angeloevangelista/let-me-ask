import React from 'react';

import logoImg from '../../assets/logo.svg';
import googleIconImg from '../../assets/google-icon.svg';
import illustrationImg from '../../assets/illustration.svg';

import { Button } from '../../components/Button';

import * as SC from './styles';

const Home: React.FC = () => {
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

      <main>
        <SC.MainContent>
          <img src={logoImg} alt="Let me ask" />

          <Button backgroundColor="#ea4335" className="create-room-button">
            <img src={googleIconImg} alt="Logo do Google" />

            <strong>Crie sua sala com o Google</strong>
          </Button>

          <div className="separator">Ou entre em uma sala</div>

          <form>
            <input type="text" placeholder="Digite o código da sala" />

            <Button type="submit">Entrar na sala</Button>
          </form>
        </SC.MainContent>
      </main>
    </SC.Container>
  );
};

export { Home };
