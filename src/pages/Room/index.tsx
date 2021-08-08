import React, { useCallback, useEffect, useRef } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import { Button } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';
import { useAuth } from '../../hooks/useAuth';
import { Question } from '../../models/question';
import { Room as RoomModel } from '../../models/room';
import { database, DatabaseRefs } from '../../services/firebase';

import * as SC from './styles';

type RouteParams = {
  room_id: string;
};

type FirebaseRoom = Omit<RoomModel, 'questions'> & {
  questions?: {
    [key: string]: Question;
  };
};

const Room: React.FC = () => {
  const { user } = useAuth();
  const [room, setRoom] = useState<RoomModel | null>(null);
  const { room_id: roomId } = useParams<RouteParams>();
  const questionContentRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    const roomRef = database.ref(`${DatabaseRefs.Rooms}/${roomId}`);

    roomRef.on('value', (room) => {
      const firebaseRoom = room.val() as FirebaseRoom;

      if (!firebaseRoom) return alert('Room not found.');

      const storedRoom: RoomModel = {
        ...firebaseRoom,
        questions: Object.entries(firebaseRoom.questions || {}).map(
          ([questionId, question]) => ({ ...question, id: questionId }),
        ),
      };

      setRoom(storedRoom);
    });
  }, [roomId]);

  const handleSendQuestion = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const questionContent = questionContentRef.current?.value;

      if (!questionContent || !questionContent?.trim()) return;

      if (!user) return alert('Only logged users can send questions.');

      const newQuestion: Question = {
        content: questionContent,
        author: {
          name: user.name,
          avatar_url: user.avatar,
        },
        isAnswered: false,
        isHighlighted: false,
      };

      try {
        await database
          .ref(`${DatabaseRefs.Rooms}/${roomId}/${DatabaseRefs.Questions}`)
          .push(newQuestion);

        alert('Question sent.');
        questionContentRef.current!.value = '';
      } catch (error) {
        alert('An error occurred while sending question.');
        console.error(error);
      }
    },
    [roomId, user],
  );

  return (
    <SC.Container>
      <SC.Header>
        <div>
          <img src={logoImg} alt="Let me ask " />
          <RoomCode code={roomId} />
        </div>
      </SC.Header>

      <SC.Main>
        <SC.Title>
          <h1>Sala: {room?.title}</h1>
          {room?.questions.length && (
            <span>{room?.questions.length} pergunta(s)</span>
          )}
        </SC.Title>

        <form onSubmit={handleSendQuestion}>
          <textarea
            ref={questionContentRef}
            placeholder="O que você quer perguntar?"
          />

          <footer>
            {user ? (
              <SC.UserInfo>
                <img src={user.avatar} alt={user.name} />
                <span>{user.name}</span>
              </SC.UserInfo>
            ) : (
              <span>
                Para enviar uma pergunta, <button>faça seu login</button>.
              </span>
            )}

            <Button disabled={!user} type="submit">
              Enviar pergunta
            </Button>
          </footer>
        </form>

        <ul>
          {room?.questions.map((question) => (
            <li key={question.id}>{question.content}</li>
          ))}
        </ul>
      </SC.Main>
    </SC.Container>
  );
};

export default Room;
