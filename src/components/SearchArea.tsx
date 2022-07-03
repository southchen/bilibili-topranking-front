import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

import { styled } from '@mui/material/styles';
import { RangeSelector } from './RangeSelector';
import { SectionSelector } from './SectionSelector';
import { Video } from '../types';
import { useQueryVideos } from '../apis';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { css } from '@emotion/css';

const Container = styled(Box)`
  padding: 20px;
`;
const Item = styled(Paper)`
  padding: 20px;
`;

export const SearchArea: React.FC<{
  setData: (val?: Video[]) => void;
  setLoading: (val: boolean) => void;
}> = ({ setData, setLoading }) => {
  const [rangeId, setRangeId] = React.useState<number>(7);
  const [sectionId, setSectionId] = React.useState<number>(1);
  const { data, isLoading, isRefetching } = useQueryVideos({
    rid: sectionId,
    day: rangeId,
  });

  const [isExpand, setIsExpand] = React.useState(true);
  React.useEffect(() => {
    // console.log(data);
    setData(data);
  }, [data?.[0].aid]);

  React.useEffect(() => {
    console.log(isLoading, isRefetching);
    const loading = isLoading || isRefetching;
    console.log(loading);
    setLoading(loading);
  }, [isLoading, isRefetching]);

  return (
    <Container>
      <Typography variant="h4" component={'span'}>
        Select section and time range
      </Typography>
      <span
        className={css`
          cursor: pointer;
        `}
        onClick={() => {
          setIsExpand((state) => !state);
        }}
      >
        {isExpand ? <ExpandMoreIcon /> : <ExpandLessIcon />}
      </span>
      {isExpand ? (
        <div>
          <Stack>
            <Item>
              <RangeSelector rangeId={rangeId} setRangeId={setRangeId} />
            </Item>
            <Item>
              <SectionSelector
                sectionId={sectionId}
                setSectionId={setSectionId}
              />
            </Item>
          </Stack>
        </div>
      ) : null}
    </Container>
  );
};
