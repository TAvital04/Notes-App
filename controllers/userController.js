import userHandler from "../handlers/userHandler.js";

const registerForm = async(req, res) => {
    res.send("Hello moto");
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

export default {
    registerForm,
    register
}