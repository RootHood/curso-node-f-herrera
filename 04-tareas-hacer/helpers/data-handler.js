import * as fs from 'fs';

const path = './storage/data.json';

export const saveInStorage = (data) => {
    fs.writeFileSync(path, data);
}

export const getTasks = () => {
    if (!fs.existsSync(path)) {
        return null;
    }
    const info = fs.readFileSync(path, { encoding: 'utf-8' });
    return JSON.parse(info);
}