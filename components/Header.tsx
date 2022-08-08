const Header = () => {
  return (
    <header>
      <div className="grid gap-16 grid-cols-3">
        <div>
          <h1>DeFi Story</h1>
        </div>
        <nav className="flex items-center flex-wrap">
          <a className="text-sm font-bold">Home</a>
          <a className="text-sm font-bold">About</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
