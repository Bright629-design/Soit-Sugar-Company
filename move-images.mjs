import fs from 'fs';
import path from 'path';

const pubDir = 'c:/Users/PC/Desktop/Soit-Sugar-Company/public';
const imgDir = path.join(pubDir, 'images');

if (!fs.existsSync(imgDir)) {
    fs.mkdirSync(imgDir);
}

const files = fs.readdirSync(pubDir);
for (const file of files) {
    if (file === 'images') continue;
    
    // Check if it's a file
    const stat = fs.statSync(path.join(pubDir, file));
    if (!stat.isFile()) continue;

    const ext = path.extname(file).toLowerCase();
    if (['.jpg', '.jpeg', '.png', '.webp', '.jfif', '.svg', '.gif'].includes(ext)) {
        fs.renameSync(path.join(pubDir, file), path.join(imgDir, file));
    }
}
console.log('Images moved successfully.');
