import React from 'react';

const Banner: React.FC = () => {
    return (
        <div className="bg-blue-600 text-white py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-4">스트리머 내전 통합 플랫폼</h1>
                <p className="text-xl">시청자 관리부터 내전 밸런싱까지, 모든 것을 한 곳에서</p>
            </div>
        </div>
    );
};

export default Banner;

