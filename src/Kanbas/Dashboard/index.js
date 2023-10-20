import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css"
function Dashboard() {
    const courses = db.courses;
    return (
        <div>
            <h1>Dashboard</h1>
            <hr />
            <h2>Published Courses</h2>
            <hr />
            <div className="list-group">
                {courses.map((course) => (
                    <Link
                        key={course._id} to={`/Kanbas/Courses/${course._id}`}
                        className="list-group-item">
                        <div class="card card-margins">
                            <div class="card-header bg-primary"></div>
                            <div class="card-body">
                                <h5 class="card-title black-text">{course.name}</h5>
                                <p class="card-text black-text"><b>{course.number}</b><br />{course.startDate}-{course.endDate}</p>
                            </div>
                        </div>
                        
                    </Link>
                ))}
            </div>
        </div>
    );
}
export default Dashboard;