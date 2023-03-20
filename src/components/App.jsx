import Home from "pages/Home";
import Movies from "pages/Movies";
import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout/Layout";

export const App = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path = '/movies' element = {<Movies />} />
        </Route>
    </Routes>
    <GlobalStyle />
    </>
  );
};
