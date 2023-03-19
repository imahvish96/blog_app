const multer = require("multer");
const { DIR, MIME_TYPE, ERROR_ON_UPLOAD } = require("../constants");
const { date } = require("../config");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, DIR)
  },
  filename: (req, file, cb) => {
    console.log('TTTT',file);
    cb(null, `${date}${file.originalname.split(" ").join("_")}`);
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (!MIME_TYPE.includes(file.mimetype)) cb(new Error(ERROR_ON_UPLOAD));
    cb(null, true);
  },
});



module.exports = {
  upload,
};
