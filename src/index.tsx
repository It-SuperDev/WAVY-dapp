import App from './App';

import { Root, ConfigProvider, APIProvider } from './providers';

Root.render(
    <ConfigProvider>
        <APIProvider>
            <App />
        </APIProvider>
    </ConfigProvider>
);
