import React from 'react'
import { userChatStore } from '../../store/userChatStore'
import Sidebar from '../../components/Sidebar/Sidebar'
import NoChatSelected from '../../components/NoChatSelected/NoChatSelected'
import ChatContainer from '../../components/ChatContainer/ChatContainer'


function Homepage() {
    const { selectedUser } = userChatStore()

    return (
        <>
            <div className='bg-custblue h-screen'>
                <div className='flex items-center justify-center pt-36'>
                    <div className='bg-white rounded-lg shadow-xl w-full max-w-6xl'>
                        <div className='flex min-h-[500px] max-h-[500px] rounded-lg overflow-hidden'>
                            <Sidebar />
                            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage
