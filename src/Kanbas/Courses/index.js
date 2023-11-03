import db from "../../Kanbas/Database";
import "./index.css"
import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";

function Courses({courses}) {
    const { courseId } = useParams();
    const { pathname } = useLocation();

    const course = courses.find((course) => course._id === courseId);
    return (
        <div>

            <nav className='breadcrumbDividerStyle' aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li><i className="three-bars-icon fa-solid fa-bars"></i></li>
                    <li class="breadcrumb-item red-text">{course._id}{course.name}</li>
                    <li class="breadcrumb-item active" aria-current="page">{pathname}</li>
                </ol>
            </nav>

            <hr />
            <CourseNavigation />
            <div>
                <div
                    className="overflow-y-scroll position-fixed bottom-0 end-0"
                    style={{
                        left: "320px",
                        top: "50px",
                    }}
                >
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Assignments/:assignmentId"
                            element={<AssignmentEditor />} />
                        <Route path="Grades" element={<Grades />} />
                    </Routes>
                </div>

            </div>
        </div>
    );
}
export default Courses;
