import React, { useLayoutEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import DefaultLayout from "./Components/Layout/DefaultLayout";
import { publicRoutes } from "./routes";
function App() {
  return (
    <div>
      <Routes>
        {publicRoutes.map((route, key) => {
          const Page = route.component;
          // Dinh nghia layout cho cac trang
          const Layout = route.layout || DefaultLayout;
          return (
            <Route
              key={key}
              path={route.path}
              element={
                <Layout>
                  <Page></Page>
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
