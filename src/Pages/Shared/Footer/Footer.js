import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    fab,
    faYoutube,
    faFacebook,
    faGithub
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import "./Footer.css";
library.add(fab, faYoutube, faFacebook, faGithub);

export default function App() {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className="text-center mt-auto bg-danger text-white fst-italic d-lg-flex justify-content-between">
            <h3 className="p-3">Copyright &copy; {year} by Fruit Jet</h3>
            <div className="fs-2 text-white d-inline-flex">
                <div className="p-3">
                    <a
                        href="https://www.facebook.com/groups/288111895977592"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={["fab", "fa-facebook"]}
                            className="text-black"
                        />
                    </a>
                </div>
                <div className="p-3">
                    <a
                        href="https://www.youtube.com/c/ProgrammingHero"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={["fab", "fa-youtube"]}
                            className="text-black"
                        />
                    </a>
                </div>
                <div className="p-3">
                    <a
                        href="https://github.com/ProgrammingHero1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={["fab", "fa-github"]}
                            className="text-black"
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
}
