import React from 'react';

// VideoPlayerPropsインターフェースの定義
// videoUrl: 動画のURLを文字列で受け取る
interface VideoPlayerProps {
  videoUrl: string;
}

// VideoPlayerコンポーネントの定義
// videoUrlプロップを受け取り、ビデオプレイヤーを表示する
const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => {
  // ビデオプレイヤーのJSXを返す
  return (
    <div className="video-player">
      <video width="100%" height="auto" controls>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

// VideoPlayerコンポーネントをエクスポート
export default VideoPlayer;
