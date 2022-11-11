export type BookEntity = {
  id: number;
  name: string;
  author: string;
  publisher: string;
  genre: string;
  year: number;
  status?: boolean;
};

export type Book = Omit<BookEntity, "id">;
