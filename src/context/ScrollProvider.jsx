import React, { createContext, useContext } from 'react';

const ScrollContext = createContext({
  scrollTo: (target) => {
    const element = typeof target === 'string' ? document.querySelector(target) : target;
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  },
  isInitialized: true,
});

export const useScroll = () => useContext(ScrollContext);

export const ScrollProvider = ({ children }) => {
  const scrollTo = (target) => {
    const element = typeof target === 'string' ? document.querySelector(target) : target;
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ScrollContext.Provider value={{ scrollTo, scrollToElement: scrollTo, isInitialized: true }}>
      {children}
    </ScrollContext.Provider>
  );
};
