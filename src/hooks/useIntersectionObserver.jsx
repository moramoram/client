import React from "react";

export const useIntersectionObserver = ({
  root,
  target,
  onIntersect,
  enabled = true,
}) => {
  React.useEffect(() => {
    if (!enabled) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => entry.isIntersecting && onIntersect()),
      {
        root: root && root.current,
        rootMargin: "0px",
        threshold: 1.0,
      }
    );

    const el = target && target.current;

    if (!el) {
      return;
    }

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  });
  // [target.current, enabled]
};
