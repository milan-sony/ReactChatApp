import React, { useEffect } from 'react'
import { userChatStore } from '../../store/userChatStore'
import Skeleton from '../Skeleton/Skeleton'
import ChatHeader from '../ChatHeader/ChatHeader';
import MessageInput from '../MessageInput/MessageInput';

function ChatContainer() {
    const { messages, getMessages, isMessagesLoading, selectedUser } = userChatStore()

    useEffect(() => {
        getMessages(selectedUser._id);
    }, [selectedUser._id, getMessages]);

    if (isMessagesLoading) return <Skeleton />

    return (
        <>
            <div className=' flex flex-col w-full'>
                <ChatHeader />

                <div className='h-full'>
                    <p>hi</p>
                </div>

                <MessageInput />

            </div>

        </>
    )
}

export default ChatContainer