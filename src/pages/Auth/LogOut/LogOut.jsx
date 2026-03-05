import React from "react";

function LogoutButton({ onLogout }) {
  return (
    <button
      onClick={onLogout}
      className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors"
    >
      Logout
    </button>
  );
}

export default LogoutButton;