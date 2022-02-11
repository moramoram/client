import { useEffect } from "react";

const useSlider = (ref) => {
  const slider = ref?.current;
  let isDown = false;
  let startX;
  let scrollLeft;

  const onMouseDown = (e) => {
    isDown = true;
    startX = e.pageX;
    scrollLeft = slider.scrollLeft;
  };

  const onTouchDown = (e) => {
    startX = e.targetTouches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  };

  const onDown = () => (isDown = false);

  const onTouchMove = (e) => {
    const x = e.targetTouches[0].pageX - slider.offsetLeft;
    const walk = (x - startX) * 1;
    scrollingLeft(scrollLeft - walk);
  };

  const onMouseMove = (e) => {
    if (!isDown) {
      return;
    }

    const x = e.pageX - slider.offsetLeft;
    const walk = x - startX;
    scrollingLeft(scrollLeft - walk);
  };

  const onWheel = (e) => {
    e.preventDefault();
    scrollingLeft(slider.scrollLeft + e.deltaY);
  };

  const scrollingLeft = (left) => (slider.scrollLeft = left);

  useEffect(() => {
    if (slider) {
      slider.addEventListener("touchstart", onTouchDown);
      slider.addEventListener("touchmove", onTouchMove);
      slider.addEventListener("mousedown", onMouseDown);
      slider.addEventListener("mousemove", onMouseMove);
      slider.addEventListener("mouseleave", onDown);
      slider.addEventListener("mouseup", onDown);
      slider.addEventListener("wheel", onWheel, { passive: false });
    }
    return;
  });
  return;
};

export default useSlider;
