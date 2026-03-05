import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
} from "@heroui/react";
import { HiDotsHorizontal } from "react-icons/hi";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";

import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import CommentItem from "./../../PostActions/Comments";

export default function AllPosts({ post }) {
  const { user } = useContext(UserContext);

  const footer = [
    { icon: <AiOutlineLike size={18} />, span: "Like" },
    { icon: <FaRegComment size={18} />, span: "Comment" },
    { icon: <RiShareForwardLine size={18} />, span: "Share" },
  ];
  const topComment = post?.topComment;
  return (
    <div className="flex justify-center px-4 py-4 bg-stone-950">
      <div className="w-full max-w-[500px]">
        <Card className="bg-stone-900 text-white p-5 rounded-2xl shadow-lg border border-stone-700">
          {/* Header */}
          <CardHeader className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <Image
                alt="user photo"
                height={45}
                width={45}
                radius="full"
                className="object-cover"
                src={post?.user?.photo || "https://i.pravatar.cc/150?u=default"}
              />
              <div>
                <p className="text-lg font-semibold text-cyan-400 capitalize">
                  {post?.user?.name || "Unknown User"}
                </p>
                <p className="text-xs text-stone-400">
                  {new Date(post?.createdAt).toLocaleString()}
                </p>
              </div>
            </div>

            <Dropdown backdrop="blur" className="bg-stone-900">
              <DropdownTrigger>
                <Button className="text-stone-400 bg-transparent hover:text-cyan-400 p-1">
                  <HiDotsHorizontal className="text-lg" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Post Actions"
                variant="faded"
                className="bg-stone-900 text-white min-w-[150px]"
              >
                <DropdownItem key="copy">Copy link</DropdownItem>
                <DropdownItem key="edit">Edit Post</DropdownItem>
                <DropdownItem
                  key="delete"
                  color="danger"
                  className="text-red-500"
                >
                  Delete Post
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </CardHeader>

          <Divider className="border-stone-700" />

          {/* Body */}
          <CardBody className="space-y-3">
            {post?.body && (
              <p className="text-lg text-stone-200 leading-relaxed">
                {post.body}
              </p>
            )}

            {post?.image && (
              <div className="flex justify-center">
                <Image
                  alt="post image"
                  src={post.image}
                  className="rounded-xl object-cover w-full max-h-[400px]"
                />
              </div>
            )}
          </CardBody>

          <Divider className="border-stone-700 my-3" />

          {/* Footer */}
          <CardFooter className="flex justify-between text-stone-400">
            {footer.map((item, index) => (
              <button
                key={index}
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                {item.icon}
                <span className="text-sm">{item.span}</span>
              </button>
            ))}
          </CardFooter>

          {topComment && <CommentItem comment={topComment} />}

          {post && post.commentsCount > 0 && (
            <NavLink
              to={`/post/${post._id}`}
              className="p-2 text-cyan-400 hover:text-cyan-600 transition-all"
            >
              View All Comments ({post.commentsCount})
            </NavLink>
          )}
        </Card>
      </div>
    </div>
  );
}
