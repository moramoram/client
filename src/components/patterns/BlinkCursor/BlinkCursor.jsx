import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";

const BlinkCursor = ({ blinkSpeed = 500, active = true, ...props }) => {
  const [blinking, setBlinking] = useState({
    style: { ...props.style },
  });

  const makeBlink = useCallback(() => {
    if (active) {
      const { visibility } = blinking.style || blinking;
      const toggleBlink = visibility === "visible" ? "hidden" : "visible";
      const blink = { visibility: toggleBlink };

      setTimeout(() => {
        setBlinking({ style: { ...props.style, ...blink } });
      }, blinkSpeed);
    }
  }, [blinking, blinkSpeed, active, props.style]);

  useEffect(() => {
    makeBlink();
  }, [makeBlink, active]);

  return (
    <span {...props} {...blinking}>
      |
    </span>
  );
};

BlinkCursor.propTypes = {
  blinkSpeed: PropTypes.number,
  active: PropTypes.bool,
  style: PropTypes.objectOf(PropTypes.string),
};

BlinkCursor.defaultProps = {
  blinkSpeed: 500,
  active: true,
  style: { visibility: "visible" },
};

export default BlinkCursor;
