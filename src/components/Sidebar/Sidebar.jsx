import React, { useEffect } from 'react';
import { userChatStore } from '../../store/userChatStore';
import { Users } from 'lucide-react';
import defaultProfilePicture from "/assets/images/avatar.png"
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
            <aside id="default-sidebar" aria-label="Sidebar" className='min-w-[50px] md:min-w-[200px]'>
                <div className="h-full px-3 py-4 overflow-x-hidden overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <span className="flex items-center p-2 text-gray-600 rounded-lg dark:text-white">
                                <Users className='size-5 text-gray-600 dark:text-gray-400' />
                                <span className="ml-3 max-sm:hidden">Chat</span>
                            </span>
                        </li>
                        {
                            users.map((user) => (
                                <li key={user._id} onClick={() => setSelectedUser(user)}>
                                    <span className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 ${selectedUser?._id === user._id ? "bg-custblue text-white ring-1 ring-custblue" : ""}`}>
                                        <img
                                            src={user.profilePicture || defaultProfilePicture}
                                            alt={user.fullName}
                                            className="size-8 object-cover rounded-full"
                                        />
                                        <div className='ml-3 max-sm:hidden'>
                                            <p className='text-sm'>{user.fullName}</p>
                                            <p className='text-xs font-Open-Sans text-black dark:text-white'>{onlineUsers.includes(user._id) ? "🟢 Online" : "🔴 Offline"}</p>
                                        </div>
                                    </span>
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
