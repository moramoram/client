import React, { useCallback, useEffect, useState, useReducer } from "react";
import PropType from "prop-types";

const AutoTyping = ({
  arrayRef,
  active,
  writeInterval,
  deleteInterval,
  delayToWrite,
  delayToDelete,
  ...props
}) => {
  const [autoTyper, setAutoTyper] = useState("");
  const [whichFuncStart, setWhichFuncStart] = useState(true);

  const countReducer = (state) => (state + 1) % arrayRef.length;
  const [count, dispatchCount] = useReducer(countReducer, 0);
  const [textRef, setTextRef] = useState(arrayRef[0]);

  const letterWriter = useCallback(() => {
    const text = textRef.slice(0, autoTyper.length + 1);
    setAutoTyper(text);
  }, [autoTyper, textRef]);

  const letterRemover = useCallback(() => {
    const text = autoTyper.slice(0, -1);
    setAutoTyper(text);
  }, [autoTyper]);

  const writer = useCallback(() => {
    setTimeout(() => {
      if (autoTyper.length === textRef.length) {
        setTimeout(() => {
          setWhichFuncStart(true);
        }, delayToDelete);
        return;
      }

      letterWriter();
    }, writeInterval);
  }, [autoTyper, textRef, writeInterval, delayToDelete, letterWriter]);

  const remover = useCallback(() => {
    setTimeout(() => {
      if (autoTyper.length === 0) {
        setTimeout(() => {
          setWhichFuncStart(false);
          dispatchCount();
          setTextRef(arrayRef[count]);
        }, delayToWrite);
        return;
      }
      letterRemover();
    }, deleteInterval);
  }, [autoTyper, delayToWrite, deleteInterval, letterRemover, arrayRef, count]);

  useEffect(() => {
    if (active) {
      if (!whichFuncStart) {
        writer();
      }
      if (whichFuncStart) {
        remover();
      }
    }
  }, [active, whichFuncStart, writer, remover]);

  return <span {...props}>{autoTyper}</span>;
};

AutoTyping.propTypes = {
  arrayRef: PropType.array,
  active: PropType.bool,
  writeInterval: PropType.number,
  deleteInterval: PropType.number,
  delayToWrite: PropType.number,
  delayToDelete: PropType.number,
};

AutoTyping.defaultProps = {
  arrayRef: ["Type", "Any", "Text"],
  active: true,
  writeInterval: 50,
  deleteInterval: 50,
  delayToWrite: 1000,
  delayToDelete: 1500,
};

export default AutoTyping;
