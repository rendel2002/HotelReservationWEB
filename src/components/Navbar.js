import React from "react";

export default function Navbar() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  function logout(){
    localStorage.removeItem('currentUser')
    window.location.href= '/login'
  }
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand " href="#">
            Plaza Hotel Dagupan Reservation
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-5">
              {user ? (
                <>
                  <div className="dropdown">
                    <button
                      className="btn btn-dark dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                     <i className="fa fa-user mr-1"></i>{user.name}
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a className="dropdown-item" href="#">
                        Bookings
                      </a>
                      <a className="dropdown-item" href="#" onClick={logout} >
                        Logout
                      </a>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <a className="nav-link active" href="/register">
                      Register
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/login">
                      Login
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
