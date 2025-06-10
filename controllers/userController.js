const registerForm = async(req, res) => {
    res.send("Hello moto");
}

const register = async(req, res) => {
    res.send(req.body);
}

export default {
    registerForm,
    register
}