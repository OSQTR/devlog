import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MarkdownViewer from "../components/MarkdownViewer";
import { fetchPostList } from "../services/github";

export default function Post() {
  const { id } = useParams();

  const [content, setContent] = useState("");

  useEffect(() => {
    fetchPostList()
      .then((list) => {
        const post = list.find((p) => p.id === id);

        return fetch(post.url);
      })
      .then((res) => res.text())
      .then(setContent);
  }, [id]);

  return <MarkdownViewer content={content} />;
}
