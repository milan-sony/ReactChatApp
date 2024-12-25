import { create } from 'zustand';
import { axiosInstance } from '../lib/Axios';
import toast from 'react-hot-toast';

export const userChatStore = create((set) => ({
    messages: [],
    users: [],
    selectedUser: null,
    isUsersLoading: false,
    isMessagesLoading: false,

    // get all users for the sidebar
    getUsers: async () => {
        set({ isUsersLoading: true });
        try {
            const res = await axiosInstance.get("/message/users");
            set({ users: res.data.message });
        } catch (error) {
            const errorMessage = error.response?.data?.message || "An unexpected error occurred.";
            toast.error(errorMessage);
        } finally {
            set({ isUsersLoading: false });
        }
    },

    // get messages of selected user
    getMessages: async (userId) => {
        set({ isMessagesLoading: true });
        try {
            const res = await axiosInstance.get(`/message/${userId}`);
            set({ messages: res.data });
        } catch (error) {
            const errorMessage = error.response?.data?.message || "An unexpected error occurred.";
            toast.error(errorMessage);
        } finally {
            set({ isMessagesLoading: false });
        }
    },

    // set the state for selected user
    setSelectedUser: (selectedUser) => {
        set({ selectedUser: selectedUser })
    }
}));
