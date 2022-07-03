import React from 'react';

import { Video } from '../types';
import { css } from '@emotion/css';
import Typography from '@mui/material/Typography';

export const VideoPlayer: React.FC<{ video?: Video }> = ({ video }) => {
  if (!video)
    return <Typography variant="body2">Pick A Video To View 👉</Typography>;
  return (
    <div
      className={css`
        height: 600px;
      `}
    >
      <iframe
        height={400}
        width={600}
        src={`//player.bilibili.com/player.html?aid=${video.aid}&bvid=${video.bvid}`}
        scrolling="no"
        frameBorder="no"
        // allowFullScreen={true}
      />
      <Typography variant="h4">{video.title}</Typography>
      <Typography variant="body1">{video.description}</Typography>
    </div>
  );
};
