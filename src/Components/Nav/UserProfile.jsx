import React from "react";
import { Link } from "react-router-dom";
import { LogOut, User } from "lucide-react";
import { useAuth } from "../../LogReg/AuthContext"; 

const UserProfile = () => {
  const { user, logout } = useAuth();

  // logged in user
  if (user) {
    return (
      <div className="d-flex align-items-center gap-2 border-end pe-3">
        <div className="d-flex flex-column align-items-end" style={{ lineHeight: '1.2' }}>
          <span className="small text-muted" style={{ fontSize: '10px' }}>Welcome</span>
          <span className="fw-bold text-dark" style={{ fontSize: '14px' }}>
            {user.name}
          </span>
        </div>
        <button
          onClick={logout}
          className="btn btn-light btn-sm rounded-circle p-2 ms-1 text-danger"
          title="Logout"
          style={{ width: '35px', height: '35px' }}
        >
          <LogOut size={16} />
        </button>
      </div>
    );
  }

  // guest 
  return (
    <Link to="/signin" className="text-secondary" title="Login">
      <User size={20} />
    </Link>
  );
};

export default UserProfile;