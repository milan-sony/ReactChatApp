import React, { useEffect, useRef } from 'react'
import { userChatStore } from '../../store/userChatStore'
import Skeleton from '../Skeleton/Skeleton'
import ChatHeader from '../ChatHeader/ChatHeader';
import MessageInput from '../MessageInput/MessageInput';
import { userAuthStore } from '../../store/userAuthStore';
import defaultProfilePicture from "./avatar.png";
import { formatMessageTime } from '../../lib/utils';

function ChatContainer() {
    const { messages, getMessages, isMessagesLoading, selectedUser, subscribeToMessages, unSubscribeFromMessages } = userChatStore()

    const { authUser } = userAuthStore()

    const messageEndRef = useRef(null)

    useEffect(() => {
        getMessages(selectedUser._id);
        subscribeToMessages()

        return () => unSubscribeFromMessages()

    }, [selectedUser._id, getMessages, subscribeToMessages, unSubscribeFromMessages]);

    // scroll to the new message automatically when new message come
    useEffect(() => {
        if (messageEndRef.current && messages) {
            messageEndRef.current.scrollIntoView({
                behavior: "smooth"
            })
        }
    }, [messages])

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
            <div className=' flex flex-col w-full overflow-auto bg-white dark:bg-black'>
                <ChatHeader />

                {/* message container */}
                <div className='flex-1 overflow-y-auto p-4 space-y-4'>
                    {
                        messages.map((message) => (
                            <div key={message._id} className={`chat ${message.senderId === authUser._id ? "chat-end" : "chat-start"}`}
                                ref={messageEndRef}
                            >
                                <div className='chat-image avatar'>
                                    <div className='size-10 rounded-full border'>
                                        <img src={message.senderId === authUser._id ? authUser.profilePicture || defaultProfilePicture : selectedUser.profilePicture || defaultProfilePicture} alt="Profile Picture" />
                                    </div>
                                </div>
                                <div className="chat-header">
                                    <time className="text-xs opacity-50">
                                        {
                                            formatMessageTime(message.createdAt)
                                        }</time>
                                </div>
                                <div className='chat-bubble flex flex-col'>
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