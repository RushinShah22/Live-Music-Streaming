import './HomePage.css';

function HomePage(){
    return (
        <div className="app">
      <header className="app-header">
        <h1>Music Streaming App</h1>
        <div className="auth-buttons">
          <button className="auth-button">Sign In</button>
          <button className="auth-button">Sign Up</button>
        </div>
      </header>

      <div className="search-bar">
        <input type="text" placeholder="Search for music or streams..." />
        <button>Search</button>
      </div>

      <main>
        <section id="upcoming-streams">
          <h2>Upcoming Streams</h2>
          {/* Add your upcoming streams component or content here */}
        </section>

        <section id="live-streams">
          <h2>Live Streams</h2>
          {/* Add your live streams component or content here */}
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Music Streaming App. All rights reserved.</p>
      </footer>
    </div>
    )
}

export default HomePage