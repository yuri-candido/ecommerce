import './CSS/LoginSignup.css'

const LoginSignup = () => {
    return (
        <div className='loginsignup'>
            <div className='loginsignup-container'>
                <h1>Sign Up</h1>
                <div className='loginsignup-fields'>
                    <input type='text' placeholder='Your name'></input>
                    <input type='email' placeholder='Email Address'></input>
                    <input type='password' placeholder='Password'></input>
                </div>
                <button>Continue</button>
                <p className="loginsignup-login">Already have an account? <span>Login Here</span></p>

                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id="" />
                    <p>By continuing, i agree to the terms of use</p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup;