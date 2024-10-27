import React from 'react';

const ProfileMenu = ({ visible }) => {
    if (!visible) {
        return null;
    }

    return (
        <div className="bg-white w-100 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex rounded-3xl">
            <div className="flex flex-col gap-4">
            <div className='px-3 font-semibold text-center text-cyan-600 hover:underline'>
                    CERTIFACATION
                </div>
                <div className='px-3 font-semibold text-center text-cyan-600 hover:underline'>
                    My Course
                </div>
                <div className='px-3 font-semibold text-center text-cyan-600 hover:underline'>
                    Purchase History
                </div>
                <div className='px-3 font-semibold text-center text-cyan-600 hover:underline'>
                    ORAGANIZER
                </div>
                <div className='px-3 font-semibold text-center text-cyan-600 hover:underline'>
                    Logout
                </div>
            </div>
        </div>
    );
};

export default ProfileMenu;
