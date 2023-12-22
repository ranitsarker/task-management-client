import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-gray-900 text-base-content rounded">
                <nav className="grid grid-flow-col gap-4 text-white">
                    <a className="link link-hover text-lg" href="/">Home</a>
                    <a className="link link-hover text-lg" href="/dashboard/ToDoList">Tasks</a>
                    <a className="link link-hover text-lg" href="/benefit">Who Can Benefit</a>
                </nav> 
                <nav>
                    <div className="grid grid-flow-col gap-4 text-white">
                        <a href="https://bd.linkedin.com/in/ranit-sarker-586074b4" target="_blank" rel="noopener noreferrer"><FaLinkedin  className="text-4xl"/></a>
                    </div>
                </nav> 
                <aside className="text-white text-base">
                    <p>Copyright © 2023 - All right reserved by TaskZen</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;