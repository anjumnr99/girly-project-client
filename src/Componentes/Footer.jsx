

const Footer = ({mode}) => {
    return (
        <div className={`bg-base-200 ${mode}`}>
            <footer className="footer max-w-[1440px] mx-auto p-10  text-base-content">
                <aside className={`${mode}`}>
                    <img className=" w-20 " src="https://see.fontimg.com/api/renderfont4/PK12m/eyJyIjoiZnMiLCJoIjo4MywidyI6MTAwMCwiZnMiOjgzLCJmZ2MiOiIjNzE3MTdEIiwiYmdjIjoiI0YzRjNFOCIsInQiOjF9/R2lybHk/geraldine-personal-use-italic.png" alt="" />
                    <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                </aside>
                <nav className={`${mode}`}>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className={`${mode}`}>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className={`${mode}`}>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;