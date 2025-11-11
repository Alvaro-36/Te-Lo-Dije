import * as fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getImage = async (img: string): Promise<string> => {
    switch (img) {
        case "newspaper": {
            const thumbnailType = "newspaper"
            const thumbnailsPath = path.join(__dirname, '..', '..', 'plantillaGoogle', 'thumbnails', 'newspaper');
            const imgAmmount = (await fs.readdir(thumbnailsPath)).length;
            const selectedImage = Math.floor(Math.random() * imgAmmount);
            const fakeResultItemImage = `/thumbnails/${thumbnailType}/${thumbnailType}${selectedImage}.png`;
            return imgAmmount>0?fakeResultItemImage:"";
        }
        case "wiki": {
            const thumbnailType = "wiki"
            const thumbnailsPath = path.join(__dirname, '..', '..', 'plantillaGoogle', 'thumbnails', 'wiki');
            const imgAmmount = (await fs.readdir(thumbnailsPath)).length;
            const selectedImage = Math.floor(Math.random() * imgAmmount);
            const fakeResultItemImage = `/thumbnails/${thumbnailType}/${thumbnailType}${selectedImage}.png`;
            return imgAmmount>0?fakeResultItemImage:"";
        }
        default:
            return "";
    }
};
