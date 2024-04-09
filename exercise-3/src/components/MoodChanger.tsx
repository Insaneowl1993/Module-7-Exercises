import React, { useContext } from 'react';
import { MoodContext } from './MoodContext';

const MoodChanger = () => {
  const { mood, changeMood } = useContext(MoodContext);

  return (
    <div>
      <h2>Current Mood: {mood}</h2>
      <button onClick={() => changeMood('happy')}>Make Happy</button>
      <button onClick={() => changeMood('ecstatic')}>Make Ecstatic</button>
      <button onClick={() => changeMood('stressed')}>Make Stressed</button>
      <button onClick={() => changeMood('giving up')}>Give Up</button>
    </div>
  );
};

export default MoodChanger;