const express = require('express')
const router = express.Router()

const RegistrasiController = require('../controllers/RegistrasiController')


router.post('/registrasi', RegistrasiController.registrasi)
router.get('/generatePdf', RegistrasiController.generatePdf)
// router.get('/:id', AuthorController.getAuthorById)
// router.post('/',AuthorController.saveAuthor)
// router.delete('/:id',AuthorController.deleteAuthor)
// router.patch('/:id',AuthorController.updateAuthor)

module.exports = router

