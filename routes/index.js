const controller = require('../controllerInscription')

router.get ('/inscripcion', controller.index)

router.post('/new-inscripcion', controller.postInscripcion)