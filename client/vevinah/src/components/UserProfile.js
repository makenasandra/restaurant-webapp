import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {toast, ToastContainer} from 'react-toastify';
import Carousel1 from '../assets/dineinphoto.jpg';

function UserProfile () {
    const [user, setUser] = useState({});

    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const navigate = useNavigate();
    const image = [Carousel1];

    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value,
        });

    };

    const formatUserInfo = () => {
        for (let field in user) {

            if(!(field === ("password" || "confirm_password"))){
                user[field] = user[field].toLocaleLowerCase();
            }
        }
        return user;
    }

    const validate = () => {
        const {first_name, last_name, email, phone, password, confirm_password} = user;
        let result = true;

        if (first_name.length<3) {
            result = false;
            toast.warning("First Name must be at least 3 characters");
        }

        if (last_name.length<3) {
            result = false;
            toast.warning("Last Name must be at least 3 characters");
        }

        if (!email || email.trim() === "") {
            result = false;
            toast.warning("Please enter valid email");
        }

        if (!phone || phone.length<10) {
            result = false;
            toast.warning("Please enter valid phone number");
        }


        let passwordRegex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+{}|:<>?~])/;
        console.log(passwordRegex.test(password))
        console.log(password)

        if(!password || password.trim() === "" || passwordRegex.test(password) === false || password.length < 8){
            result = false;
            toast.warning("Password must be at least 8 characters and have at least one capital letter, number " +
                "and special character");
        } else if(confirm_password !== password){
            result = false;
            toast.warning("Passwords don't match!");

        }




        return result;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let formattedUser = formatUserInfo()
        console.log(JSON.stringify(formattedUser));
        if (validate()) {
            fetch('https://veni-vay2.onrender.com/signup', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(formattedUser),
            })
                .then((res) => {
                    if (res.status === 200) {
                        toast.success('Registered successfully.');
                        setRegistrationSuccess(true);
                        navigate('/sign_in', {replace: true});
                    } else {
                        toast.error('Registration failed.');
                    }
                })
                .catch((err) => {
                    toast.error('Failed: ' + err.message);
                    console.log(err);
                    alert('Invalid');
                });
        }
    };

    return (
        <div className="offset-lg-3 col-lg-6">
            <img src={image} alt="menu" className="background-image"/>
            <div className="card">
                <div className="signup-form-dialogue">
                    <h1 className="card-header">User Profile</h1>
                    <form className="container" onSubmit={handleSubmit}>
                        <div className="row">
                            {['First name', 'Last name', 'Email', 'Phone', 'Password', 'Confirm Password'].map(
                                (field) => (
                                    <div key={field} className="col-lg-6">
                                        <div className="form-group">
                                            <label >
                                                {field}
                                                <span className="errmsg">*</span>
                                            </label>
                                            <input
                                                type={field === ('Password' || 'Confirm Password') ? 'password' : 'text'}
                                                value={
                                                    user[
                                                        field === 'First name'
                                                            ? 'first_name'
                                                            : field === 'Last name'
                                                                ? 'last_name'
                                                                : field === 'Email'
                                                                    ? 'email'
                                                                    : field === 'Phone'
                                                                        ? 'phone'
                                                                        : field === 'Password'
                                                                            ? 'password'
                                                                            : field === 'Confirm Password'
                                                                                ? 'confirm_password'
                                                                                : ''
                                                        ]
                                                }
                                                onChange={handleChange}
                                                name={
                                                    field === 'First name'
                                                        ? 'first_name'
                                                        : field === 'Last name'
                                                            ? 'last_name'
                                                            : field === 'Email'
                                                                ? 'email'
                                                                : field === 'Phone'
                                                                    ? 'phone'
                                                                    : field === 'Password'
                                                                        ? 'password'
                                                                        : field === 'Confirm Password'
                                                                            ? 'confirm_password'
                                                                            : ''
                                                }
                                                required
                                            />
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                        <ToastContainer
                            position="top-center"
                            autoClose={9000}/>
                        <div className="signup-footer">
                            <button type="submit" className="continue-shopping">
                               Update Profile
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {registrationSuccess && (
                <div className="alert alert-success" role="alert">
                    Registration successful! You can now sign in.
                </div>
            )}
        </div>
    );
};

export default UserProfile;
