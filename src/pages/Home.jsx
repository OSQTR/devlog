import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { fetchPostList } from "../services/github";

export default function Home() {
  const [latestId, setLatestId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPostList().then((list) => {
      if (list.length) setLatestId(list[0].id);
      setLoading(false);
    });
  }, []);

  if (loading) return null;
  if (!latestId) return <p>글이 없습니다.</p>;

  return <Navigate to={`/post/${latestId}`} replace />;
}
