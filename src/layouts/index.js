import Header from '../components/Header';

import Wrapper from './Wrapper';

import Container from '@mui/material/Container';

const MainLayout = () => (
    <>
        <Container maxWidth='xl' sx={{ pt: 9 }}>
            <Header />
            <Wrapper />
        </Container>
    </>
);

export default MainLayout;
