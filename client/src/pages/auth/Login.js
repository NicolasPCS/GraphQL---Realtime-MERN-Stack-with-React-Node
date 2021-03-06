import React, {useState} from 'react';

const Login = () => {
    
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState('')

    const handleSubmit = () => {
        //
    }

    return (
        <div className="container p-5">
                <h4>Login</h4>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>
                            Email Addres
                        </label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Enter email" disabled={loading}/>
                    </div>
                </form>
        </div>
    )
}

export default Login;