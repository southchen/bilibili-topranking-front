import { useQuery } from 'react-query';
import Axios from 'axios';

const fetchVideos = async ({ rid, day }: { rid?: number; day?: number }) => {
  if (!rid || !day) return [];
  try {
    const res = await Axios.get('http://localhost:7777/', {
      params: { rid, day },
    });
    const videos = res.data || [];
    console.log('fetching');
    return videos;
  } catch (e) {
    console.log(e);
  }
};

export const useQueryVideos = ({
  rid,
  day,
}: {
  rid?: number;
  day?: number;
}) => {
  return useQuery([rid, day], () => fetchVideos({ rid, day }));
};
