const express = require('express');
const router = express.Router();

const {
    getBuku,
    postBuku,
    putBuku,
    deleteBuku,
} = require('../controllers/buku1');

router.get('/buku', getBuku);
router.post('/buku', postBuku);
router.put('/buku/:idBuku', putBuku);
router.delete('/buku/:idBuku', deleteBuku);

module.exports = router;