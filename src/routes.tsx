import UapList from "./pages/uapList";
import LoginPage from "./layout/loginPage";
import Ligne from "./pages/ligne";
interface Route {
    path: string;
    element: React.ReactNode;
}

interface RouteGroup {
    layout: string;
    pages: Route[];
}

interface RouteSection extends RouteGroup {
    title?: string;
}

export const routes: (RouteSection | RouteGroup)[] = [
    {
        layout: "uap",
        pages: [
            {
                path: "/",
                element: <UapList />,
            },
            {
                path: "/ligne",
                element: <Ligne />,
            },
        ],
    },
    {
        layout: "auth",
        pages: [
            {
                path: "/sign-in",
                element: <LoginPage />,
            },
        ],
    },
];

export default routes;
