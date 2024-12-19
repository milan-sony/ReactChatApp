import { Camera, Mail, User } from "lucide-react"
import { userAuthStore } from "../../store/userAuthStore"
import defaultProfilePicture from "./avatar.png"

const ProfilePage = () => {
    const { authUser, isUpdatingProfile, updateProfile } = userAuthStore()

    const handleImageUpload = () => {
    };

    return (
        <div className="h-screen">
            <div className="max-w-2xl mx-auto p-4 py-8">
                <div className="bg-white shadow dark:bg-slate-900 rounded-xl p-6 space-y-8">
                    <div className="text-center">
                        <h1 className="font-black text-black dark:text-white font-Open-Sans uppercase text-2xl">Profile</h1>
                        <p className="mt-2 text-black dark:text-white">Your profile information</p>
                    </div>

                    {/* avatar upload section */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="relative">
                            <img
                                src={authUser.profilePic || defaultProfilePicture}
                                alt="Profile"
                                className="size-32 rounded-full object-cover border-4 text-black dark:text-white"
                            />
                            <label
                                htmlFor="avatar-upload"
                                className={`absolute bottom-0 right-0 bg-base-content hover:scale-105 p-2 rounded-full cursor-pointer transition-all duration-200 ${isUpdatingProfile ? "animate-pulse pointer-events-none" : ""}`}
                            >
                                <Camera className="size-8 p-1 text-custblue bg-white rounded-full" />
                                <input
                                    type="file"
                                    id="avatar-upload"
                                    className="hidden"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    disabled={isUpdatingProfile}
                                />
                            </label>
                        </div>
                        <p className="text-sm text-zinc-400">
                            {isUpdatingProfile ? "Uploading..." : "Click the camera icon to update your photo"}
                        </p>
                    </div>
                    {/* user information */}
                    <div className="space-y-6">
                        <div className="space-y-1.5">
                            <div className="text-sm text-zinc-400 flex items-center gap-2">
                                <User className="w-4 h-4" />
                                Full Name
                            </div>
                            <p className="px-4 py-2.5 bg-base-200 rounded-lg border text-black dark:text-white">{authUser.fullName}</p>
                        </div>

                        <div className="space-y-1.5">
                            <div className="text-sm text-zinc-400 flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                Email Address
                            </div>
                            <p className="px-4 py-2.5 bg-base-200 rounded-lg border text-black dark:text-white">{authUser.email}</p>
                        </div>
                    </div>
                    {/* Account info */}
                    <div className="mt-6 bg-gray-800 rounded-xl p-6">
                        <h2 className="text-lg font-medium  mb-4 text-black dark:text-white">Account Information</h2>
                        <div className="space-y-3 text-sm">
                            <div className="flex items-center justify-between py-2 border-b border-zinc-700">
                                <span className="text-black dark:text-white">Member Since</span>
                                <span className="text-black dark:text-white">{authUser.createdAt.split("T")[0].split("-").reverse().join(".")}</span>
                            </div>
                            <div className="flex items-center justify-between py-2">
                                <span className="text-black dark:text-white">Account Status</span>
                                <span className="text-green-500">Active</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;