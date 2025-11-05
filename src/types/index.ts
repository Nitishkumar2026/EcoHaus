export interface Record {
  id: string;
  title: string;
  artist: string;
  genre: string;
  price: number;
  coverUrl: string;
  year: number;
  label: string;
  featured?: boolean;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  artists: string[];
  posterUrl: string;
  venue: string;
  price: number;
}
