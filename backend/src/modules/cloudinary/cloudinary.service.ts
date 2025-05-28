import { Injectable } from '@nestjs/common';
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';

@Injectable()

export class CloudinaryService {
    constructor() {
        v2.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
        });
    }
    async uploadFile(filePath: string) {
        const uploadFilePromise = new Promise((resolve, reject) => {
            const uploadFile = v2.uploader.upload(filePath, (error, result) => {
                if (error) {
                    reject(error);
                } else if (result) {
                    resolve(result);
                } else {
                    reject(new Error('Upload result is undefined'));
                }
            }
            );
        });
        let result:any = await uploadFilePromise;
        return result.secure_url;
    }
}
