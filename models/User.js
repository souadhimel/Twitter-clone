const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({

    firstName:{
        type:String,
        minLength:1,
        required:true,
        trim:true,

    },
    lastName:{
        type:String,
        minLength:1,
        required:true,
        trim:true,

    },
    userName:{
        type:String,
        minLength:6,
        required:true,
        trim:true,
        unique:true

    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        validator:{
            validate:function(v){
                return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(v)
            }
        }

    },

    password:{
        type:String,
        required:true,
        validator:{
            validate:function(v){
                return/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})$/ .test(v)
            }
        }

    },
    profileAvatar:{
        type:String,
        required:true,
    }

},{
    timestamps:true,
})
const User=new mongoose.model('User',userSchema)

module.exports=User;