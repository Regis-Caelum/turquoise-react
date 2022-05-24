import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import "./singlePost.css";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "https://source.unsplash.com/1080x900/?technology";
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("https://react-frontend-turquoise.herokuapp.com/api/v1/get/articles/title/" + path);
      setPost(res.data.payload[0]);
      setTitle(res.data.payload[0].title);
      setDesc(res.data.payload[0].content);
      console.log(res.data.payload[0])
    };
    getPost();

  }, [path]);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {<img src={PF} alt="" className="singlePostImg" />}
        {
          <h1 className="singlePostTitle">
            {title}
          </h1>
        }
        <div className="singlePostInfo">
        </div>
        {<p className="singlePostDesc">{desc}</p>}
      </div>
    </div>
  );
}

