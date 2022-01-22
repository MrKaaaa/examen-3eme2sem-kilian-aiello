import {Tag} from "./tag";
import {Author} from "./author";

export interface Note
{
  noteId: number;
  title: string;
  description: string;
  idTag: number;
  tag: Tag;
  idAuthor: number;
  author: Author;

}
