import userHandler from "../handlers/userHandler.js";
import {body, validationResult} from "express-validator";

// Register
    const registerForm = async(req, res) => {
        res.send("error");
    }

    const register = async(req, res) => {
        // Redirect depending on login success
        const callback = (err, newUser) => {
            if(err) {
                res.redirect("/register");
            } else {
                res.redirect("/login");
            }
        }

        // Validate register submittal
        await userHandler.register({
            username: req.body.username,
            password: req.body.password,
            callback
        });
    }

    const validateRegister = [
        body("username").notEmpty().withMessage("Email address is required"),
        body("username").isEmail().withMessage("Please provide a valid email"),
        
        body("password").isLength({min: 6}).withMessage("Password must be at least 6 characters"),
        
        body("confirm-password").custom((value, {req}) => {
            return value === req.body.password;
        }).withMessage("Password must match Confirm Password"),

        (req, res, next) => {
            const errors = validationResult(req);
            
            if(!errors.isEmpty()) {
                res.send(errors.errors.map((err) => err.msg).join(". "));
            } else {
                next();
            }
        }
    ]

// Login
    const loginForm = async(req, res) => {
        res.send("tomato");
    }

export default {
    registerForm,
    register,
    validateRegister,

    loginForm
}