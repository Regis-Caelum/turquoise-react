import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "https://source.unsplash.com/480x500/?technology";
  return (
    <div className="post">
      {<img className="postImg" src={PF} alt="" />}
      <div className="postInfo">
        {/*<div className="postCats">*/}
        {/*  {post.categories.map((c) => (*/}
        {/*    <span className="postCat">{c.name}</span>*/}
        {/*  ))}*/}
        {/*</div>*/}
        <Link to={`/post/${post.id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        {/*<span className="postDate">*/}
        {/*  {new Date(post.createdAt).toDateString()}*/}
        {/*</span>*/}
      </div>
      <p className="postDesc">{post.content}</p>
    </div>
  );
}
