import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap/dist/css/bootstrap.css";
import { Link, useLocation } from "react-router-dom";
function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
    const icons = ["fa-user", "fa-gauge", "fa-book", "fa-calendar", "fa-inbox", "fa-clock", "fa-tv", "fa-question", "fa-question"];

    const { pathname } = useLocation();
    return (
        <div className="kanbas-navigation-list-group list-group ">
            <li className="list-group-item menu-item-text neu-logo">

            </li>
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/${link}`}
                    className={`list-group-item menu-item-text ${pathname.includes(link) && "active"}`}>

                    <div className="kanbas-navigation-icon">
                        <i className={`fas fa-2x ${icons[index]}`}></i>
                    </div>
                    <div className="kanbas-navigation-label">{link}</div>
                </Link>
            ))}
        </div>
    );
}
export default KanbasNavigation;