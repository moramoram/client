import React from "react";

export const useIntersectionObserver = ({
  root,
  target,
  onIntersect,
  enabled = true,
}) => {
  React.useEffect(() => {
    const el = target?.current;

    if (!enabled || !el) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => entry.isIntersecting && onIntersect()),
      {
        root: root?.current,
        rootMargin: "0px",
        threshold: 1,
      }
    );

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  });
  // [target.current, enabled]
};
