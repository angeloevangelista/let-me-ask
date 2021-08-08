import { Author } from "./author";

type Question = {
  id?: string;
  content: string;
  author: Author;
  isHighlighted: boolean;
  isAnswered: boolean;
};

export type { Question };
