//jshint esversion:6


import './footer.styles.scss';
const Footer = () =>{
    return(
        <div className="footer container-fluid">
            <div className="row d-none d-sm-flex">
                <div className="col-4 text-center">
                    <h3>Find us</h3>
                </div>
                <div className="col-4 text-center">
                    <h3>Payment Partners</h3>  
                </div>
                <div className="col-4 text-center">
                    <h3>Delivery Partners</h3>
                </div>
            </div>
            <div className="row d-none d-sm-flex" id="t10">
                <div className="cont-ca col-4  text-center">
                    <p>Shop U-429 , Urdu Bazar,  Rawalpindi, <br/>Punjab, Pakistan</p>
                </div>
                <div className="col-4 text-center">
                    <div className="row foot-pic">
                        <div className="col-6 ">
                            <img src="footerImages\easypaisa-logo.png" alt=""/>
                        </div>
                        <div className="col-6 ">
                            <img src="footerImages\jazz-cash-logo-removebg-preview.png" alt=""/>
                        </div>    
                    </div>
                </div>
                <div className="col-4 text-center">
                    
                </div>
            </div>
            <div className="row ">
                <div className="col-12 text-center">
                    
                </div>
                <div className="col-12 text-center"><p>Akhtar Stationners&reg;</p></div>
            </div>
        </div>
    );
};

export default Footer;