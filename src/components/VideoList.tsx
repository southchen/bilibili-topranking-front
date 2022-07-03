import React from 'react';

import { Video } from '../types';
import { VideoItem } from './VideoItem';

export const VideoList: React.FC<{
  videos: Video[];
  onVideoSelect: (arg: Video) => void;
}> = ({ videos, onVideoSelect }) => {
  return (
    <div>
      {videos.length
        ? videos.map((v) => (
            <VideoItem key={v.aid} video={v} onVideoSelect={onVideoSelect} />
          ))
        : null}
    </div>
  );
};
