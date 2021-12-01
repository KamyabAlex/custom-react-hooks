import { useRef,useEffect } from 'react';

const useEventListener = (
  eventType = '',
  listener = () => null,
  target = '',
  options = null
) => {
  const savedListener = useRef();

  useEffect(() => {
    savedListener.current = listener;
  }, [listener]);

  useEffect(() => {
    target = window !== undefined ? window : null
    
    if (!target?.addEventListener) return;

    const eventListener = event => savedListener.current(event);

    target.addEventListener(eventType, eventListener, options);

    return () => {
      target.removeEventListener(eventType, eventListener, options);
    };
  }, [eventType, target, options]);
};

export default useEventListener;