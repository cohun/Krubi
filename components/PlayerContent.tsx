'use client';

import { Song } from '@/types';
import MediaItem from './MediaItem';
import LikeButton from './LikeButton';
import { BsPauseFill, BsPlayFill } from 'react-icons/bs';
import { AiFillStepBackward, AiFillStepForward } from 'react-icons/ai';
import { HiSpeakerWave, HiSpeakerXMark } from 'react-icons/hi2';
import Slider from './Slider';

interface PlayerContentProps {
  song: Song;
  songUrl: string;
}

const PlayerContent: React.FC<PlayerContentProps> = ({ song, songUrl }) => {
  const Icon = true ? BsPauseFill : BsPlayFill;
  const VolumeIcon = true ? HiSpeakerXMark : HiSpeakerWave;
  return (
    <div className="grid h-full grid-cols-2 md:grid-cols-3">
      <div className="flex justify-start w-full">
        <div className="flex items-center gap-x-4">
          <MediaItem data={song} />
          <LikeButton songId={song.id} />
        </div>
      </div>
      <div className="flex items-center justify-end w-full col-auto md:hidden">
        <div
          className="flex items-center justify-center w-10 h-10 p-1 bg-white rounded-full cursor-pointers "
          onClick={() => {}}
        >
          <Icon size={30} className="text-black" />
        </div>
      </div>

      <div className="items-center justify-center hidden w-full h-full md:flex max-w-[722px] gap-x-6">
        <AiFillStepBackward
          size={30}
          className="transition cursor-pointer text-neutral-400 hover:text-white "
          onClick={() => {}}
        />
        <div
          className="flex items-center justify-center w-10 h-10 p-1 bg-white rounded-full cursor-pointers "
          onClick={() => {}}
        >
          <Icon size={30} className="text-black" />
        </div>
        <AiFillStepForward
          size={30}
          className="transition cursor-pointer text-neutral-400 hover:text-white "
          onClick={() => {}}
        />
      </div>
      <div className="justify-end hidden w-full pr-2 md:flex">
        <div className="flex items-center gap-x-2 w-[120px]">
          <VolumeIcon className="cursor-pointer" size={34} onClick={() => {}} />
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default PlayerContent;
