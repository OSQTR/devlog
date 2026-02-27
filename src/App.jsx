// App.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Layout from "./components/Layout";
import GlobalStyle from "./styles/GlobalStyles";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <Layout>
        <Routes>
          {/* 메인 페이지 (페이지네이션 포함) */}
          <Route path="/" element={<Home />} />

          {/* 특정 포스트 */}
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
