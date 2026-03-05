import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/react";
import { NavLink, useNavigate } from "react-router-dom";

import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";

export default function Nav() {
  const { user } = useContext(UserContext);


   const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
  
    navigate("/auth/login");
  };

  return (
    <Navbar className="bg-stone-950 text-white shadow-lg px-4 sm:px-8">
      {/* Brand on the left */}
      <NavbarContent justify="start">
        <NavbarBrand className="flex items-center gap-2">
          <p className="font-bold text-cyan-500 text-lg sm:text-xl">
            Social App
          </p>
        </NavbarBrand>
      </NavbarContent>

      {/* Links in the center */}
      <NavbarContent
        justify="center"
        className="lg:flex flex-row gap-2 gap-6 items-center text-center text-base hidden"
      >
        <NavbarItem>
          <NavLink
            to="/Post"
            className={({ isActive }) =>
              `font-medium ${isActive ? "text-cyan-400" : "text-white"}`
            }
          >
            Post Details
          </NavLink>
        </NavbarItem>

        <NavbarItem>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-medium ${isActive ? "text-cyan-400" : "text-white"}`
            }
          >
            Home
          </NavLink>
        </NavbarItem>

        <NavbarItem>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `font-medium ${isActive ? "text-cyan-400" : "text-white"}`
            }
          >
            Profile
          </NavLink>
        </NavbarItem>
      </NavbarContent>

      {/* Avatar / right side */}
      <NavbarContent as="div" className="items-center" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              as="button"
              className="transition-transform border-2 border-cyan-500 cursor-pointer"
              color="secondary"
              name={user?.username || "User"}
              size="md"
              src={user?.photo || "https://i.pravatar.cc/150?u=default"}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
           
            <DropdownItem key="profile" as={NavLink} to="/Profile">
              My Profile
            </DropdownItem>

            <DropdownItem key="settings">Settings</DropdownItem>
            <DropdownItem key="logout" color="danger" onClick={handleLogout}>
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
