//strint
const DIR = './public/upload';
const ERROR_ON_UPLOAD = 'Only .png, .jpg and .jpeg format allowed!';
const PORT = process.env.PORT || 4000;

//Arrays
const MIME_TYPE = ['image/png','image/jpg', 'image/jpeg']

//exports 
module.exports = {
    DIR,
    MIME_TYPE,
    ERROR_ON_UPLOAD,
    PORT
}