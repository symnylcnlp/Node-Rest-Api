const router = require('express').Router()
const adSoyadMaasController = require('../controllers/auth.js')
router.post('/ad-soyad-maas/create', adSoyadMaasController.create)
router.get('/ad-soyad-maas', adSoyadMaasController.findAll)
router.get('/ad-soyad-maas/:id', adSoyadMaasController.findOne)
router.put('/ad-soyad-maas/edit/:id', adSoyadMaasController.update)
router.delete('/ad-soyad-maas/delete/:id', adSoyadMaasController.delete)

module.exports = router
