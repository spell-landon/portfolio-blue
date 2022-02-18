import { useState, useEffect } from 'react';

function useScrollPos() {
  const [scrollPos, setScrollPos] = useState({
    y: 0,
  });
  console.log(window.pageYOffset);
  console.log(scrollPos);

  function handleScroll(event) {
    setScrollPos({
      y: event.pageYOffset,
    });
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollPos;
}

export default useScrollPos;
