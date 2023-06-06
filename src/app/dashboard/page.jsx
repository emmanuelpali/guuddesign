"use client"
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import useSWR from 'swr';
const Dashboard = () => {
  const router = useRouter();
  // const [data, setData] = useState([]);
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState([])


  // useEffect((() => {
  //   const getData = async (id) => {
  //     setLoading(true);
  //     // the return is not serialized
  //     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    
  //     if (!res.ok) {
  //       return new Error('no data')
  //     }
  //     //different from state data
  //     const data = await res.json();

  //     setData(data);
  //     setLoading(false);
  //   }
  //   getData();
  // }),[]);

  const session = useSession();
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error, isloading } = useSWR("https://jsonplaceholder.typicode.com/posts", fetcher)


  console.log(session);
  if (error) return <div>Failed to load</div>;
  if (session.status === "loading") return <div>Loading...</div>;
  if(session.status === "unauthenticated"){
    router?.push("/dashboard/login")
  }
  if(session.status === "authenticated"){
    return (
      <div>Dashboard
          
      </div>
    )
  }
}

export default Dashboard
