import React, { createContext, useState, ReactNode } from 'react';

interface MoodContextType {
  mood: string;
  changeMood: (mood: string) => void;
}

const defaultContextValue: MoodContextType = {
  mood: 'happy',
  changeMood: () => {},
};

export const MoodContext = createContext<MoodContextType>(defaultContextValue);

export const MoodProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [mood, setMood] = useState('happy');

  const changeMood = (newMood: string) => {
    setMood(newMood);
  };

  return (
    <MoodContext.Provider value={{ mood, changeMood }}>
      {children}
    </MoodContext.Provider>
  );
};