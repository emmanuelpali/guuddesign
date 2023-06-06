"use client";
import React, { useEffect, useState } from "react";
import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

const Login = ({ url }) => {
  const session = useSession();
  const router = useRouter();
  const params = useSearchParams();

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value
    const password = e.target[1].value
    signIn("credentials", {email, password})
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="">
        <input
          type="text"
          placeholder="Email"
          required
          className=""
        />
        <input
          type="password"
          placeholder="Password"
          required
          className=""
        />
        <button className="">Login</button>
    
      </form>
      <span className="">- OR -</span>
      <Link className="" href="/dashboard/login">
        Login with an existing account
      </Link>
        <button onClick={() => signIn("google")}>Google</button>
    </div>
  )
}

export default Login
