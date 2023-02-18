const handleErrors = (err) => {
    let errors = { username: '', password: '' }
    
    if (err.message.includes("user doesn't exist")) {
        errors.username = err.message 
    }

    if (err.message.includes('password is incorrect')) {
        errors.password = err.message
    }

    if (err.message.includes('duplicate key error')) {
        errors.username = 'This username already exists!'
    }

    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message
        })
    }
    
    return errors
}

module.exports = handleErrors