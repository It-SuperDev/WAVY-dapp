import Header from '../components/Header';
import Footer from '../components/Footer';

import Wrapper from './Wrapper';

import Container from '@mui/material/Container';

const MainLayout = () => (
    <>
        <Container maxWidth='xl' sx={{ pt: 9 }}>
            <Header />
            <Wrapper />
            <Footer />
        </Container>
    </>
);

export default MainLayout;
