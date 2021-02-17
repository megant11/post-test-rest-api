const books = [{
        idBuku: 1,
        isbn: 12151,
        judul: 'mantab',
        sinopsis: 'Lorem ipsum dolor',
        penulis: 'aku',
        genre: 'gore'
    },
    {
        idBuku: 2,
        isbn: 112312,
        judul: 'saya',
        sinopsis: 'Lorem ipsum dolor',
        penulis: 'dia',
        genre: 'gore'
    },
    {
        idBuku: 3,
        isbn: 1341,
        judul: 'jarjit',
        sinopsis: 'Lorem ipsum dolor',
        penulis: 'upin',
        genre: 'gore'
    },
    {
        idBuku: 4,
        isbn: 56135,
        judul: 'tau ga sih',
        sinopsis: 'Lorem ipsum dolor',
        penulis: 'dorayaki',
        genre: 'gore'
    },
    {
        idBuku: 5,
        isbn: 1234567,
        judul: 'o gt',
        sinopsis: 'Lorem ipsum dolor',
        penulis: 'farhan',
        genre: 'gore'
    },
    {
        idBuku: 6,
        isbn: 54252,
        judul: 'leptop',
        sinopsis: 'Lorem ipsum dolor',
        penulis: 'axus',
        genre: 'gore'
    },



];


//GET
exports.getBuku = (req, res) => {
    return res.status(200).json({
        success: true,
        books,
    });
};


//POST
exports.postBuku = (req, res) => {
    const isbn = req.body.isbn;
    const judul = req.body.judul;
    const sinopsis = req.body.sinopsis;
    const penulis = req.body.penulis;
    let data = books[books.length - 1].idBuku + 1;

    const params = {
        idBuku: data,
        id,
        isbn,
        judul,
        sinopsis,
        penulis,


    };

    books.push(params);

    return res.status(201).json({
        success: true,
        params,
    });
};


//PUT
exports.putBuku = (req, res) => {
    const isbn = req.body.isbn;
    const judul = req.body.judul;
    const sinopsis = req.body.sinopsis;
    const penulis = req.body.penulis;
    const params = { id, isbn, judul, sinopsis, penulis };


    const fetchedBooks = books.find((i) => i.idBuku === idBuku);

    const updated = {...fetchedBooks, ...params };

    return res.status(200).json({
        success: true,
        updated,
    });
};

//DELETE
exports.deleteBuku = (req, res) => {
    const no = +req.params.idBuku;

    const deleted = books.filter((buku) => buku.idBuku === no);

    return res.status(200).json({
        success: true,
        message: `Deleted ${deleted[0].judul} from data!`,
        deleted,
    });
};