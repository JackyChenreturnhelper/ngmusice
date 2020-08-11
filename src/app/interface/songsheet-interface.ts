
import { SongInterface } from './song-interface';

export interface SongSheetInterface {
  id: number;
  name: string;
  picUrl: string;
  playCount: number;
  tracks: SongInterface[];
}
