"use client"
import { IUser } from "@/type/type"
import axios from "axios"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export const SingleUserPage = ({id}:{id:number}) => {
    const [user, setUser] = useState<IUser>({} as IUser)
    useEffect(() => {
        axios.get("http://dummyjson.com/users/" + id)
        .then(res => setUser(res.data))
        .catch(console.warn)
    }, [id])
    console.log(user);
    
    return <div>
        <div
  className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark">
   {
    user.image ?
    <Image onClick={() => console.log(user)}
    src={user.image}
    width={250}
    height={250}
    alt="" />
:<></>}
  <div className="p-6 text-surface dark:text-white">
    <h5 className="mb-2 text-xl font-medium leading-tight">{user.firstName} {user.lastName}</h5>
    <p className="mb-4 text-base">{user.gender}</p>
    <p className="mb-4 text-base">Born - {user.birthDate}</p>
    <p className="mb-4 text-base">Nickname - {user.username}</p>
    <Link href={"/users/" + id + "/posts"} role="button" className="px-4 myBtnFlex rounded bg-indigo-500 text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-indigo-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-indigo-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-indigo-700 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0">User posts</Link>
  </div>
</div>
    </div>
}