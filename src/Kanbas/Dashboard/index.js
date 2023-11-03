import { React, useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css"
function Dashboard(
    { courses, course, setCourse, addNewCourse, deleteCourse, updateCourse}
) {
    
    return (
        <div>
            <h1>Dashboard</h1>
            <hr />
            <h2>Published Courses</h2>
            <hr />
            <h5>Course</h5>
            <input value={course.name} className="form-control"
                onChange={(e) => setCourse({ ...course, name: e.target.value })} />
            <input value={course.number} className="form-control"
                onChange={(e) => setCourse({ ...course, number: e.target.value })} />
            <input value={course.startDate} className="form-control" type="date"
                onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
            <input value={course.endDate} className="form-control" type="date"
                onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
            <button onClick={addNewCourse} >
                Add
            </button>
            <button onClick={updateCourse} >
                Update
            </button>
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
                        <button
                            onClick={(event) => {
                                event.preventDefault();
                                setCourse(course);
                            }}>
                            Edit
                        </button>
                        <button
                            onClick={(event) => {
                                event.preventDefault();
                                deleteCourse(course._id);
                            }}>
                            Delete
                        </button>
                        {course.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}
export default Dashboard;