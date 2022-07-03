import React from 'react';

import { styled } from '@mui/material/styles';
import { Video } from '../types';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { css } from '@emotion/css';
import ListItem from '@mui/material/ListItem';

export const VideoItem: React.FC<{
  video: Video;
  onVideoSelect: (arg: Video) => void;
}> = ({ video, onVideoSelect }) => {
  return (
    <ListItem
      onClick={() => {
        onVideoSelect(video);
      }}
      className={css`
        cursor: pointer;
      `}
    >
      <Card>
        <CardMedia
          sx={{ height: 160 }}
          image={`https://images.weserv.nl/?url=${video.pic}`}
        />
        <CardContent sx={{ maxHeight: 80, textOverflow: 'ellipsis' }}>
          <Typography variant="subtitle1" gutterBottom component="div">
            {video.title}
          </Typography>
          <Content variant="body2" color="text.secondary">
            {video.description}
          </Content>
        </CardContent>
      </Card>
    </ListItem>
  );
};
const Content = styled(Typography)`
  overflow: hidden;
`;
