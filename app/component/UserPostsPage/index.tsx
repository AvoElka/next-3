"use client"
import { IPost } from "@/type/type"
import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"

export const UserPostsPage = ({id}: {id: number}) => {
    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(() => {
        axios.get(`http://dummyjson.com/users/${id}/posts`)
        .then(res => setPosts(res.data.posts))
        .catch(console.warn)
    }, [id])
    return <div>
        {
            posts.map(e => <div key={e.id}
                className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark">
                 
                <div className="p-6 text-surface dark:text-white">
                  <h5 className="mb-2 text-xl font-medium leading-tight">{e.title}</h5>
                  <p className="mb-4 text-base">{e.body}</p>
                  <Link
                    href={"/posts/" + e.id}
                    type="button"
                    className="inline-block rounded bg-indigo-400 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                    data-twe-ripple-init
                    data-twe-ripple-color="light">
                    see more
                  </Link>
                </div>
              </div> )
        }

    </div>
}