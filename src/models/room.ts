import { Question } from "./question";

type Room = {
  id: string;
  title: string;
  authorId: string;
  questions: Question[];
};

export type { Room };
