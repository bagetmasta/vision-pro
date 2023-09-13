import Header from "../header/header";

function Layout({ children }) {
  return (
    <div className="container">
      <Header />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
