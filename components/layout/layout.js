import Header from "../header/header";

function Layout({ children }) {
  return (
    <div className="container-wrapper">
      {/* <div className="container"> */}
      <Header />
      <main>{children}</main>
      {/* </div> */}
    </div>
  );
}

export default Layout;
