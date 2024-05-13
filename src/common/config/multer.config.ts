import { MulterOptions } from '@nest-lab/fastify-multer';

export const multerConfig: MulterOptions = {
  dest: './uploads',
  storage: {
    _handleFile(req, file, callback) {
      console.log(req, file, callback());
    },
    _removeFile(req, file, callback) {
      return callback();
    },
  },
};
// export const multerConfig: MulterOptions = {
//   storage: diskStorage({
//     destination: './upload/files',
//     filename: (req, file, cb) => {
//       const fileName = path.parse(file.originalname).name.replace(/\s/g, '');

//       const extension = path.parse(file.originalname).ext;
//       cb(null, `${fileName}${extension}`);
//     },
//   }),
// };
