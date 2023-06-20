import React, { useState } from 'react'

const Form = () => {

    const [info, setInfo] = useState({
        name: '',
        email: '',
        password: '',
        confirmpassword: ''
    })

    const handleChange = (e) => {
        setInfo({
            ...info, [e.target.id]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setInfo({
            name: '',
            email: '',
            password: '',
            confirmpassword: ''
        })
        console.log('Form submitted')
    }

    return (

    <div className="container mt-5">
        <h1>Form</h1>
        <div className="col-6 mx-auto mt-4">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                <input type="text" className="form-control" id="name" placeholder="Enter name" value={info.name} onChange={handleChange}/>
                {info.name && info.name.length < 3 ? <p className="text-danger">Name must be at least 3 characters</p> : ''}
                </div>
                <div className="mb-3">
                <input type="email" className="form-control" id="email" placeholder="Enter email" value={info.email} onChange={handleChange}/>
                {info.email && info.email.length < 5 ? <p className="text-danger">Email must be at least 5 characters</p> : ''}
                </div>
                <div className="mb-3">
                <input type="password" className="form-control" id="password" placeholder="Enter password" value={info.password} onChange={handleChange}/>
                {info.password && info.password.length < 8 ? <p className="text-danger">Password must be at least 8 characters</p> : ''}
                </div>
                <div className="mb-3">
                <input type="password" className="form-control" id="confirmpassword" placeholder="Confirm password" value={info.confirmpassword} onChange={handleChange}/>
                {info.confirmpassword && info.confirmpassword !== info.password ? <p className="text-danger">Passwords must match</p> : ''}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        <div className="mt-5">
            <p>Name: {info.name}</p>
            <p>Email: {info.email}</p>
            <p>Password: {info.password}</p>
        </div>
    </div>
    )
}

export default Form