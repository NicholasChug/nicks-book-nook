import React,{Fragment} from 'react';
import Layout from '../components/Layouts';
import Footer from '../components/Footer';

const Home = () => (
    <Fragment>
        <Layout>
            <h1>Home</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar convallis lorem non semper. Proin pulvinar lacus a dignissim lacinia. Morbi quis pharetra felis. Quisque id tortor orci. Donec pellentesque mauris ante, nec commodo ligula rutrum in. Suspendisse potenti. Duis sem dui, auctor et rutrum non, efficitur a lectus. Nullam tincidunt sit amet nisl condimentum dapibus.</p>
        </Layout>
        <Footer />
    </Fragment>
);

export default Home;