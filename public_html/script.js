document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuButton = document.querySelector('[data-mobile-menu-button]');
    const mobileMenu = document.querySelector('[data-mobile-menu]');
    const closeMenuButtons = document.querySelectorAll('[data-close-menu]');

    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        closeMenuButtons.forEach(button => {
            button.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Header Scroll Effect
    const header = document.querySelector('header');
    const isHomePage = document.body.classList.contains('home-page');

    function updateHeader() {
        if (window.scrollY > 10) {
            header.classList.add('border-b', 'bg-background/95', 'backdrop-blur');
            header.classList.remove('bg-transparent');
        } else {
            header.classList.remove('border-b', 'bg-background/95', 'backdrop-blur');
            if (isHomePage) {
                header.classList.add('bg-transparent');
            } else {
                header.classList.add('border-b', 'bg-background');
            }
        }
    }

    window.addEventListener('scroll', updateHeader);
    updateHeader(); // Initial check

    // Product Data
    const products = [
        {
            id: 'refined-white-sugar',
            name: 'Refined White Sugar',
            description: 'High-purity, fine granulated sugar for all your baking and beverage needs.',
            imageId: '../public/product-refined-white.jpg',
            specifications: [
                { key: 'Polarization', value: '99.8% min' },
                { key: 'Moisture', value: '0.04% max' },
                { key: 'Ash Content', value: '0.04% max' },
                { key: 'Color', value: '45 ICUMSA' },
            ],
            packaging: ['1kg Bag', '2kg Bag', '5kg Bag', '25kg Bag', '50kg Bag'],
        },
        {
            id: 'natural-brown-sugar',
            name: 'Natural Brown Sugar',
            description: 'Unrefined brown sugar with a rich molasses flavor, perfect for rustic baking.',
            imageId: '../public/product-brown-sugar.jpg',
            specifications: [
                { key: 'Polarization', value: '97.5% min' },
                { key: 'Moisture', value: '0.25% max' },
                { key: 'Ash Content', value: '0.25% max' },
                { key: 'Color', value: '600-800 ICUMSA' },
            ],
            packaging: ['1kg Bag', '2kg Bag', '50kg Bag'],
        },
        {
            id: 'sugarcane-syrup',
            name: 'Sugarcane Syrup',
            description: 'A sweet and versatile syrup made from pure sugarcane juice.',
            imageId: '../public/product-syrup.jpg',
            specifications: [
                { key: 'Brix', value: '79.5 - 80.5' },
                { key: 'pH', value: '5.0 - 5.5' },
                { key: 'Total Sugars', value: '75% min' },
            ],
            packaging: ['500ml Bottle', '1L Bottle', '5L Jerrycan'],
        },
    ];

    // Product Details Page Logic
    const productDetailsContainer = document.getElementById('product-details-container');
    if (productDetailsContainer) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        const product = products.find(p => p.id === productId);

        if (product) {
            document.title = `${product.name} - Soit Sugar Company`;

            // Update UI
            document.getElementById('product-image').src = product.imageId;
            document.getElementById('product-image').alt = product.name;
            document.getElementById('product-name').textContent = product.name;
            document.getElementById('product-description').textContent = product.description;

            const specsContainer = document.getElementById('product-specs');
            product.specifications.forEach(spec => {
                const div = document.createElement('div');
                div.className = 'flex justify-between border-b py-2';
                div.innerHTML = `<span class="font-medium">${spec.key}</span><span class="text-muted-foreground">${spec.value}</span>`;
                specsContainer.appendChild(div);
            });

            const packagingContainer = document.getElementById('product-packaging');
            product.packaging.forEach(pack => {
                const li = document.createElement('li');
                li.textContent = pack;
                packagingContainer.appendChild(li);
            });
        } else {
            productDetailsContainer.innerHTML = '<div class="text-center py-20"><h2 class="text-2xl font-bold">Product not found</h2><a href="products.html" class="text-primary hover:underline mt-4 block">Back to Products</a></div>';
        }
    }

    // Swipe Carousel Logic
    const carousels = document.querySelectorAll('[data-carousel]');

    carousels.forEach(carousel => {
        const items = carousel.querySelectorAll('[data-carousel-item]');
        let currentIndex = 0;
        const intervalTime = 5000;
        let interval;

        function nextItem() {
            const nextIndex = (currentIndex + 1) % items.length;
            const currentEl = items[currentIndex];
            const nextEl = items[nextIndex];

            // Prepare next element: ensure it's at the right side (translate-x-full) without transition
            nextEl.classList.remove('transition-transform', 'duration-1000');
            nextEl.classList.remove('-translate-x-full', 'translate-x-0');
            nextEl.classList.add('translate-x-full');

            // Force reflow to apply the instant position change
            void nextEl.offsetWidth;

            // Re-enable transition
            nextEl.classList.add('transition-transform', 'duration-1000');

            // Animate current element to the left
            currentEl.classList.remove('translate-x-0');
            currentEl.classList.add('-translate-x-full');

            // Animate next element to the center
            nextEl.classList.remove('translate-x-full');
            nextEl.classList.add('translate-x-0');

            currentIndex = nextIndex;
        }

        // Initialize positions to match HTML state (safety check)
        // Initialize positions to match HTML state (safety check)
        items.forEach((item, index) => {
            // Remove visibility classes that might interfere with transitions
            item.classList.remove('hidden', 'block');

            if (index === 0) {
                item.classList.remove('translate-x-full', '-translate-x-full');
                item.classList.add('translate-x-0');
            } else {
                item.classList.remove('translate-x-0', '-translate-x-full');
                item.classList.add('translate-x-full');
            }
        });

        if (items.length > 0) {
            interval = setInterval(nextItem, intervalTime);
        }
    });
});
