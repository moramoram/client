import { useEffect } from "react";

export const useIntersectionObserver = ({
  target,
  onIntersect,
  enabled = true,
}) => {
  useEffect(() => {
    if (!enabled) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => entry.isIntersecting && onIntersect()),
      {
        rootMargin: "0px",
        threshold: 1,
      }
    );

    const el = target?.current;

    if (!el) {
      return;
    }

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, [target, enabled, onIntersect]);
};
