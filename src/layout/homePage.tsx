import React from "react";
import NavBar from "./navBar";
import { Route, Routes } from "react-router-dom";
import routes from "../routes";
const HomePage: React.FC = () => {
    return (
        <div>
            <NavBar />
            <Routes>
                {routes.map(
                    ({ layout, pages }) =>
                        layout === "uap" &&
                        pages.map(({ path, element }) => (
                            <Route path={path} element={element} key={path} />
                        ))
                )}
            </Routes>
        </div>
    );
};
export default HomePage;
