import { nanoid } from 'nanoid';

const getUid = (size = 16) => nanoid(size).replace('-', '');

export default getUid;