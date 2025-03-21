import Link from 'next/link';
import Image from 'next/image';

// Image size constants
const ICON_SIZE = 64;
const MENU_IMAGE_SIZE = 300;
const LOGO_SIZE = 600;
const ABOUT_IMAGE = { width: 600, height: 400 };

export default function Home() {
  return (
    <>
      {/* HOME SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Logo/Image on left */}
            <div className="order-1">
              <Image 
                src="/assets/img/logo.png" 
                alt="Lalina Logo" 
                width={LOGO_SIZE} 
                height={LOGO_SIZE}
                priority
                className="w-full max-w-md mx-auto"
              />
            </div>
            
            {/* Text on right */}
            <div className="order-2 text-left">
              <h1 className="text-5xl md:text-6xl font-semibold text-primary mb-4">
                Lalina 
                <br />
                kids cafe
              </h1>
              <h2 className="text-3xl md:text-4xl font-semibold text-title mt-2 mb-8">
                Where family moments
                <br />
                come to life.
              </h2>
              <Link href="/menu" className="btn px-8 py-4 text-lg">
                View Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium">About us</span>
              <h2 className="text-3xl md:text-4xl font-semibold text-title mt-2 mb-4">
                A premium family restaurant
              </h2>
              <p className="text-text mb-8">
                Lalina combines exceptional dining with thoughtfully designed play spaces in a clean, safe environment. 
                We've created the perfect setting for families to connect, relax, and create lasting memories together.
              </p>
              <Link href="/about" className="btn">
                Our story
              </Link>
            </div>

            <div className="rounded-lg overflow-hidden">
              <Image 
                src="/assets/img/about.jpg" 
                alt="About Lalina" 
                width={ABOUT_IMAGE.width} 
                height={ABOUT_IMAGE.height}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <span className="block text-primary font-medium text-center">Offering</span>
          <h2 className="text-3xl font-semibold text-title text-center mt-2 mb-12">
            Family-friendly experiences
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <Image 
                src="/assets/img/swing.svg" 
                width={ICON_SIZE}
                height={ICON_SIZE}
                className="mx-auto mb-4" 
                alt="Playground" 
              />
              <h3 className="text-xl font-semibold text-title mb-2">Playground</h3>
              <p className="text-text">
                Interactive play zones designed to spark imagination and development.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <Image 
                src="/assets/img/apron.svg" 
                width={ICON_SIZE}
                height={ICON_SIZE}
                className="mx-auto mb-4" 
                alt="Kids menu" 
              />
              <h3 className="text-xl font-semibold text-title mb-2">Kids menu</h3>
              <p className="text-text">
                Nutritious and delicious meals made with fresh ingredients and no additives, specially crafted for children.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <Image 
                src="/assets/img/cake.svg" 
                width={ICON_SIZE}
                height={ICON_SIZE}
                className="mx-auto mb-4" 
                alt="Birthday" 
              />
              <h3 className="text-xl font-semibold text-title mb-2">Birthday</h3>
              <p className="text-text">
                Memorable celebration packages for birthdays and special occasions.
                <br />
                <Link href="/birthday" className="text-primary hover:text-primary-dark underline">
                  [Read more]
                </Link>
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/service" className="text-primary hover:text-primary-dark underline">
              Read more about our services
            </Link>
          </div>
        </div>
      </section>

      {/* MENU SECTION */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <span className="block text-primary font-medium text-center">Special</span>
          <h2 className="text-3xl font-semibold text-title text-center mt-2 mb-12">
            Featured dishes
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="menu-item">
              <Image 
                src="/assets/img/img-pizza.jpg" 
                width={MENU_IMAGE_SIZE}
                height={MENU_IMAGE_SIZE}
                alt="Pepperoni Pizza" 
                className="menu-item-img" 
              />
              <h3 className="menu-item-name">Pepperoni Pizza</h3>
              <span className="menu-item-detail">Pizza Pepperoni</span>
              <span className="menu-item-price">180,000 vnd</span>
              <a href="http://m.me/lalinakidscafe" className="menu-item-btn" target="_blank" rel="noopener noreferrer">
                <span>Order now</span>
              </a>
            </div>

            <div className="menu-item">
              <Image 
                src="/assets/img/img-kids.jpg" 
                width={MENU_IMAGE_SIZE}
                height={MENU_IMAGE_SIZE}
                alt="Amazing Panda" 
                className="menu-item-img" 
              />
              <h3 className="menu-item-name">Amazing Panda</h3>
              <span className="menu-item-detail">Gấu trúc vui vẻ</span>
              <span className="menu-item-price">120,000 vnd</span>
              <a href="http://m.me/lalinakidscafe" className="menu-item-btn" target="_blank" rel="noopener noreferrer">
                <span>Order now</span>
              </a>
            </div>

            <div className="menu-item">
              <Image 
                src="/assets/img/img-spaghetti.jpg" 
                width={MENU_IMAGE_SIZE}
                height={MENU_IMAGE_SIZE}
                alt="Spaghetti" 
                className="menu-item-img" 
              />
              <h3 className="menu-item-name">Spaghetti Bolognese</h3>
              <span className="menu-item-detail">Mì Ý bò bằm</span>
              <span className="menu-item-price">130,000 vnd</span>
              <a href="http://m.me/lalinakidscafe" className="menu-item-btn" target="_blank" rel="noopener noreferrer">
                <span>Order now</span>
              </a>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/menu" className="btn">
              Full menu
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-primary font-medium">Let's talk</span>
              <h2 className="text-3xl md:text-4xl font-semibold text-title mt-2 mb-4">
                Get in touch
              </h2>
              <p className="text-text mb-8 md:mb-0">
                Have questions or want to make a reservation? Our team is ready to assist you
                through our responsive messaging service.
              </p>
            </div>

            <div className="flex justify-center md:justify-end">
              <a href="http://m.me/lalinakidscafe" className="btn" target="_blank" rel="noopener noreferrer">
                Message us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
