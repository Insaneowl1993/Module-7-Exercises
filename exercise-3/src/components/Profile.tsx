import React from 'react';
import { useTheme } from './ThemeProvider';

const Profile = ({ user }) => {
  const { theme } = useTheme();
  const bgColor = theme === 'light' ? '#f4f4f4' : '#222';
  const textColor = theme === 'light' ? '#000' : '#fff';

  return (
    <div className="profile" style={{ backgroundColor: bgColor, color: textColor }}>
      <img src={user.avatar} alt="User Avatar" />
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
    </div>
  );
};

export default Profile;