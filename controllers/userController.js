import userHandler from "../handlers/userHandler.js";
import {body, validationResult} from "express-validator";

// Register
    const registerForm = async(req, res) => {
        const errors = req.session.formErrors || [];
        delete req.session.formErrors;

        res.render("register", {
            title: "Register",
            errors
        });
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
                req.session.formErrors = errors.array().map(err => err.msg);
                res.redirect("/register");
            } else {
                next();
            }
        }
    ]

// Login
    const loginForm = async(req, res) => {
        res.render("login", {
            title: "Login"
        })
    }

export default {
    registerForm,
    register,
    validateRegister,

    loginForm
}