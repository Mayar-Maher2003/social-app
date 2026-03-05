import React from "react";
import { useQuery } from "@tanstack/react-query";
import AllPosts from "./AllPosts";
import { Spinner } from "@heroui/react";
import  {getAllPosts}  from "../../APIData/Posts";
import getUserPosts from "../../APIData/UserPosts";

export default function Home({isHome = true , userId}) {
  // React Query
  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: isHome? ["all-posts"]: ["user.posts" , userId],
    queryFn: isHome ? getAllPosts : () => getUserPosts(userId),
  });


  // Loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-stone-950">
        <Spinner variant="dots" className="text-cyan-500" />
      </div>
    );
  }

  // Error state
  if (isError) {
    return (
      <div className="text-red-500 text-center mt-10">
        Error: {error?.response?.data?.message || error?.message}
      </div>
    );
  }
  // display posts
  return (
    <div className="space-y-4 p-4 bg-stone-950 min-h-screen">
      {posts?.length > 0 ? (
        posts.map((post) => <AllPosts key={post._id} post={post} />)
      ) : (
        <p className="text-stone-400 text-center">No posts available</p>
      )}

      
    </div>
  );
}
