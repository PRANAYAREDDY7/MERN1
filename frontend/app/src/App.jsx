// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App




import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddStudent from './Components/AddStudent';
import StudentList from './Components/StudentList';

const App = () => {
  return (
    <Router>
      <div>
        <h1>🎓 Student Management Dashboard</h1>
        <nav style={styles.navbar}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/add" style={styles.link}>Add Student</Link>
          <Link to="/list" style={styles.link}>Student List</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddStudent />} />
          <Route path="/list" element={<StudentList />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => (
  <div>
    <h2>Welcome to Student Management System</h2>
    <p>Use the navigation to add or view students.</p>
  </div>
);

const styles = {
  navbar: {
    display: 'flex',
    gap: '20px',
    marginBottom: '20px',
    padding: '10px',
    backgroundColor: '#f0f0f0',
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold',
  },
};

export default App;
