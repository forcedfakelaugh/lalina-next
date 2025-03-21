import Image from 'next/image';
import Link from 'next/link';

export default function ServicePage() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-semibold text-title mb-6 text-center">
          Our Services
        </h1>
        
        <p className="text-text mb-16 text-center max-w-3xl mx-auto">
          With the desire to become a place full of happiness and satisfaction, we are so proud to provide many extraordinary services to bring the best moments for everyone.
        </p>

        {/* PLAYGROUND SECTION */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-semibold text-title mb-6">We provide a safe and exciting playground</h2>
            <p className="text-text">
              Let's explore the special corners of Lalina, where creativity and imagination is embraced. From the luxurious spa, interactive games, lovely mini kitchen with various vegetables and foods, or mini library, there is a wide range of activities that enhance children's imagination, thinking, and physical abilities while fully enjoying their time.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden">
            <Image 
              src="/assets/img/playground.jpg" 
              alt="Ball pit" 
              width={600} 
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* KIDS MENU SECTION */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1 rounded-lg overflow-hidden">
            <Image 
              src="/assets/img/img-kids.jpg" 
              alt="Kids food" 
              width={600} 
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-semibold text-title mb-6">We provide healthy and delicious kids menu</h2>
            <p className="text-text mb-4">
              The culinary world of Lalina is also rich and diverse with a premium menu enjoyed by our lovely customers. The tasty and delicious dishes are made from super healthy ingredients and prepared by our experienced chef right from the Lalina kitchen.
            </p>
            <Link href="/menu" className="btn">View Full Menu</Link>
          </div>
        </div>

        {/* BIRTHDAY SECTION */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-semibold text-title mb-6">We offer private party for small or big groups</h2>
            <p className="text-text mb-4">
              Not only a cozy and luxurious cafe and restaurant, but we also offer an amazing exclusive private party where children enjoy blowing candles, cutting the cake, and engaging in unique and attractive performances, while parents cherish the meaningful moments with wine and delectable dishes.
            </p>
            <Link href="/birthday" className="btn">More About Birthdays</Link>
          </div>

          <div className="rounded-lg overflow-hidden">
            <Image 
              src="/assets/img/bdvn2.jpg" 
              alt="Birthday party" 
              width={600} 
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* CONTACT BANNER */}
        <div className="bg-gray-50 p-8 rounded-lg text-center mb-20">
          <p className="text-text mb-4">For pricing and support</p>
          <a href="http://m.me/lalinakidscafe" className="btn inline-block">Contact us</a>
        </div>

        {/* LIFE AT LALINA SECTION */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-title mb-12 text-center">Life at Lalina</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {/* Column 1 */}
            <div className="space-y-3">
              <div className="overflow-hidden rounded-lg">
                <img src="/assets/img/bdvn.jpg" alt="Life at Lalina" className="w-full object-cover hover:scale-105 transition duration-300" />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img src="/assets/img/ballpitkid.jpg" alt="Life at Lalina" className="w-full object-cover hover:scale-105 transition duration-300" />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img src="/assets/img/hpbddecor.jpg" alt="Life at Lalina" className="w-full object-cover hover:scale-105 transition duration-300" />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img src="/assets/img/childrenslide.jpg" alt="Life at Lalina" className="w-full object-cover hover:scale-105 transition duration-300" />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img src="/assets/img/bdvn3.jpg" alt="Life at Lalina" className="w-full object-cover hover:scale-105 transition duration-300" />
              </div>
            </div>
            
            {/* Column 2 */}
            <div className="space-y-3">
              <div className="overflow-hidden rounded-lg">
                <img src="/assets/img/bdvn2.jpg" alt="Life at Lalina" className="w-full object-cover hover:scale-105 transition duration-300" />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img src="/assets/img/sn.jpg" alt="Life at Lalina" className="w-full object-cover hover:scale-105 transition duration-300" />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img src="/assets/img/mama.jpg" alt="Life at Lalina" className="w-full object-cover hover:scale-105 transition duration-300" />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img src="/assets/img/slideboy.jpg" alt="Life at Lalina" className="w-full object-cover hover:scale-105 transition duration-300" />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img src="/assets/img/kidshug.jpg" alt="Life at Lalina" className="w-full object-cover hover:scale-105 transition duration-300" />
              </div>
            </div>
            
            {/* Column 3 */}
            <div className="space-y-3">
              <div className="overflow-hidden rounded-lg">
                <img src="/assets/img/tentgirl.jpg" alt="Life at Lalina" className="w-full object-cover hover:scale-105 transition duration-300" />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img src="/assets/img/giadinhlina.jpg" alt="Life at Lalina" className="w-full object-cover hover:scale-105 transition duration-300" />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img src="/assets/img/momcall.jpg" alt="Life at Lalina" className="w-full object-cover hover:scale-105 transition duration-300" />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img src="/assets/img/kidscall.jpg" alt="Life at Lalina" className="w-full object-cover hover:scale-105 transition duration-300" />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img src="/assets/img/meconalo.jpg" alt="Life at Lalina" className="w-full object-cover hover:scale-105 transition duration-300" />
              </div>
            </div>
            
            {/* Column 4 */}
            <div className="space-y-3">
              <div className="overflow-hidden rounded-lg">
                <img src="/assets/img/hpbd.jpg" alt="Life at Lalina" className="w-full object-cover hover:scale-105 transition duration-300" />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img src="/assets/img/cleanball.jpg" alt="Life at Lalina" className="w-full object-cover hover:scale-105 transition duration-300" />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img src="/assets/img/working.jpg" alt="Life at Lalina" className="w-full object-cover hover:scale-105 transition duration-300" />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img src="/assets/img/staffclean.jpg" alt="Life at Lalina" className="w-full object-cover hover:scale-105 transition duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
