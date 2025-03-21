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
              <h2 className="text-2xl md:text-[2.5rem] text-gray-800 mb-8 font-normal leading-tight">
                Relax, eat and play
                <br />
                with your little ones.
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
                Lalina is a premium family restaurant and cafe that combines safe and clean
                interactive play areas with lots of toys. We are a place for the whole family to enjoy quality time together.
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
            Our amazing services
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
                We offer lots of toys and playground for your little ones.
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
                We offer kids menu for your little ones, we only use the best ingredients with no
                MSG or preservatives.
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
                We offer private party for small or big groups.
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
            Menu of the week
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
              <a href="http://m.me/lalinakidscafe" className="menu-item-btn">
                <span>Book now</span>
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
              <a href="http://m.me/lalinakidscafe" className="menu-item-btn">
                <span>Book now</span>
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
              <a href="http://m.me/lalinakidscafe" className="menu-item-btn">
                <span>Book now</span>
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
                Contact us
              </h2>
              <p className="text-text mb-8 md:mb-0">
                If you want to reserve a table in our restaurant, contact us and we will attend
                you quickly, with our 24/7 chat service.
              </p>
            </div>

            <div className="flex justify-center md:justify-end">
              <a href="http://m.me/lalinakidscafe" className="btn">
                Contact us now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
