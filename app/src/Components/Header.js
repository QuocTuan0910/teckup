function Header(props) {

    return (
        <>
            <div className="header">
                <div className="container">
                    <nav className="navbar navbar-expand-lg fixed-top">
                        <div className="container">
                            <img className="logo" src={'https://tekup.vn/wp-content/uploads/2022/08/logo-tekup-02.png'} alt="" />
                            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                                </div>
                                <div className="offcanvas-body">
                                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">About Us</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Services</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Projects</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Contact</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Blog</a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Language
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">Việt Nam</a></li>
                                                <li><a className="dropdown-item" href="#">English</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <button className="button btn btn-warning" type="submit">Contact Us</button>
                                </div>
                            </div>
                        </div>
                    </nav>

                    <div className="menu-bottom d-flex justify-content-between">
                        <a className="d-sm-none d-md-block d-none d-sm-block" href="">danang, vietnam </a>
                        <a className="d-sm-none d-md-block d-none d-sm-block" href=""> Follow Us on
                            <i class="icon fa-brands fa-facebook"></i>
                            <i class="icon fa-brands fa-linkedin"></i>
                        </a>

                    </div>
                    <h1>Projects</h1>


                </div>



            </div>

        </>
    )

}
export default Header;