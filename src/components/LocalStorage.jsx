import React from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
function LocalStorage() {
    const defaultSettings = {name:'Kamyab Alex'}
    const [appSettings, setAppSettings] = useLocalStorage(
        'app-settings',
        defaultSettings
    );
    return (
        <div>
            <p>Your application's settings:</p>
            <pre>
                <code>{JSON.stringify(appSettings)}</code>
            </pre>
            <button onClick={() => setAppSettings(defaultSettings)}>Set settings</button>
        </div>
    )
}

export default LocalStorage
