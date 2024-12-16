import { create } from 'zustand'

export const useAuthStore = create((set) => ({
    authUser: null, //check whether user authenticated or not
    ischeckingAuth: true, //state to check the authentication (initially set the value to true bcz asoonas we refresh the pg we will check whether the user is authenticated, with this the authUser value change)
    isSigningUp: false,
    isLogingIn: false,
    isUpdatingProfile: false,
}))