import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VideoPlayer from '../components/VideoPlayer';

interface Video {
  id: string;
  title: string;
  url: string;
}

const HomePage: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('/api/videos');
        setVideos(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching videos', error);
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home-page">
      <h1>Reel Videos</h1>
      <div className="video-list">
        {videos.length > 0 ? (
          videos.map((video) => (
            <div key={video.id} className="video-item">
              <h3>{video.title}</h3>
              <VideoPlayer videoUrl={video.url} />
            </div>
          ))
        ) : (
          <p>No videos found.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
