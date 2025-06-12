// Replaces try/catch functionality by sending async errors right to the error handler
export const catchErrors = (fn) => {
    return function (req, res, next) {
        return fn(req, res, next).catch(next);
    }
}

export const flashValidationErrors = (err, req, res, next) => {
    if(!err.errors) return next(err);

    const errorKeys = Object.keys(err.errors);
    errorKeys.forEach((key) => req.flash("error", err.errors[key].message));
    res.redirect("/");
}