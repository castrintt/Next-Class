/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { useAuthContext } from "../../../hooks/useAuthContext/useAuthContext";
import { PerfilPhoto } from "../../icons";
import UserPhotoProps from "../../../interfaces/UserPhotoProps/UserPhotoProps";

const UserPhoto = ({ className }: UserPhotoProps) => {
  const { user } = useAuthContext();
  console.log(user);
  return (
    <Link href={"/userPerfil"}>
      {user.imageUrl === "" ? (
        <div className={`h-10 w-10 rounded-full cursor-pointer ${className}`}>
          <PerfilPhoto />
        </div>
      ) : (
        <div className={`h-10 w-10 rounded-full cursor-pointer ${className}`}>
          <img src={user.imageUrl || ""} alt="user perfil photo" />
        </div>
      )}
    </Link>
  );
};

export default UserPhoto;
