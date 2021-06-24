import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';

import { ERouteMap } from '../../routes';
import { Button } from '../../components/Button';
import { HomeLayout } from '../../layouts/HomeLayout';

import * as SC from './styles';

const NewRoom: React.FC = () => {
  return (
    <HomeLayout>
      <SC.MainContent>
        <img src={logoImg} alt="Let me ask" />

        <h2>Criar uma nova sala</h2>

        <form>
          <input type="text" placeholder="Nome da sala" />

          <Button type="submit">Criar sala</Button>
        </form>

        <p>
          Quer entrar em uma sala existente?
          <Link to={ERouteMap.Home}>Clique aqui</Link>
        </p>
      </SC.MainContent>
    </HomeLayout>
  );
};

export { NewRoom };
