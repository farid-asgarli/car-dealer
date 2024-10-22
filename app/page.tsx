export default function Home() {
  return (
    <section
      className="flex d-flex flex-column main-section"
      style={{
        height: "100%",
      }}
    >
      <header>
        <div className="container">
          <nav className="navbar navbar-dark bg-transparenet">
            <img src="/images/logo.png" className="logo-img" />
          </nav>
        </div>
      </header>
      <main className="my-auto">
        <div className="container">
          <h1 className="page-title">{"Soon will be in your service"}</h1>
        </div>
      </main>
    </section>
  );
}
