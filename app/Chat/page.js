"use client"

import { getSession } from "next-auth/react"
import { useEffect } from "react"

export default function Page() {
  const session = getSession();
  useEffect(()=>{
    session.then(s=>{
      if(s){
        console.log(s)
      }
      else{
        location.href="/";
      }
    });
  },[])
  return (
    <div>Chat Sayfası</div>
  )
}
