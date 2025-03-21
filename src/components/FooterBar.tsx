import React from 'react';
import Link from 'next/link';

const FooterBar = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Branding */}
          <div>
            <Link href="/" className="text-white font-semibold text-2xl">Lalina kids cafe</Link>
            <p className="mt-2 mb-6">Follow us</p>
            
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/lalinakidscafe" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-200 transition duration-300">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="https://www.instagram.com/lalinakidscafe/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-200 transition duration-300">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCJDYidTYohSicbjIGawd2KQ/featured" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-200 transition duration-300">
                <i className="ri-youtube-fill"></i>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://food.grab.com/vn/en/restaurant/lalina-kids-cafe-delivery/5-C2UWVVM1BF3HDA" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition duration-300">
                  Grab Delivery
                </a>
              </li>
              <li>
                <Link href="/birthday" className="hover:text-gray-200 transition duration-300">
                  Birthday party
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-gray-200 transition duration-300">
                  Kids menu
                </Link>
              </li>
              <li>
                <a href="http://m.me/lalinakidscafe" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition duration-300">
                  Reserve your spot
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-xl font-medium mb-4">Address</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://g.page/lalinakidscafe?share" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition duration-300">
                  9 Tay Ho Street, Quang An, Tay Ho, Hanoi, Vietnam.
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-medium mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                Call us: <a href="tel:0936285660" className="hover:text-gray-200 transition duration-300">
                  093 628 5660
                </a>
              </li>
              <li>
                Email: <a href="mailto:info@lalinakidscafe.com" className="hover:text-gray-200 transition duration-300">
                  info@lalinakidscafe.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-10 pt-6 text-center">
          <p>© {currentYear} LP Smile</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterBar;
