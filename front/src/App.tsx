import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import StreamerList from './components/StreamerList';

const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <main>
                <Banner />
                <StreamerList />
            </main>
        </div>
    );
};

export default App;

