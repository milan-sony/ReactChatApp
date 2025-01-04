import React from 'react'
import { userChatStore } from '../../store/userChatStore';
import { userAuthStore } from '../../store/userAuthStore';
import defaultProfilePicture from "/assets/images/avatar.png"
import { X } from 'lucide-react';


function ChatHeader() {
    const { selectedUser, setSelectedUser } = userChatStore()
    const { onlineUsers } = userAuthStore()

    return (

        <div className="p-2.5 border-b border-base-300">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className="avatar">
                        <div className="size-10 rounded-full relative">
                            <img src={selectedUser.profilePicture || defaultProfilePicture} alt={selectedUser.fullName} />
                        </div>
                    </div>

                    {/* User info */}
                    <div>
                        <h3 className="font-medium capitalize">{selectedUser.fullName}</h3>
                        <p className="text-sm text-base-content/70">
                            {onlineUsers.includes(selectedUser._id) ? "Online" : "Offline"}
                        </p>
                    </div>
                </div>

                {/* Close button */}
                <button onClick={() => setSelectedUser(null)}>
                    <X />
                </button>
            </div>
        </div>

    )
}

export default ChatHeader