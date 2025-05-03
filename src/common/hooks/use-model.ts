import {useState} from 'react';

// used to handle model state
export const useModal = (initialVisible = false) => {
  const [visible, setVisible] = useState(initialVisible);

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  return {
    visible,
    show,
    hide,
    setVisible, // Optional direct access
  };
};
