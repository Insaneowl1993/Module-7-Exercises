import { useState, useEffect } from 'react';

export function useSpeechSynthesis(voiceURI) {
  const [voices, setVoices] = useState([]);
  const [speaking, setSpeaking] = useState(false);
  const synthesis = window.speechSynthesis;

  // Function to speak text using the selected voice URI
  const speak = (text) => {
    if (speaking || !text) return;

    const utterance = new SpeechSynthesisUtterance(text);
    const selectedVoice = voices.find((voice) => voice.voiceURI === voiceURI);
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    } else {
      console.warn('Selected voice not found, using default voice.');
    }

    // Event listeners for the utterance
    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = (event) => {
      console.error('Speech synthesis error:', event.error);
      setSpeaking(false);
    };

    synthesis.speak(utterance);
  };

  // Function to stop speaking
  const cancel = () => {
    if (speaking) {
      synthesis.cancel();
      setSpeaking(false);
    }
  };

  // Fetch the list of voices when they are loaded
  useEffect(() => {
    const handleVoicesChanged = () => {
      setVoices(synthesis.getVoices());
    };

    synthesis.onvoiceschanged = handleVoicesChanged;
    handleVoicesChanged(); // Call it directly in case voices are already loaded

    // Cleanup
    return () => {
      synthesis.onvoiceschanged = null;
    };
  }, []); // Empty dependency array to run only on mount

  return { speak, cancel, speaking, voices };
}

export default useSpeechSynthesis;