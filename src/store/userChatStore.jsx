import { create } from 'zustand';
import { axiosInstance } from '../lib/Axios';
import toast from 'react-hot-toast';
import { userAuthStore } from './userAuthStore';

export const userChatStore = create((set, get) => ({
    messages: [],
    users: [],
    selectedUser: null,
    isUsersLoading: false,
    isMessagesLoading: false,

    // get all users for the sidebar
    getUsers: async () => {
        set({ isUsersLoading: true })
        try {
            const res = await axiosInstance.get("/message/users")
            set({ users: res.data.message })
        } catch (error) {
            const errorMessage = error.response.data.message
            toast.error(errorMessage)
        } finally {
            set({ isUsersLoading: false })
        }
    },

    // get messages of selected user
    getMessages: async (userId) => {
        set({ isMessagesLoading: true })
        try {
            const res = await axiosInstance.get(`/message/${userId}`)
            set({ messages: res.data.message })
        } catch (error) {
            const errorMessage = error.response.data.message
            toast.error(errorMessage)
        } finally {
            set({ isMessagesLoading: false })
        }
    },

    // send message
    sendMessage: async (messageData) => {
        // getter from zustand -  to get the data from create()
        const { selectedUser, messages } = get() // destructuring
        try {
            const res = await axiosInstance.post(`/message/send/${selectedUser._id}`, messageData)
            set({ messages: [...messages, res.data] }) // spread operator
        } catch (error) {
            toast.error(error.response.data.message)
        }
    },

    // set the state for selected user
    setSelectedUser: (selectedUser) => {
        set({ selectedUser: selectedUser })
    },

    subscribeToMessages: () => {
        const { selectedUser } = get()
        if (!selectedUser) return

        // get's the socket from useAuthStore
        const socket = userAuthStore.getState().socket

        socket.on("newMessage", (newMessage) => {

            // check if the message is send to the selected user
            if (newMessage.senderId !== selectedUser._id) return

            set({
                messages: [...get().messages, newMessage] // spread the existing messages and add's new message
            })
        })
    },

    // to handle logout / close of window
    unSubscribeFromMessages: () => {
        const socket = userAuthStore.getState().socket
        socket.off("newMessage")
    }
}))
