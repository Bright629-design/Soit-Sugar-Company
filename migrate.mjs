import fs from 'fs';
import path from 'path';

// Helper to convert HTML to JSX string
function htmlToJsx(html) {
    let jsx = html;
    
    // Convert class to className
    jsx = jsx.replace(/class=/g, 'className=');
    
    // Convert for to htmlFor
    jsx = jsx.replace(/for=/g, 'htmlFor=');
    
    // Convert inline styles - simple regex for 'background-image: url(...)'
    jsx = jsx.replace(/style="([^"]*)"/g, (match, styleString) => {
        const styles = styleString.split(';').filter(s => s.trim());
        const styleObj = {};
        styles.forEach(s => {
            const [key, value] = s.split(':').map(str => str.trim());
            if (key && value) {
                // camelCase the key
                const camelKey = key.replace(/-([a-z])/g, g => g[1].toUpperCase());
                styleObj[camelKey] = value;
            }
        });
        return `style={${JSON.stringify(styleObj)}}`;
    });

    // Close self-closing tags
    const selfClosingTags = ['img', 'input', 'br', 'hr', 'source', 'link', 'meta'];
    selfClosingTags.forEach(tag => {
        // Find tags that aren't closed properly e.g., <img src="..."> instead of <img src="..." />
        const regex = new RegExp(`<${tag}([^>]*?)(?<!/)>`, 'gi');
        jsx = jsx.replace(regex, `<${tag}$1 />`);
    });
    
    // Convert HTML comments to JSX comments
    jsx = jsx.replace(/<!--(.*?)-->/gs, '{/*$1*/}');
    
    // Update href="page.html" to href="/page"
    jsx = jsx.replace(/href="([^"]+)\.html(#?[^"]*)"/g, 'href="/$1$2"');
    jsx = jsx.replace(/href="index\.html"/g, 'href="/"');
    jsx = jsx.replace(/href="([^"]+)\.html"/g, 'href="/$1"');
    
    // Fix any image paths: images/ -> /images/ (if not already /images/)
    jsx = jsx.replace(/src="images\//g, 'src="/images/');
    jsx = jsx.replace(/src="([^"]*\.(jpg|png|webp|jpeg|svg))"/gi, (match, src) => {
        if (!src.startsWith('/') && !src.startsWith('http')) {
            return `src="/${src}"`;
        }
        return match;
    });

    return jsx;
}

const PUBLIC_HTML = 'c:/Users/PC/Desktop/Soit-Sugar-Company/public_html';
const SRC_APP = 'c:/Users/PC/Desktop/Soit-Sugar-Company/src/app';
const SRC_COMPONENTS = 'c:/Users/PC/Desktop/Soit-Sugar-Company/src/components';

const pagesToMigrate = [
    { html: 'index.html', tsx: 'page.tsx' },
    { html: 'about.html', tsx: 'about/page.tsx' },
    { html: 'careers.html', tsx: 'careers/page.tsx' },
    { html: 'contact.html', tsx: 'contact/page.tsx' },
    { html: 'farmers.html', tsx: 'farmers/page.tsx' },
    { html: 'news.html', tsx: 'news/page.tsx' },
    { html: 'products.html', tsx: 'products/page.tsx' },
    { html: 'sustainability.html', tsx: 'sustainability/page.tsx' }
];

for (const page of pagesToMigrate) {
    const htmlPath = path.join(PUBLIC_HTML, page.html);
    const tsxPath = path.join(SRC_APP, page.tsx);
    
    if (fs.existsSync(htmlPath) && fs.existsSync(tsxPath)) {
        const htmlContent = fs.readFileSync(htmlPath, 'utf8');
        
        const htmlMainFull = htmlContent.substring(htmlContent.indexOf('<main'), htmlContent.lastIndexOf('</main>') + 7);
        if (htmlMainFull && htmlMainFull.length > 10) {
            const jsxMainFull = htmlToJsx(htmlMainFull);
            
            const tsxContent = fs.readFileSync(tsxPath, 'utf8');
            
            const tsxRegex = /<main[^>]*>[\s\S]*?<\/main>/i;
            if (tsxRegex.test(tsxContent)) {
                const updatedTsx = tsxContent.replace(tsxRegex, jsxMainFull);
                fs.writeFileSync(tsxPath, updatedTsx);
                console.log(`Updated ${page.tsx}`);
            } else {
                console.log(`Could not find <main> in ${page.tsx}`);
            }
        }
    }
}

// 2. Migrate Header and Footer
const indexHtmlContent = fs.readFileSync(path.join(PUBLIC_HTML, 'index.html'), 'utf8');

// Header
const headerHtml = indexHtmlContent.substring(indexHtmlContent.indexOf('<header'), indexHtmlContent.lastIndexOf('</header>') + 9);
const headerJsx = htmlToJsx(headerHtml);
const headerTsxPath = path.join(SRC_COMPONENTS, 'Header.tsx');
if (fs.existsSync(headerTsxPath)) {
    const headerTsxContent = fs.readFileSync(headerTsxPath, 'utf8');
    const tsxRegex = /<header[^>]*>[\s\S]*?<\/header>/i;
    if (tsxRegex.test(headerTsxContent)) {
        const updatedTsx = headerTsxContent.replace(tsxRegex, headerJsx);
        fs.writeFileSync(headerTsxPath, updatedTsx);
        console.log(`Updated Header.tsx`);
    } else {
        console.log(`Could not find <header> in Header.tsx`);
    }
}

// Footer
const footerHtml = indexHtmlContent.substring(indexHtmlContent.indexOf('<footer'), indexHtmlContent.lastIndexOf('</footer>') + 9);
const footerJsx = htmlToJsx(footerHtml);
const footerTsxPath = path.join(SRC_COMPONENTS, 'Footer.tsx');
if (fs.existsSync(footerTsxPath)) {
    const footerTsxContent = fs.readFileSync(footerTsxPath, 'utf8');
    const tsxRegex = /<footer[^>]*>[\s\S]*?<\/footer>/i;
    if (tsxRegex.test(footerTsxContent)) {
        const updatedTsx = footerTsxContent.replace(tsxRegex, footerJsx);
        fs.writeFileSync(footerTsxPath, updatedTsx);
        console.log(`Updated Footer.tsx`);
    } else {
        console.log(`Could not find <footer> in Footer.tsx`);
    }
}
console.log('Migration script complete.');
