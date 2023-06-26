import { Song } from "@/types";

import usePlayer from "./UsePlayer";

const useOnPlay = (songs: Song[]) => {
  const player = usePlayer();
};

export default useOnPlay;
