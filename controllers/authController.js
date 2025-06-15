import passport from "passport";

const login = passport.authenticate("local", {
    successRedirect: "/notes",
    failureRedirect: "/register",
});

const logout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
    });

    res.redirect("/");
};

const isAuthenticated = async (req, res, next) => {
    if(req.isAuthenticated()) {
        return next();
    }

    res.redirect("/login");
}

export default {
    login,
    logout,

    isAuthenticated
}