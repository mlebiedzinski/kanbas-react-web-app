

function HomeButtons() {
    const buttons = ['Import Existing Content', 'Import From Commons', 'Choose Home Page', 'Choose Home Page',
        'View Course Stream', 'New Announcement', 'New Analytics', 'View Course Notifications'];
    return (

        <div className='col'>
            <div className="row">
                <div class="col-6 p-2">
                    <button type="button" className="form-control btn btn-light">Unpublish</button>
                </div>
                <div class="col-6 p-2">
                    <button type="button" className="form-control btn btn-success">Published</button>
                </div>

            </div>

            <br />

            <div className="d-grid gap-2 p-2">
                {buttons.map((button, index) => (
                    <div>
                        <button
                            key={index}
                            // to={}
                            className={`btn btn-light form-control`}>
                            {button}
                        </button>
                    </div>
                ))}
            </div>

            <br />
            <div>
                <h6>Coming Up</h6>
                View Calendar
            </div>

            <hr />
        </div>
    );
}
export default HomeButtons


