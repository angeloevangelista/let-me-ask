import { Link, useHistory } from 'react-router-dom';
import React, { FormEvent, useCallback, useRef } from 'react';

import logoImg from '../../assets/logo.svg';

import { ERouteMap } from '../../routes';
import { Button } from '../../components/Button';
import { HomeLayout } from '../../layouts/HomeLayout';

import * as SC from './styles';
import { database, DatabaseRefs } from '../../services/firebase';
import { useAuth } from '../../hooks/useAuth';
import { Room } from '../../models/room';

const NewRoom: React.FC = () => {
  const { user } = useAuth();
  const history = useHistory();
  const roomInputRef = useRef<HTMLInputElement>(null);

  const handleCreateRoom = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      const roomName = roomInputRef.current?.value.trim();

      if (!roomName) return;

      const roomRef = database.ref(DatabaseRefs.Rooms);

      const firebaseRoom = await roomRef.push({
        title: roomName,
        authorId: user!.id,
      } as Room);

      history.push(`${ERouteMap.Room}/${firebaseRoom.key}`);
    },
    [history, user],
  );

  return (
    <HomeLayout>
      <SC.MainContent>
        <img src={logoImg} alt="Let me ask" />

        <h2>Criar uma nova sala</h2>

        <form onSubmit={handleCreateRoom}>
          <input ref={roomInputRef} type="text" placeholder="Nome da sala" />

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
