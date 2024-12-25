import React, { useEffect } from 'react';
import { userChatStore } from '../../store/userChatStore';
import { Users } from 'lucide-react';
import defaultProfilePicture from "./avatar.png";
import Skeleton from '../Skeleton/Skeleton';
import { userAuthStore } from '../../store/userAuthStore';

function Sidebar() {
    const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } = userChatStore()

    const { onlineUsers } = userAuthStore()

    useEffect(() => {
        getUsers();
    }, [getUsers]);

    if (isUsersLoading) return <Skeleton />

    return (
        <>
            <aside id="default-sidebar" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white">
                                <Users className='w-5 h-5 text-gray-500 dark:text-gray-400' />
                                <span className="ms-3">Chat</span>
                            </a>
                        </li>
                        {
                            users.map((user) => (
                                <li key={user._id} onClick={() => setSelectedUser(user)}>
                                    <a href="#" className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ${selectedUser?._id === user._id ? "bg-custblue ring-1 ring-custblue/50" : ""}`}>
                                        <img
                                            src={user.profilePicture || defaultProfilePicture}
                                            alt={user.fullName}
                                            className="size-6 object-cover rounded-full"
                                        />
                                        <span className="flex-1 ms-3 whitespace-nowrap capitalize">{user.fullName}</span>
                                        <span className="inline-flex items-center justify-center px-2 ms-3 rounded-full dark:text-gray-300">{onlineUsers ? "🟢" : "🔴"}</span>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;
