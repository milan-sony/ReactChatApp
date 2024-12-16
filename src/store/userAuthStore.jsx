import { create } from 'zustand'
import { axiosInstance } from '../lib/Axios'

export const useAuthStore = create((set) => ({
    authUser: null, //check whether user authenticated or not
    ischeckingAuth: true, //state to check the authentication (initially set the value to true bcz asoonas we refresh the pg we will check whether the user is authenticated, with this the authUser value change)
    isSigningUp: false,
    isLogingIn: false,
    isUpdatingProfile: false,

    checkAuth: async () => {
        try {
            const res = await axiosInstance.get("/user/check")
            set({ authUser: res.data })
        } catch (error) {
            set({ authUser: null })
            console.log("Error in checkAuth: ", error)
        } finally {
            set({ ischeckingAuth: false })
        }
    }
}))