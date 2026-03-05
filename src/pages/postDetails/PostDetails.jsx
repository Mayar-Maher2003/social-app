import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getSinglePost } from "../../APIData/Posts";
import {  Spinner } from "@heroui/react";
import AllPosts from './../home/AllPosts';


export default function PostDetails() {
  const { id } = useParams(); 

  const {data: post, isLoading, isError, error } = useQuery({
    queryKey: ["single_post", id],
    queryFn: () => getSinglePost(id),
    select: (data) => data.post
  });

  console.log("Post details:", post, isLoading, isError, error );

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
  return (
    <div className="space-y-4 p-4 bg-stone-950 min-h-screen text-white">
 <AllPosts key={post._id} post={post} />
     </div>

    
  );

  // <div className="space-y-4 mt-6">
  //       <h2 className="text-xl font-semibold text-cyan-400">All Comments</h2>
  //       {post.comments?.length > 0 ? (
  //         post.comments.map((comment) => (
  //           <CommentItem key={comment._id} comment={comment} />
  //         ))
  //       ) : (
  //         <p className="text-stone-400">No comments yet</p>
  //       )}
  //     </div>
}