import React from 'react';
import Banner from '../components/Banner';
import StreamerList from '../components/StreamerList';

const Home: React.FC = () => {
    return (
        <main>
            <Banner />
            <StreamerList />
        </main>
    );
}

export default Home;

