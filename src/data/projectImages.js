import aboutImg from '../images/photo/about.jpg';
import indexingImg from '../images/photo/2 Индексирование.JPG';
import databaseImg from '../images/photo/3 Базы.JPG';
import archiveImg from '../images/photo/4 электронный архив.JPG';
import dataEntryImg from '../images/photo/5 Ввод даних.JPG';
import loyaltyImg from '../images/photo/6 Обробка програм лояльності.png';

export const projectImages = {
    'images/photo/2 Индексирование.JPG': indexingImg,
    'images/photo/3 Базы.JPG': databaseImg,
    'images/photo/4 электронный архив.JPG': archiveImg,
    'images/photo/5 Ввод даних.JPG': dataEntryImg,
    'images/photo/6 Обробка програм лояльності.png': loyaltyImg,
    default: aboutImg
};

export const getProjectImage = (path) => {
    return projectImages[path] || projectImages.default;
}; 