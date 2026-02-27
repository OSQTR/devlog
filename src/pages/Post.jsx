import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import MarkdownViewer from "../components/MarkdownViewer";
import Pagination from "../components/Pagination";
import { fetchPostList, fetchMarkdownContent } from "../services/github";

export default function Post() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const [content, setContent] = useState("");

  useEffect(() => {
    fetchPostList().then(setList);
  }, []);

  useEffect(() => {
    if (!list.length) return;
    const post = list.find((p) => p.id === id);
    if (post) fetchMarkdownContent(post.url).then(setContent);
  }, [list, id]);

  const index = list.findIndex((p) => p.id === id);

  function handleChange(newIndex) {
    navigate(`/post/${list[newIndex].id}`);
  }

  return (
    <>
      <MarkdownViewer content={content} />
      {list.length > 0 && (
        <Pagination page={index} total={list.length} onChange={handleChange} />
      )}
    </>
  );
}
