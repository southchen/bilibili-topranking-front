import React from 'react';

import { styled } from '@mui/material/styles';

import { Video } from '../types';
import { VideoList } from './VideoList';
import { Grid, Paper } from '@mui/material';
import { VideoPlayer } from './VideoPlayer';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const VideoDisplay: React.FC<{
  videos?: Video[];
  video?: Video;
  onVideoSelect: (arg: Video) => void;
}> = ({ video, videos, onVideoSelect }) => {
  console.log({ videos });
  if (!videos) return null;
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <Item>
            <VideoPlayer video={video} />
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <VideoList videos={videos} onVideoSelect={onVideoSelect} />
          </Item>
        </Grid>
      </Grid>
    </div>
  );
};
