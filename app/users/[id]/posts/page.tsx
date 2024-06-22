import { UserPostsPage } from "@/app/component/UserPostsPage";

export default function UserPosts ({params}:any) {
    return <div>
        <UserPostsPage id={params.id}/>
    </div>
}