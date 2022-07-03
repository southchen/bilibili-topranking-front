import React from 'react';

import { SearchArea } from './components/SearchArea';
import { Video } from './types';
import { QueryClient, QueryClientProvider } from 'react-query';

import { VideoDisplay } from './components/VideoDisplay';
import CircularProgress from '@mui/material/CircularProgress';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  const [data, setData] = React.useState<Video[]>();
  const [selectedVideo, setSelectedVideo] = React.useState<Video>();
  const [loading, setLoading] = React.useState(false);
  console.log(data);
  console.log({ loading });
  return (
    <QueryClientProvider client={queryClient}>
      <SearchArea setData={setData} setLoading={setLoading} />
      {!loading ? (
        <VideoDisplay
          videos={data}
          onVideoSelect={setSelectedVideo}
          video={selectedVideo}
        />
      ) : (
        <CircularProgress />
      )}
    </QueryClientProvider>
  );
}

export default App;
