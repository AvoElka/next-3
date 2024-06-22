"use client"
import { IUser } from "@/type/type"
import { useEffect, useState } from "react"
import axios from "axios"
import Link from "next/link"

export const UsersPage = () => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        axios.get("http://dummyjson.com/users")
        .then(res => setUsers(res.data.users))
        .catch(console.warn)
    }, [])
    console.log(users);
    
    return <div>

        <div className="myDiv">
            {
                users.map((e,i,arr) => <div className="myUserCard" key={e.id}>
                    <img src={e.image}/>
                    <div>
                        <h5>{e.firstName} {e.lastName}</h5>
                        <p>{e.email}</p>
                    </div>
                    <div>
                        <p>{e.company.name}</p>
                        <p>{e.company.title}</p>
                        <p>{e.age}</p>
                    </div>
                    <Link href={"/users/" + e.id} role="button" className="myBtnFlex inline-block rounded bg-indigo-500 text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-indigo-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-indigo-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-indigo-700 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0">Info</Link>
                </div> )
            }
        </div>
    </div>
}

{/* <Link href={"/users/" + e.id}>see more</Link> */}