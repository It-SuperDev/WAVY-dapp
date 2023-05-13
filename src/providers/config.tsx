import useLocalStorage from 'hooks/useLocalStorage';
import useMediaQuery from '@mui/material/useMediaQuery';

import { ConfigContext, initialState } from 'contexts/config';

type ConfigProviderProps = {
    children: React.ReactNode;
};

const ConfigProvider: React.FC<ConfigProviderProps> = ({ children }) => {
    const isMobile = useMediaQuery('(max-width:767px)');

    const origin = window?.location.origin ?? 'wavy';
    const [config, setConfig] = useLocalStorage(origin, {
        ...initialState
    });

    const changeData = ({ key, data }: { key: string; data: any }) => {
        setConfig((prevState) => ({
            ...prevState,
            [key]: data
        }));
    };

    return <ConfigContext.Provider value={{ ...config, isMobile, changeData }}>{children}</ConfigContext.Provider>;
};

export default ConfigProvider;
