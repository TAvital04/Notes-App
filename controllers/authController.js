import passport from "passport";

const login = passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failuresFlash: "Invalid login :P"
});

export default {
    login
}