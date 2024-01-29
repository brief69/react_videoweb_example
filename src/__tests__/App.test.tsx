import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import App from '../App';

// Appコンポーネントのテストスイートを定義
describe('App Component', () => {
  // デフォルトルートでHomePageコンポーネントがレンダリングされるかテスト
  test('renders HomePage component for default route', () => {
    // MemoryRouterを使用して、テスト環境でルーティングをシミュレート
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    // 'Reel Videos'というテキストがドキュメントに存在するか確認
    expect(screen.getByText(/Reel Videos/i)).toBeInTheDocument();
  });

  // '/upload'ルートでUploadPageコンポーネントがレンダリングされるかテスト
  test('renders UploadPage component for "/upload" route', () => {
    // '/upload'エントリを持つMemoryRouterでAppコンポーネントをレンダリング
    render(
      <MemoryRouter initialEntries={['/upload']}>
        <App />
      </MemoryRouter>
    );
    // 'Reel動画のアップロード'というテキストがドキュメントに存在するか確認
    expect(screen.getByText(/Reel動画のアップロード/i)).toBeInTheDocument();
  });

  // '/profile/:userId'ルートでProfilePageコンポーネントがレンダリングされるかテスト
  test('renders ProfilePage component for "/profile/:userId" route', () => {
    // テスト用のユーザーIDを定義
    const testUserId = '123';
    // '/profile/:userId'エントリを持つMemoryRouterでAppコンポーネントをレンダリング
    render(
      <MemoryRouter initialEntries={[`/profile/${testUserId}`]}>
        <App />
      </MemoryRouter>
    );
    // 'Profile'というテキストがドキュメントに存在するか確認
    expect(screen.getByText(/Profile/i)).toBeInTheDocument();
  });

  // 必要に応じてここに追加のテストを記述
});
