import React, { useContext } from "react";
import AddIcon from "@mui/icons-material/Add";
import LoginIcon from '@mui/icons-material/Login';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { AppState } from "../App";

const Header = () => {
  
  const context = useContext(AppState)

  return (
    <div className=" sticky top-0 z-10 text-3xl header  flex justify-between items-center text-red-500 font-bold p-3 border-b-2 border-gray-500">
      <Link to={"/"}>
        <span>
          Filmy<span className="text-white">verse</span>
        </span>
      </Link>
{
  context.login ? 

      <Link to={"/addmovie"}>
        <h1 className="text-lg text-white flex items-center cursor-pointer  hover:bg-black rounded-sm">
          <Button color="secondary">
            <AddIcon className="mr-1" color="inherit" />
            <span className="text-white">Add Movie</span>
          </Button>
        </h1>
      </Link> : 
      <Link to={"/login"}>
        <h1 className="text-lg text-white flex items-center cursor-pointer hover:bg-black rounded-sm">
          <Button color="secondary">
            <LoginIcon className="mr-1" color="inherit" />
            <span className="text-white">Login</span>
          </Button>
        </h1>
      </Link> 
      }
    </div>
  );
};

export default Header;
