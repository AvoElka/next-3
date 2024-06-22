import { SingleUserPage } from "@/app/component/SingleUserPage";

export default function SingleUser({params}:any) {
  console.log(params);
  
  return (
    <div>
      <SingleUserPage id={params.id}/>
    </div>
  );
}
