import { SinglePostPage } from "@/app/component/SinglePostPage";


export default function SinglePost({params}: any) {

  
  return (
    <div>
      <SinglePostPage id={params.id}/>
    </div>
  );
}
