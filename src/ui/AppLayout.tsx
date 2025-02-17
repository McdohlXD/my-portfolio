import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function AppLayout() {
  return (
    <div className=" bg-gradient-to-r from-blue-400 to-emerald-400">
      <Header />
      <main className="mt-0.5 h-dvh flex justify-center items-center ">
        <Outlet />
      </main>
    </div>
  );
}
