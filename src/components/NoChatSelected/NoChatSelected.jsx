import React from 'react'
import logo from "/assets/images/chatIcon.png"

const NoChatSelected = () => {
    return (
        <div className="flex flex-1 flex-col items-center justify-center p-16 bg-white dark:bg-black">
            <div className="max-w-md text-center space-y-6">
                <div className="flex justify-center gap-4 mb-4">
                    <div className="relative">
                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center animate-bounce">
                            <img src={logo} className='h-12' alt='logo' />
                        </div>
                    </div>
                </div>

                {/* Welcome Text */}
                <h2 className="text-2xl font-extrabold uppercase font-Open-Sans text-custblue">Welcome to chatly!</h2>
                <p className="text-base-content/60 text-black dark:text-white/60">
                    Select a conversation from the sidebar to start chatting
                </p>
            </div>
        </div>
    );
};

export default NoChatSelected;