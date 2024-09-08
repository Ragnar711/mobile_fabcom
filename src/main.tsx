import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { mainTheme } from "./assets/mainTheme.ts";
import HomePage from "./layout/homePage.tsx";
import LoginPage from "./layout/loginPage.tsx";
import { SidebarProvider } from "./layout/SidebarContext.tsx";
import SideBar from "./layout/sideBar.tsx";
import { NotFoundPage } from "./pages/notFoundPage.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
    <ThemeProvider theme={mainTheme}>
        <React.StrictMode>
            <SidebarProvider>
                <BrowserRouter>
                    <SideBar />
                    {/* <RouterProvider router={router} /> */}
                    <Routes>
                        <Route path="/auth/*" element={<LoginPage />} />
                        <Route path="/uap/*" element={<HomePage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </BrowserRouter>
            </SidebarProvider>
        </React.StrictMode>
    </ThemeProvider>
);
