import React, { useEffect } from 'react';
import { userChatStore } from '../../store/userChatStore';
import { User, Users } from 'lucide-react';
import defaultProfilePicture from "./avatar.png";
import Skeleton from '../Skeleton/Skeleton';

function Sidebar() {
    const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } = userChatStore();

    // Assuming you have a way to determine which users are online
    const onlineUsers = []; // Populate this array based on your logic

    useEffect(() => {
        getUsers();
    }, [getUsers]);

    if (isUsersLoading) return <Skeleton />

    return (
        <>
            {/* <aside className='h-dvh w-72 border-r border-custblue flex flex-col transition-all duration-200'>
                <div className='border-custblue w-full p-5'>
                    <div className="flex items-center gap-2">
                        <User className="size-6" />
                        <span className="font-medium hidden lg:block">Contacts</span>
                    </div>
                    <div className="mt-3 hidden lg:flex flex-col items-center gap-2">
                        {
                            Array.isArray(users) && users.map((user, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedUser(user)}
                                    className={`w-full p-3 flex items-center gap-3 hover:bg-custblue/50 transition-colors ${selectedUser?._id === user._id ? "bg-blue-500 ring-1 ring-custblue" : ""}`}
                                >
                                    <div className="relative mx-auto lg:mx-0">
                                        <img
                                            src={user.profilePicture || defaultProfilePicture}
                                            alt={user.fullName}
                                            className="size-12 object-cover rounded-full"
                                        />
                                    </div>
                                    <div className="hidden lg:block text-left min-w-0">
                                        <div className="font-medium truncate">{user.fullName}</div>
                                    </div>
                                </button>
                            ))
                        }
                    </div>
                </div>
            </aside> */}


            <aside id="default-sidebar" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <Users className='w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                <span className="ms-3">Contacts</span>
                            </a>
                        </li>
                        {
                            users.map((user) => (
                                <li key={user._id} onClick={() => setSelectedUser(user)}>
                                    <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <img
                                            src={user.profilePicture || defaultProfilePicture}
                                            alt={user.fullName}
                                            className="size-6 object-cover rounded-full"
                                        />
                                        <span className="flex-1 ms-3 whitespace-nowrap">{user.fullName}</span>
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
