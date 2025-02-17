import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './ui/Home';
import About from './ui/About';
import ErrorPage from './ui/ErrorPage';
import AppLayout from './ui/AppLayout';
import Technology from './ui/Technology';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/tech',
        element: <Technology />,
      },
    ],
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
