
const serviceCardData = {
    picUrl: "https://jabarekspres.com/wp-content/uploads/2020/11/Gisel-.jpg",
    name: "Gisella Anastasia",
    username: "gisella_anastasia",
    email: "gisella_anastasia@gmail.com",
    category: "Aktris",
    location: "Indonesia",
    currency: "IDR",
    price: 1600000,
    rating: 4.9,
    createdAt: "01-01-2022"
}

const EditSecurity = () => {
    const {picUrl, name, username, email, category, location, currency, price, rating, createdAt} = serviceCardData;

    return (
        <div className="card mb-3 py-3" style={{borderRadius: "12px", backgroundColor:"#373535"}}>
            <div className="card-body">
                <h5 className="card-title text-white mb-3">Change Password</h5>
                <form>
                    <div className="mb-3">
                        <label htmlFor="inputCurrentPass" className="form-label text-white">Current Password</label>
                        <input type="password" className="form-control" id="inputCurrentPass"/>
                        {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputNewPass" className="form-label text-white">New Password</label>
                        <input type="password" className="form-control" id="inputNewPass" aria-describedby='passwordHelpBlock'/>
                        <div id="passwordHelpBlock" className="form-text">
                            Your new password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputRetypeNewPass" className="form-label text-white">Retype New Password</label>
                        <input type="password" className="form-control" id="inputRetypeNewPass"/>
                    </div>
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    )
};

export default EditSecurity;
