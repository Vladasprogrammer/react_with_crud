export const loadFromStorage = (key, defaultValue) => {
    return JSON.parse(localStorage.getItem(key)) || defaultValue;
};

export const saveToStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};
