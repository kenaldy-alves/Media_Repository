const multer = require('multer')
const path = require('path')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (path.extname(file.originalname) === '.mp4') {
            cb(null, `./assets${process.env.VIDEO_PATH}`)
        }
        if (path.extname(file.originalname) === '.png' || path.extname(file.originalname) === '.jpeg') {
            cb(null, `./assets${process.env.IMAGE_PATH}`)
        }
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

var parser = multer({ storage: storage })

module.exports = async (req, res) => {
    parser.single('avatar')(req, res, err => {
        if (err)
            res.status(500).json({ error: 1, payload: err });
        else {
            const url = path.extname(req.file.originalname) === '.mp4' ? `${process.env.VIDEO_PATH}/${req.file.originalname}` : `${process.env.IMAGE_PATH}/${req.file.originalname}`
            res.status(200).json({ error: 0, payload: { id: req.file.originalname, url: url } });
        }
    });
}