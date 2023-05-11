import { useEffect } from 'react';
import useConfig from 'hooks/useConfig';
import { useNavigate } from 'react-router-dom';

const Auth = ({ children }: any) => {
    const navigate = useNavigate();
    const data = useConfig();

    useEffect(() => {
        if (!data.connect) navigate('/');
    }, [data, navigate]);

    return children;
};

export default Auth;
