import React, { useEffect } from 'react'
import { userChatStore } from '../../store/userChatStore'
import Skeleton from '../Skeleton/Skeleton'
import ChatHeader from '../ChatHeader/ChatHeader';
import MessageInput from '../MessageInput/MessageInput';
import { userAuthStore } from '../../store/userAuthStore';
import defaultProfilePicture from "./avatar.png";

function ChatContainer() {
    const { messages, getMessages, isMessagesLoading, selectedUser } = userChatStore()

    const { authUser } = userAuthStore()

    useEffect(() => {
        getMessages(selectedUser._id);
    }, [selectedUser._id, getMessages]);

    if (isMessagesLoading) {
        return (
            <div className=' flex flex-col w-full overflow-auto'>
                <ChatHeader />
                <Skeleton />
                <MessageInput />
            </div>
        )
    }

    return (
        <>
            <div className=' flex flex-col w-full overflow-auto'>
                <ChatHeader />

                {/* message container */}
                <div className='flex-1 overflow-y-auto p-4 space-y-4'>
                    {
                        messages.map((message) => (
                            <div key={message._id} className={`chat ${message.senderId === authUser._id ? "chat-end" : "chat-start"}`}>
                                <div className='chat-image avatar'>
                                    <div className='size-10 rounded-full border'>
                                        <img src={message.senderId === authUser._id ? authUser.profilePicture || defaultProfilePicture : selectedUser.profilePicture || defaultProfilePicture} alt="Profile Picture" />
                                    </div>
                                </div>
                                <div className="chat-header">
                                    <time className="text-xs opacity-50">{
                                        message.createdAt
                                    }</time>
                                </div>
                                <div className='chat-bubble flex'>
                                    {
                                        message.image && (
                                            <image src={message.image} alt="attachment" className='rounded-md mb-2'
                                            />
                                        )
                                    }
                                    {
                                        message.text && <p>{message.text}</p>
                                    }
                                </div>
                            </div>

                        ))
                    }
                </div>
                <MessageInput />
            </div>

        </>
    )
}

export default ChatContainer