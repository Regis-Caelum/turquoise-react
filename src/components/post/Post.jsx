import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "https://source.unsplash.com/480x500/?technology";
  return (
    <div className="post">
      {<img className="postImg" src={PF} alt="" />}
      <div className="postInfo">
        <Link to={`/post/${post.title}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />

      </div>
      <p className="postDesc">{post.content}</p>
    </div>
  );
}
