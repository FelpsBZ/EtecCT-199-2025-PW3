const calcModel = require('../models/calcModel');

const calc = async (req, res) => {



    try {
        const {expressao} = req.body;


        const result = await calcModel.calc(expressao);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    calc
};
