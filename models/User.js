const mongoose = require('mongoose')
const { Schema } = mongoose
const bcrypt = require('bcrypt')

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: [true, 'Please enter an email adress!'],
            unique: true
        },
        password: {
            type: String,
            required: [true, 'Please enter a password!'],
            minLength: [6, 'Please enter at least 6 characters!'],
            validate: {
                validator: function(v) {
                    return /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#%^&*()_+\-=[\]{}|;':",.\/<>?~`]).+/.test(v)
                },
                message: 'Please enter at least one lowercase letter, one uppercase letter, one number and one special character!'
            }
        },
        createdAt: {
            type: Date,
            default: Date.now()
        }
    },
    {
        statics: {
            async matchUserCredentials(username,password) {
                const user = await this.findOne({ username })
                if (!user) throw Error("This user doesn't exist!")
                
                const auth = await bcrypt.compare(password, user.password)
                if (auth) return user
                
                if (!auth) throw Error('The entered password is incorrect!')  
            }
        }
    }
)

userSchema.pre('save', async function(next) {
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

module.exports = mongoose.model('user', userSchema)