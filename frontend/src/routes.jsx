import {createBrowserRouter} from 'react-router-dom';
import App from './App';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import Layout from './components/Layout/Layout';

export const router=createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <App />
            },
            {
                path: "womens",
                element: <ProductListPage />
            }
        ]
    }
]);