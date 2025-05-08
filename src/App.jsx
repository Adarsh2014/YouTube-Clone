import { Provider } from "react-redux";
import Body from "./component/Body";
import Header from "./component/Header";
import store from "./utils/Store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./component/MainContainer";
import WtachPage from "./component/WtachPage";
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Body />,
        children: [
            { path: "/", element: <MainContainer /> },
            {
                path: "watch",
                element: <WtachPage />,
            },
        ],
    },
]);

function App() {
    return (
        <Provider store={store}>
            <>
                <div>
                    <Header />
                    <RouterProvider router={appRouter}></RouterProvider>
                </div>
            </>
        </Provider>
    );
}

export default App;
