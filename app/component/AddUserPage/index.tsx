"use client"
import { IUser } from "@/type/type"
import axios from "axios"
import { useForm } from "react-hook-form"

export const AddUserPage = () => {
    const {handleSubmit, register, reset, formState: {errors}} = useForm<IUser>()

    const save = (data: IUser) => {
        console.log(data)
        axios.post("http://dummyjson.com/users/add", data)
        .then(res => console.log(res.data))
        .catch(console.warn)
        
    }

    return <div className="formParent">
        <form onSubmit={handleSubmit(save)}>
            <input placeholder="Name" {...register("firstName", {required: "Enter your name"})}/>
            {errors.firstName && <p>{errors.firstName.message}</p>}

            <input placeholder="Surname" {...register("lastName", {required: "Enter your surname"})}/>
            {errors.lastName && <p>{errors.lastName.message}</p>}
            
            <input placeholder="Age" {...register("age", {required: "Enter your age"})}/>
            {errors.age && <p>{errors.age.message}</p>}
            
            <input placeholder="Birth date" {...register("birthDate", {required: "Enter your birth date"})}/>
            {errors.birthDate && <p>{errors.birthDate.message}</p>}
            
            <button>save</button>
        </form>
    </div>
}