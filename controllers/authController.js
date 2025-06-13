import passport from "passport";

const login = passport.authenticate("local", {
    successRedirect: "/notes",
    failureRedirect: "/register",
    failuresFlash: "Invalid login :P"
});

const logout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
    });

    req.flash("success", "You have logged out :D");
    res.redirect("/");
};

const isAuthenticated = async (req, res, next) => {
    if(req.isAuthenticated()) {
        return next();
    }

    req.flash("danger", "Please log in :P");
    res.redirect("/login");
}

export default {
    login,
    logout,

    isAuthenticated
}