"use client";

import useGetSongById from "@/hooks/useGetSongById";
import usePlayer from "@/hooks/UsePlayer";
import useLoadSongUrl from "@/hooks/useLoadSongUrl";

const Player = () => {
  const player = usePlayer();
  const { song } = useGetSongById(player.activeId);

  const songUrl = useLoadSongUrl(song!);

  if (!song || !songUrl || !player.activeId) {
    return null;
  }

  return (
    <div
      className="
        fixed 
        bottom-0 
        bg-black 
        w-full 
        py-2 
        h-[80px] 
        px-4
      "
    ></div>
  );
};

export default Player;
