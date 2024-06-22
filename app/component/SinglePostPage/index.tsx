"use client" 
import { IPost } from "@/type/type"
import axios from "axios"
import { useEffect, useState } from "react"

export const SinglePostPage = ({id}: {id: number}) => {
    const [bool, setBool] = useState(false)
    const [post, setPost] = useState<IPost>({} as IPost)
    const [someText, setSomeText] = useState<string|undefined>("")
    useEffect(() => {
        axios.get("https://dummyjson.com/posts/" + id)
        .then(res => {
            setSomeText(res.data.body)
            setPost(res.data)
        })
        .catch(console.warn)
    }, [id])

    const save = () => {
        axios.put("https://dummyjson.com/posts/" + post.id, {body: someText})
        .then(res => {
            console.log("update was succesfull, POST BODY - " + res.data.body)
            console.log(res.data)
        })
        .catch(console.warn)
        setBool(false)
    }

    const clearChange = () => {
        setBool(false)
        setSomeText(post.body)
    }

    return <div>
        <div className="myContainer">
            <div className="w-80 block rounded-xl bg-white shadow-lg dark:bg-neutral-700 text-center">

            <div className="p-6">

                <h5 className="mb-2 text-xl font-bold tracking-wide text-neutral-800 dark:text-neutral-50">{post.title}</h5>
                <p className="mb-2 text-base text-neutral-500 dark:text-neutral-300">{post.body}</p>

            </div>

            <div className="border-t-2 border-neutral-100 px-6 py-4 dark:border-neutral-500">
                
                <button onClick={() => setBool(true)}
                className="mt-3 inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                change post
                </button>
                
            </div>
            </div>

                {
                    bool && <div className="textDiv">

                        <textarea value={someText} className="myTextarea" onChange={(ev) => setSomeText(ev.target.value)}/>
                        <div>
                            <button onClick={clearChange}>Cancel</button>
                        </div>
                        <button 
                         className="inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                         onClick={save}
                         >
                            save
                        </button>

                    </div>
                }

        </div>

    </div>
}