import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css"
function CourseNavigation() {
    const links = ["Home", "Modules", "Assignments", "Grades", ""];
    const { courseId } = useParams();
    const { pathname } = useLocation();
    return (
        <div className="course-nav-col list-group" style={{ width: 150 }}>
            {links.map((link, index) => (
                <div>
                <Link
                    key={index}
                    to={`/Kanbas/Courses/${courseId}/${link}`}
                    className={`list-group-item course-nav-links ${pathname.includes(link) && "active"}`}>
                    {link}
                </Link>
                </div>
            ))}
        </div>
    );
}
export default CourseNavigation;