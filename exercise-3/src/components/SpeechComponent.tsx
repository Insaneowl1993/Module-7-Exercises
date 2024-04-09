import React, { useState } from 'react';
import { useSpeechSynthesis } from './useSpeech';

const SpeechComponent = () => {
  const [text, setText] = useState('');
  const { speak, cancel, speaking, voices } = useSpeechSynthesis('Google US English');

  return (
    <div>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Enter text to speak" 
      />
      <button onClick={() => speak(text)}>Speak</button>
      <button onClick={cancel} disabled={!speaking}>Stop</button>
    </div>
  );
};

export default SpeechComponent;