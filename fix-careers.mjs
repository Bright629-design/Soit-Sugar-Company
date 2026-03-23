import fs from 'fs';

let code = fs.readFileSync('c:/Users/PC/Desktop/Soit-Sugar-Company/src/app/careers/page.tsx', 'utf8');
code = code.replace(/onclick="this\.nextElementSibling[^"]+"/g, "onClick={(e) => { const el = e.currentTarget; el.nextElementSibling?.classList.toggle('hidden'); el.querySelector('svg')?.classList.toggle('rotate-180'); }}");
fs.writeFileSync('c:/Users/PC/Desktop/Soit-Sugar-Company/src/app/careers/page.tsx', code);
console.log('Fixed careers page.');
