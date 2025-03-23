import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/Button';
import { IMAGE_SIZES } from '@/constants';

// Image size constants
const ICON_SIZE = 64;
const MENU_IMAGE_SIZE = 300;
const LOGO_SIZE = 600;
const ABOUT_IMAGE = { width: 600, height: 400 };

export default function Home() {
  return (
    <>
      {/* BIRTHDAY BANNER */}
      <section className="py-10 bg-gradient-to-r from-purple-600 via-primary-dark to-primary relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Confetti-like elements */}
          <div className="absolute top-4 left-10 w-6 h-6 rounded-full bg-yellow-300 opacity-60 animate-pulse"></div>
          <div className="absolute bottom-6 right-12 w-10 h-10 rounded-full bg-pink-400 opacity-50 animate-bounce"></div>
          <div className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-blue-300 opacity-60 animate-ping"></div>
          <div className="absolute bottom-1/3 left-1/3 w-8 h-8 rounded-full bg-green-300 opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          {/* Balloon-like shapes */}
          <div className="absolute top-1/4 right-10 w-16 h-20 rounded-full bg-pink-500 opacity-20"></div>
          <div className="absolute bottom-0 left-1/4 w-20 h-28 rounded-full bg-indigo-500 opacity-20"></div>
          
          {/* Party streamer */}
          <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block mb-4 transform -rotate-2 bg-yellow-300 px-3 py-1 rounded-lg shadow-md">
            <span className="text-purple-800 font-black text-sm tracking-wider">LIMITED TIME OFFER</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 drop-shadow-lg">
            Make Your Child's Birthday <span className="text-yellow-300 font-extrabold underline decoration-wavy decoration-pink-400 decoration-2 underline-offset-4">Unforgettable</span>!
          </h2>
          
          <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
            Premium birthday packages available with <span className="bg-white text-purple-700 font-bold px-2 py-1 rounded-lg shadow-sm">special pricing</span> for 2025 bookings
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button 
              href="/birthday" 
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-900 text-lg py-3 px-8 font-bold shadow-lg hover:shadow-xl transform transition hover:-translate-y-1 border-2 border-yellow-300"
            >
              View Birthday Packages
            </Button>
            
            <Button 
              href="http://m.me/lalinakidscafe" 
              variant="outline" 
              className="text-white border-white hover:bg-white hover:text-purple-600 transition-all"
              external
            >
              Book a Consultation
            </Button>
          </div>
        </div>
      </section>
      
      {/* HOME SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Logo/Image on left */}
            <div className="order-1">
              <Image 
                src="/assets/img/logo.png" 
                alt="Lalina Logo" 
                width={IMAGE_SIZES.LOGO} 
                height={IMAGE_SIZES.LOGO}
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
              <Button href="/menu" className="px-8 py-4 text-lg">
                View Menu
              </Button>
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

            <div className="bg-white p-8 rounded-lg shadow-md text-center border-2 border-primary">
              <div className="bg-primary text-white text-xs font-bold px-2 py-1 rounded absolute right-4 top-4">POPULAR</div>
              <Image 
                src="/assets/img/cake.svg" 
                width={ICON_SIZE}
                height={ICON_SIZE}
                className="mx-auto mb-4" 
                alt="Birthday" 
              />
              <h3 className="text-xl font-semibold text-title mb-2">Celebration Packages</h3>
              <p className="text-text mb-3">
                Create magical birthday memories with our all-inclusive themed celebration packages.
              </p>
              <Link href="/birthday" className="btn-sm block w-full text-center">
                View Packages
              </Link>
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
