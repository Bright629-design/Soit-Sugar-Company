import fs from 'fs';
import path from 'path';

const SRC_APP = 'c:/Users/PC/Desktop/Soit-Sugar-Company/src/app';

const pagesToFix = [
    'about/page.tsx', 
    'careers/page.tsx', 
    'contact/page.tsx', 
    'farmers/page.tsx', 
    'news/page.tsx', 
    'products/page.tsx', 
    'sustainability/page.tsx'
];

for (const page of pagesToFix) {
    const tsxPath = path.join(SRC_APP, page);
    if (fs.existsSync(tsxPath)) {
        let tsxContent = fs.readFileSync(tsxPath, 'utf8');
        
        // Find the <main> tag
        const mainIdx = tsxContent.indexOf('<main');
        if (mainIdx !== -1) {
            // Check if there is a <header ...> right before it
            // Typically: <div className="bg-background"> <header>...</header> <main>...</main> </div>
            // We want to remove the <header>...</header> that appears before <main>
            const headerEndIdx = tsxContent.lastIndexOf('</header>', mainIdx);
            const headerStartIdx = tsxContent.lastIndexOf('<header', headerEndIdx);
            
            if (headerStartIdx !== -1 && headerEndIdx !== -1 && headerStartIdx < mainIdx) {
                // Remove the block
                const before = tsxContent.substring(0, headerStartIdx);
                const after = tsxContent.substring(headerEndIdx + 9);
                tsxContent = before + after;
                fs.writeFileSync(tsxPath, tsxContent);
                console.log(`Removed duplicate header in ${page}`);
            }
        }
    }
}

// Fix Header.tsx to be solid background
const headerPath = 'c:/Users/PC/Desktop/Soit-Sugar-Company/src/components/Header.tsx';
let headerContent = fs.readFileSync(headerPath, 'utf8');
headerContent = headerContent.replace(
    'className="sticky top-0 z-50 w-full transition-all duration-300 bg-transparent"',
    'className={cn("sticky top-0 z-50 w-full transition-all duration-300", isScrolled ? "bg-background border-b shadow-sm" : "bg-background")}'
);
fs.writeFileSync(headerPath, headerContent);
console.log('Fixed Header.tsx background');
