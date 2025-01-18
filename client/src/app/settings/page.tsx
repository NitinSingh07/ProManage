import Header from "@/components/Header";
import React from "react";

const Settings = () => {
  const userSettings = {
    username: "johndoe",
    email: "john.doe@example.com",
    teamName: "Development Team",
    roleName: "Developer",
  };

  const labelStyles =
    "block text-sm font-medium text-gray-700 dark:text-gray-300";
  const textStyles =
    "mt-2 block w-full border border-gray-300 rounded-lg shadow-sm p-3 bg-gray-50 text-gray-900 dark:bg-gray-800 dark:text-white dark:border-gray-600";

  return (
    <div className="min-h-screen bg-gray-100 p-8 dark:bg-gray-900">
      <Header name="Settings" />
      <div className="mx-auto mt-8 max-w-3xl space-y-6 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
     
        <div>
          <label className={labelStyles}>Username</label>
          <div className={textStyles}>{userSettings.username}</div>
        </div>
        <div>
          <label className={labelStyles}>Email</label>
          <div className={textStyles}>{userSettings.email}</div>
        </div>
        <div>
          <label className={labelStyles}>Team</label>
          <div className={textStyles}>{userSettings.teamName}</div>
        </div>
        <div>
          <label className={labelStyles}>Role</label>
          <div className={textStyles}>{userSettings.roleName}</div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
