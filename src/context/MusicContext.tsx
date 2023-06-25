import {ChangeEvent, createContext, MutableRefObject} from 'react';
import {IMusicFull} from "../types/music.interface";

interface IMusicContext {
  myMusic: IMusicFull[],
  foundMusic: IMusicFull[],
  isSuccess: boolean
  isSuccessFoundMusic: boolean
  setCurrentTime: (currentTime: number) => void
  setCurrentAudio: (currentAudio: number | ((prev: number) => number)) => void;
  setSelectedMusicId: (selectedMusicId: string) => void
  setOpenEdit: (openEdit: boolean) => void
  setOpenUpload: (openUpload: boolean) => void
  setDuration: (duration: number) => void
  setOpenRepost: (openRepost: boolean) => void
  setOpenPlaylistCE: ( openPlaylist: boolean) => void
  setIsPlaying: (isPlaying: boolean) => void
  audioRef: MutableRefObject<HTMLAudioElement | null>;
  progressBarRef: MutableRefObject<HTMLInputElement | null>
  selectedMusicId: string | null;
  openEdit: boolean;
  openPlaylist: boolean
  openUpload: boolean;
  openRepost: boolean;
  value: string;
  setValue: (value: string) => void
  currentAudio: number;
  duration: number;
  currentTime: number;
  isPlaying: boolean;
  onClickCloseEdit: () => void;
  handleProgressBarChange: (e: ChangeEvent<HTMLInputElement>) => void
  onClickEdit: (musicId: string) => void;
  onClickCloseUpload: () => void;
  pauseAudio: () => Promise<void>;
  playAudio: () => Promise<void>;
  status?: "error" | "success" | "loading"
}

const MusicContext = createContext<IMusicContext | undefined>(undefined);

export default MusicContext;