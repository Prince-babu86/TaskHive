import React, { useContext } from "react";
import { DataContext } from "../Context/AuthContext";

const ProfilePage = () => {
  const {userdata} = useContext(DataContext)
  const user = {
    name: userdata.name,
    email: userdata.email,
    profilePicture:
      "https://www.w3schools.com/w3images/avatar2.png", // Replace with the actual profile picture URL
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl max-w-sm w-full p-6 text-center">
        {/* Profile Picture */}
        <div className="flex justify-center mb-4">
          <img
            src={user.profilePicture}
            alt={`${user.name}'s profile`}
            className="w-24 h-24 rounded-full shadow-md object-cover"
          />
        </div>
        {/* Name and Email */}
        <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
        <p className="text-gray-600 mb-4">{user.email}</p>
        {/* Button */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
