const model = require('../models/model.inscripcion');

module.exports.index = (req, res) => {
res.render('/inscripcion')};

module.exports.postInscripcion = async (req, res) => {
    try{
        let data;
        data = await model.insertInscripcion (tipoCurso, nombre, edad)
    }
     catch (e) {
        console.log(e);
        res.status(500).send('Error al inscribir');
    }
};