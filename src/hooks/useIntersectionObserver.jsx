import { useEffect } from "react";

export const useIntersectionObserver = ({ target, onIntersect, enabled }) => {
  useEffect(() => {
    const el = target?.current;

    if (!enabled || !el) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => entry.isIntersecting && onIntersect()),
      {
        threshold: 1.0,
      }
    );

    observer.observe(el);
    return () => {
      observer.unobserve(el);
    };
  }, [target, enabled, onIntersect]);
};
