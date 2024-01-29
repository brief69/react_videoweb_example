import React from 'react';
import VideoUploader from '../components/VideoUploader';

const UploadPage: React.FC = () => {
  return (
    <div className="upload-page">
      <h1>Reel動画のアップロード</h1>
      <VideoUploader />
    </div>
  );
};

export default UploadPage;
