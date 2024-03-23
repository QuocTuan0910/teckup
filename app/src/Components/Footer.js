function Footer(props){

    return(
        <>
        <div className="Footer">
            <div className="container">
                <div className="Footer-content row">
                    <div className="col-md-6 col-sm-6">
                    <img className="logo" src={'https://tekup.vn/wp-content/uploads/2022/08/logo-tekup-02.png'} alt="" />
                    <h6>Strategic Products – Transformative Business </h6>
                    </div>
                    <div className="col-md-3 col-sm-6">
                       
                        <ul>
                        <h4>Company</h4>
                            <li>
                                <a> About Teckup</a>
                            </li>
                            <li>
                                <a>Contact</a>
                            </li>
                            <li>
                                <a>Prive Policy</a>
                            </li>
                            <li>
                                <a> Term of use</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                   
                        <ul>
                        <h4>Services</h4>
                            <li>
                                <a>Comprehensive Solution Providing</a>
                            </li>
                            <li>
                                <a>Web / App Developing</a>
                            </li>
                            <li>
                                <a>Web / App Developing</a>
                            </li>
                            <li>
                                <a> <span class=" ">UX/UI Design</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )

}
export default Footer;