import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="catalog">CATALOG</NavLink>
          <NavLink to="favorites">FAVORITES</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
