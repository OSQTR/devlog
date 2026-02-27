import { useEffect, useState } from "react";
import MarkdownViewer from "../components/MarkdownViewer";
import Pagination from "../components/Pagination";
import { fetchPostList, fetchMarkdownContent } from "../services/github";

export default function Home() {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(0);
  const [content, setContent] = useState("");

  useEffect(() => {
    fetchPostList().then(setList);
  }, []);

  useEffect(() => {
    if (!list.length) return;

    fetchMarkdownContent(list[page].url).then(setContent);
  }, [list, page]);

  return (
    <>
      <MarkdownViewer content={content} />

      <Pagination page={page} total={list.length} onChange={setPage} />
    </>
  );
}
