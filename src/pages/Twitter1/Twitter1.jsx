import React from 'react'


function Twitter1() {
  return (
    <div>
      <header className="header">
        <h1 className="title">Twitter1 Web</h1>
      </header>
      <nav className="nav">
        <ul className="nav-list">
          <li><a href="#" className="nav-link">Bosh sahifa</a></li>
          <li><a href="#" className="nav-link">Xizmatlar</a></li>
          <li><a href="#" className="nav-link">Biz haqimizda</a></li>
          <li><a href="#" className="nav-link">Kontaktlar</a></li>
        </ul>
      </nav>
      <main className="main">
        <section className="section">
          <h2 className="section-title">Xizmatlar</h2>
          <p>Bizning xizmatlarimiz haqida qisqacha ma'lumotlar.</p>
        </section>
        <section className="section">
          <h2 className="section-title">Yangiliklar</h2>
          <p>Sayt yangiliklarining eng oxirgi yangiliklari.</p>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2023 Twitter1 Web</p>
      </footer>
    </div>
  )
}

export default Twitter1