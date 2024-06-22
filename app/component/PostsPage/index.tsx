"use client"
import { IPost } from "@/type/type"
import axios from "axios"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"




export const PostsPage = () => {
  const [bool, setBool] = useState(false)
    const [posts, setPosts] = useState<IPost[]>([])
    const inp = useRef<HTMLInputElement>(null)
    useEffect(() => {
        axios.get(`http://dummyjson.com/posts`)
        .then(res => setPosts(res.data.posts))
        .catch(console.warn)
    }, [])

    const activeInput = (ev:any) => {
      ev.target.style.border = "3px solid #3c0d86"
    }
    const inActiveInput = (ev:any) => {
      ev.target.style.border = "2px solid grey"
      ev.target.style.borderRight = 0
    }

    const search = () => {
        if (inp.current) {
        axios.get("https://dummyjson.com/posts/search?q=" + inp.current.value)
        .then(res => setPosts(res.data.posts))
        inp.current.value = ""
      }
    }

    return <div className="pl-6" style={{}}>
      <div className="searchDiv">
        <input ref={inp} placeholder="search" className="myInput" onFocus={(ev) => activeInput(ev)} onBlur={(ev) => {inActiveInput(ev)}}/>
        <button className="myButton" onClick={search}>
        <span className="[&>svg]:h-5 [&>svg]:w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="white">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
    </span>
        </button>
      </div>
        {
            posts.map(e => <div key={e.id}
                className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark">
                 
                <div className="p-6 text-surface dark:text-white">
                  <h5 className="mb-2 text-xl font-medium leading-tight">{e.title}</h5>
                  <p className="mb-4 text-base">{e.body}</p>
                  <Link href={"/posts/" + e.id} role="button" className="myBtnFlex inline-block rounded bg-indigo-500 text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-indigo-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-indigo-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-indigo-700 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0 px-4">See more</Link>
                </div>
              </div> )
        }
    </div>
}