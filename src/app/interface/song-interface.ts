import { SingerInterface } from './singer-interface';

export interface SongInterface {
  id: number;
  name: string;
  url: string;
  ar: SingerInterface[];
  al: { id: number; name: string; picUrl: string };
  dt: number;
}
