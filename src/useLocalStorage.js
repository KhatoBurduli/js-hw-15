import { useState } from 'react';

export function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            if (item === null || item === 'undefined') {
                console.log(`No item in localStorage for key "${key}". Setting initial value to "${initialValue}".`);
                return initialValue;
            }
            console.log(`Retrieved item from localStorage for key "${key}":`, item);
            return JSON.parse(item);
        } catch (error) {
            console.error(`Error reading localStorage key "${key}":`, error);
            return initialValue;
        }
    });

    const setValue = value => {
        try {
            setStoredValue(value);
            window.localStorage.setItem(key, JSON.stringify(value));
            console.log(`Set localStorage key "${key}" to value:`, value);
        } catch (error) {
            console.error(`Error setting localStorage key "${key}":`, error);
        }
    };

    return [storedValue, setValue];
}

