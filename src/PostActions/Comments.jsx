import { Image } from "@heroui/react";

export default function CommentItem({ comment }) {

  return (
    <div className="flex gap-3 bg-stone-800 p-4 rounded-xl border border-stone-700 hover:border-cyan-500/40 transition-all duration-300">
      <Image
  alt="user photo"
  height={40}
  width={40}
  radius="full"
  className="object-cover flex-shrink-0"
  src={comment?.commentCreator?.photo || "https://i.pravatar.cc/150?u=default"}
/>

      <div className="flex-1">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm font-semibold text-cyan-400 capitalize">
              {comment?.commentCreator?.name || "Unknown User"}
            </p>
            <p className="text-xs text-stone-400">
              {comment?.createdAt
                ? new Date(comment.createdAt).toLocaleString()
                : ""}
            </p>
          </div>

          <button className="text-xs text-red-400 hover:text-red-600 transition cursor-pointer">
            Delete
          </button>
        </div>

        <p className="text-sm text-stone-200 mt-2 leading-relaxed">
          {comment?.content}
        </p>


        
      
      </div>
    </div>
  );
}
