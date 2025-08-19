"use client"
import {useGetListing} from "@/app/hooks/useGitListing";
import { stringify } from "querystring";

const TestPage = () => {
    const {data: posts, isLoading: akoto, isError, error, isFetching} = useGetListing();

    if(akoto) {
        return <p className="animate-spin w-[20px]">Loading....</p>
    }
    if(isError) {
        return <p>error; {error ? error.message : "Unknown error"}</p>
    }

    return (
    <div>
        <pre className="">{JSON.stringify(posts,null,4)}</pre>
        {/* <div> 
                {posts.map( posts => {
                    return <div key={posts.id} className="flex flex-col gap-2 border-red-500 border-2 p-2">
                        <p className="text-red-500">{posts.id}</p>
                        <p className="text-blue-500">{posts.title}</p>
                        <p className="text-green-500">{posts.body}</p>
                        <p className="text-yellow-500">{posts.userId}</p>
                    </div>
                })}
            </div> */}
        </div>
    )
}
export default TestPage;