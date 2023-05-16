// import { NavLink } from "react-router-dom";
import "../components/styles/footer.css";
// import { BsDiscord, BsTwitter } from "react-icons/bs";
// import { TbBrandMeta } from "react-icons/tb";
// import { GrInstagram } from "react-icons/gr";
// import { GrLinkedin } from "react-icons/gr";
const Footer = () => {
    return (
        <>
            {/* <section className="contact-short">
                <div className="grid grid-column">
                    <div>
                        <h3>For any Further Queries</h3>
                        <h3>Talk To Us</h3>
                    </div>
                </div>
                <NavLink to="#">
                    <button>Get Started</button>
                </NavLink>
            </section> */}

            <footer className="container grid grid-four-column">
                <div className="footer-about">
                    <h3>Linquester</h3>
                    <p>
                        Harnessed for productivity.Developed for collaboration.
                        welcome to the platform where you find the right
                        partners for your upcoming projects.
                    </p>
                </div>
                <div className="footer-about">
                    <h3>Subscribe To Get Important Updates</h3>
                    <form action="#">
                        <input
                            type="email"
                            required
                            autoComplete="off"
                            placeholder="Email"
                            value="Subscribe"
                        />
                    </form>
                </div>
                {/* <div className="footer-social">
                    <h3>Follow Us On</h3>
                    <div className="social-icons">
                        <BsDiscord />
                        <BsTwitter />
                        <TbBrandMeta />
                        <GrInstagram />
                        <GrLinkedin />
                    </div>
                </div> */}
            </footer>
        </>
    );
};

export default Footer;
