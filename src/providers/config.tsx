import useLocalStorage from 'hooks/useLocalStorage';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { ConfigContext, initialState } from 'contexts/config';

type ConfigProviderProps = {
    children: React.ReactNode;
};

const ConfigProvider: React.FC<ConfigProviderProps> = ({ children }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
