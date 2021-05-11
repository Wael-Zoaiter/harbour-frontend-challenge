import { RefObject, useState, useEffect, useCallback, useRef } from 'react'

interface Size {
  width: number
  height: number
};

function useElementSize<T extends HTMLElement = HTMLDivElement>(): [RefObject<T>, Size] {
  const ref = useRef<T>(null);
  const [size, setSize] = useState<Size>({
    width: 0,
    height: 0,
  });

  // Prevent too many rendering using useCallback
  const updateSize = useCallback(() => {
    const node = ref?.current;
    if (node) {
      setSize({
        width: node.offsetWidth || 0,
        height: node.offsetHeight || 0,
      });
    }
  }, [ref]);

  // Initial size on mount
  useEffect(() => {
    updateSize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, size];
}

export default useElementSize;
