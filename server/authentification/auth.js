const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, "token-pour-se-connecter");
        next();
    } catch (error) {
        res.status(401).json({ message: "Pas de Token, Veuiller vous connectez d'abort pour en générer !" });
    }
};