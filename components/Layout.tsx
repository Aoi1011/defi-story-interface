import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <body>
      <Header />
      <div>{children}</div>
    </body>
  );
};
export default Layout;
