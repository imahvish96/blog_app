const multer = require('multer');
const { DIR, MIME_TYPE, ERROR_ON_UPLOAD } = require('../constants');
const { date } = require('../config')


const storage = multer.diskStorage({
    destination: DIR,
    filename: (req, file, cb) => {
      cb( null, `${date}${file.originalname.split(' ').join('_')}`);
    },
});

const upload = multer({storage,
    fileFilter: (req, file, cb) => {
        if (!MIME_TYPE.includes(file.mimetype)) cb(null, false);
        cb(null, true);
        return cb(new Error(ERROR_ON_UPLOAD));
        
    },
});

module.exports = {
    upload
}
  