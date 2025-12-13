import { Link } from "react-router";

export default function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" >
        <p className="text-2xl font-bold text-gradient">Resumind</p>
      </Link>
      <Link to="/upload" className="primary-button w-fit">
        <button>Upload Resume</button>
      </Link>
    </nav>
  );
}