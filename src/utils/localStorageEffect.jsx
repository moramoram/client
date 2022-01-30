export const useLocalStorage = (key, { setSelf, onSet }) => {
  const savedValue = localStorage.getItem(key);
  if (savedValue !== null) {
    setSelf(JSON.parse(savedValue));
  }

  onSet((newValue) => {
    if (newValue) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(newValue));
    }
  });
};
