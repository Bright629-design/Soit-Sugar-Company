import fs from 'fs';

const tsxPath = 'c:/Users/PC/Desktop/Soit-Sugar-Company/src/app/page.tsx';
let content = fs.readFileSync(tsxPath, 'utf8');

const startStr = '<div data-carousel className="absolute inset-0 w-full h-full">';
const endStr = '<div className="absolute inset-0 bg-gradient-to-t';

const startIdx = content.indexOf(startStr);
const endIdx = content.indexOf(endStr);

if (startIdx !== -1 && endIdx !== -1 && startIdx < endIdx) {
    const before = content.substring(0, startIdx);
    const after = content.substring(endIdx);
    const replacement = `<Carousel
              opts={{ loop: true }}
              plugins={[plugin.current]}
              className="absolute inset-0 w-full h-full z-0"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.play}
            >
              <CarouselContent className="m-0 h-full">
                {heroImages.map((src, index) => (
                  <CarouselItem key={index} className="p-0 h-full relative">
                    <img
                      src={src}
                      alt={\`Soit Sugar background image \${index + 1}\`}
                      className="object-cover w-full h-full"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            `;
    content = before + replacement + after;
    fs.writeFileSync(tsxPath, content);
    console.log('Fixed carousel!');
} else {
    console.log('Could not find strings');
}
