import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import googleIconImg from '../../assets/google-icon.svg';

import { ERouteMap } from '../../routes';
import { Button } from '../../components/Button';
import { HomeLayout } from '../../layouts/HomeLayout';

import { useAuth } from '../../hooks/useAuth';

import * as SC from './styles';

const Home: React.FC = () => {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();

  const handleCreateRoom = useCallback(
    async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();

      try {
        if (!user) await signInWithGoogle();

        history.push(ERouteMap.CreateRoom);
      } catch (error) {
        alert(error.message);
      }
    },
    [history, signInWithGoogle, user],
  );

  return (
    <HomeLayout>
      <SC.MainContent>
        <img src={logoImg} alt="Let me ask" />

        <Button
          backgroundColor="#ea4335"
          className="create-room-button"
          onClick={handleCreateRoom}
        >
          <img src={googleIconImg} alt="Logo do Google" />

          <strong>Crie sua sala com o Google</strong>
        </Button>

        <div className="separator">Ou entre em uma sala</div>

        <form>
          <input type="text" placeholder="Digite o código da sala" />

          <Button type="submit">Entrar na sala</Button>
        </form>
      </SC.MainContent>
    </HomeLayout>
  );
};

export { Home };
