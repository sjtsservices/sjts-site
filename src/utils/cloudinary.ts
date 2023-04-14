import { v2 as cloudinary } from 'cloudinary';
import { env } from '~/env.mjs';

export default cloudinary.config({
    cloud_name: env.CLOUDINARY_CLOUD_NAME,
    api_key: env.CLOUDINARY_KEY,
    api_secret: env.CLOUDINARY_SECRET
})