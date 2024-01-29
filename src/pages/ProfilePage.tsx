import React from 'react';
import { useParams } from 'react-router-dom';
import Profile from '../components/Profile';

const ProfilePage: React.FC = () => {
  // useParams will retrieve the userId from the URL if it's structured like "/profile/:userId"
  const { userId } = useParams<{ userId: string }>();

  return (
    <div>
      <h1>Profile</h1>
      {userId ? <Profile userId={userId} /> : <p>User ID not found.</p>}
    </div>
  );
};

export default ProfilePage;
