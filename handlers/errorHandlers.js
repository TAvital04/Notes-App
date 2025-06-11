// Replaces try/catch functionality by sending async errors right to the error handler
export const catchErrors = (fn) => {
    return function (req, res, next) {
        return fn(req, res, next).catch(next);
    }
}