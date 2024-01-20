// AdvertisementSidebar.js
import React from 'react';

const AdvertisementSidebar = () => {
    return (
        <aside className="fixed right-0 top-0 h-full w-56 bg-gray-100 border-l border-gray-300">
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-700">Advertisements</h2>
                <div className="mt-4">
                    {/* Placeholder for Advertisement Content */}
                    <div className="mb-4 p-4 bg-white rounded-lg shadow-md">
                        <p className="text-sm text-gray-600">Your Ad Here</p>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default AdvertisementSidebar;
