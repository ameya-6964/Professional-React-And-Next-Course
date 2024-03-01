function App() {
  return (
    <main>
      <div className="card">
        <h1 className="title">Fancy Counter</h1>
        <p className="count">0</p>
        <button className="reset-btn">Reset</button>
        <div className="button-container">
          <button>-</button>
          <button>+</button>
        </div>
      </div>
    </main>
  );
}

export default App;
