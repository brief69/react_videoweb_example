import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// ビデオアップローダーコンポーネント
const VideoUploader: React.FC = () => {
  // ファイルの状態を管理するためのステート
  const [file, setFile] = useState<File | null>(null);
  // ナビゲーションのためのフック
  const navigate = useNavigate();

  // ファイル変更ハンドラ
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // ファイルが選択された場合、ステートを更新
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  // アップロードハンドラ
  const handleUpload = async () => {
    // ファイルが存在する場合、アップロードを実行
    if (file) {
      const formData = new FormData();
      formData.append('video', file);

      try {
        // ビデオをアップロード
        await axios.post('/api/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        // アップロード成功後、ホームページにリダイレクト
        navigate('/'); 
      } catch (error) {
        // アップロードエラーのログ出力
        console.error('ビデオのアップロードエラー', error);
      }
    }
  };

  // ビデオアップローダーコンポーネントのレンダリング
  return (
    <div className="video-uploader">
      <input type="file" accept="video/*" onChange={handleFileChange} />
      {file && (
        // ファイルが選択された場合、アップロードボタンを表示
        <button onClick={handleUpload}>
          アップロード
        </button>
      )}
    </div>
  );
};

// ビデオアップローダーコンポーネントのエクスポート
export default VideoUploader;
