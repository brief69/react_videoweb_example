import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VideoPlayer from './VideoPlayer';

// ProfilePropsインターフェースの定義: userIdを文字列で受け取る
interface ProfileProps {
  userId: string;
}

// Videoインターフェースの定義: id, title, urlを持つ
interface Video {
  id: string;
  title: string;
  url: string;
}

// Profileコンポーネントの定義: userIdをプロップとして受け取る
const Profile: React.FC<ProfileProps> = ({ userId }) => {
  // ビデオの配列を保持するためのステート
  const [videos, setVideos] = useState<Video[]>([]);
  // ローディング状態を管理するためのステート
  const [loading, setLoading] = useState<boolean>(true);

  // コンポーネントのマウント時にビデオをフェッチするための副作用
  useEffect(() => {
    // ビデオを非同期でフェッチする関数
    const fetchVideos = async () => {
      try {
        // ユーザーIDに基づいてビデオデータを取得
        const response = await axios.get(`/api/users/${userId}/videos`);
        // 取得したビデオデータをステートにセット
        setVideos(response.data);
        // ローディング状態を解除
        setLoading(false);
      } catch (error) {
        // エラーが発生した場合、コンソールにエラーを出力
        console.error('Error fetching videos', error);
        // ローディング状態を解除
        setLoading(false);
      }
    };

    // ビデオのフェッチ関数を実行
    fetchVideos();
  }, [userId]); // userIdが変更された場合に副作用を再実行

  // ローディング中の場合、ローディングテキストを表示
  if (loading) {
    return <div>Loading...</div>;
  }

  // ローディングが完了したら、ビデオリストまたはビデオがない場合のメッセージを表示
  return (
    <div className="profile">
      <h2>User Videos</h2>
      {videos.length > 0 ? (
        <div className="video-list">
          {videos.map((video) => (
            // 各ビデオ項目を表示
            <div key={video.id} className="video-item">
              <h3>{video.title}</h3>
              <VideoPlayer videoUrl={video.url} />
            </div>
          ))}
        </div>
      ) : (
        // ビデオがない場合のメッセージを表示
        <p>No videos found.</p>
      )}
    </div>
  );
};

export default Profile;
