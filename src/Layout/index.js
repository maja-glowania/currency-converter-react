const Layout = ({ children }) => {
  return (
    <div className="converter-app-container">
      <header className="app-header">
        <h1>Kalkulator Walut w React</h1>
      </header>
      <main className="app-main-content">
        {children} {}
      </main>
      <footer className="app-footer">
        <p>Waluta bazowa: PLN. Kursy statyczne.</p>
      </footer>
    </div>
  );
};

export default Layout;
