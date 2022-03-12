import { nanoid } from 'nanoid';

const downloadImg = (src: string) => {
    const image = new Image();

    image.setAttribute('crossOrigin', 'anonymous');

    image.onload = () => {
        const doc = document;
        const canvas = doc.createElement('canvas');
        canvas.width = image.width;
        canvas.height = image.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0, image.width, image.height);
        const url = canvas.toDataURL('image/png');

        const link = doc.createElement('a');
        const event = new MouseEvent('click');
        link.download = nanoid(12).replaceAll('-', '_');
        link.href = url;
        link.dispatchEvent(event);
        link.remove();
    };

    image.src = src;
};

export default downloadImg;