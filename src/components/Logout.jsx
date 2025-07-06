import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function Logout() {
  return (
    <button onClick={() => signOut(auth)} style={{ float: "center" }}>
      Logout
    </button>
  );
}