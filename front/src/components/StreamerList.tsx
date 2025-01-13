import React from 'react';

interface Streamer {
    id: number;
    name: string;
    game: string;
    viewers: number;
}

const streamers: Streamer[] = [
    { id: 1, name: "스트리머1", game: "리그 오브 레전드", viewers: 5000 },
    { id: 2, name: "스트리머2", game: "리그 오브 레전드", viewers: 3000 },
    { id: 3, name: "스트리머3", game: "리그 오브 레전드", viewers: 2000 },
    // Add more streamers as needed
];

const StreamerList: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-4">현재 내전 방송 중인 스트리머</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {streamers.map((streamer) => (
                    <div key={streamer.id} className="bg-white rounded-lg shadow-md p-4">
                        <h3 className="text-lg font-semibold">{streamer.name}</h3>
                        <p className="text-gray-600">{streamer.game}</p>
                        <p className="text-sm text-gray-500">{streamer.viewers} 시청자</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StreamerList;

