export interface IFilm {
  id: number;
  name: string;
  preview?: string;
  genre: string;
  year: string | number;
  duration?: string | number;
  description?: string;
  rating?: string | number;
}
