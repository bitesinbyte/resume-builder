import { useEffect } from 'react';

const useKeyboardShortcut = (key: any, ctrlKey: any, callback: any) => {
  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key.toLowerCase() === key.toLowerCase() && event.ctrlKey === ctrlKey) {
        event.preventDefault();
        callback();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [key, ctrlKey, callback]);
};



export default useKeyboardShortcut;