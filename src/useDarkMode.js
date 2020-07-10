import { useEffect, useState } from 'react';
import localForage from 'localforage';

export const useDarkMode = () => {
    const [darkState, setDarkState] = useState(false);

    const themeToggler = () => {
        localForage.setItem('darkMode', !darkState)
        setDarkState(!darkState);
    };

    useEffect(() => {
        async function fetchMode() {
            const savedTheme = await localForage.getItem('darkMode');
            setDarkState(savedTheme);
        }
        fetchMode();
    }, []);

    return [darkState, themeToggler]
};