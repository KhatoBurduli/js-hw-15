import React, { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { useWindowSize } from './useWindowSize';
import './App.css';

const App = () => {
    const [theme, setTheme] = useLocalStorage('theme', 'light');
    const { width } = useWindowSize();

    useEffect(() => {
        console.log("Current theme on load:", theme);
        console.log("Window width on load:", width);

        if (width < 768 && theme !== 'light') {
            setTheme('light');
        }
    }, [width, theme, setTheme]);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        console.log("Toggling theme to:", newTheme);
        setTheme(newTheme);
    };

    useEffect(() => {
        const currentTheme = window.localStorage.getItem('theme');
        console.log("Current theme in localStorage after load:", currentTheme);
    }, []);

    return (
        <div className={`App ${theme}`}>
            <header>
                <h1>Theme Toggle App</h1>
                {width >= 768 && (
                    <button onClick={toggleTheme}>Toggle Theme</button>
                )}
            </header>
            <main>
                {/* Your content here */}
            </main>
        </div>
    );
};

export default App;
