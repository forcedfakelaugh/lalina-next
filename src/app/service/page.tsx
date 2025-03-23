import Image from 'next/image';
import Link from 'next/link';

// Define gallery images to avoid repetition
const GALLERY_IMAGES = [
  // Column 1
  [
    { src: '/assets/img/bdvn.jpg', alt: 'Life at Lalina' },
    { src: '/assets/img/ballpitkid.jpg', alt: 'Life at Lalina' },
    { src: '/assets/img/hpbddecor.jpg', alt: 'Life at Lalina' },
    { src: '/assets/img/childrenslide.jpg', alt: 'Life at Lalina' },
    { src: '/assets/img/bdvn3.jpg', alt: 'Life at Lalina' },
  ],
  // Column 2
  [
    { src: '/assets/img/bdvn2.jpg', alt: 'Life at Lalina' },
    { src: '/assets/img/sn.jpg', alt: 'Life at Lalina' },
    { src: '/assets/img/mama.jpg', alt: 'Life at Lalina' },
    { src: '/assets/img/slideboy.jpg', alt: 'Life at Lalina' },
    { src: '/assets/img/kidshug.jpg', alt: 'Life at Lalina' },
  ],
  // Column 3
  [
    { src: '/assets/img/tentgirl.jpg', alt: 'Life at Lalina' },
    { src: '/assets/img/giadinhlina.jpg', alt: 'Life at Lalina' },
    { src: '/assets/img/momcall.jpg', alt: 'Life at Lalina' },
    { src: '/assets/img/kidscall.jpg', alt: 'Life at Lalina' },
    { src: '/assets/img/meconalo.jpg', alt: 'Life at Lalina' },
  ],
  // Column 4
  [
    { src: '/assets/img/hpbd.jpg', alt: 'Life at Lalina' },
    { src: '/assets/img/cleanball.jpg', alt: 'Life at Lalina' },
    { src: '/assets/img/working.jpg', alt: 'Life at Lalina' },
    { src: '/assets/img/staffclean.jpg', alt: 'Life at Lalina' },
  ],
];

export default function ServicePage() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-semibold text-title mb-6 text-center">
          What We Offer
        </h1>
        
        <p className="text-text mb-16 text-center max-w-3xl mx-auto">
          Lalina offers a variety of services designed to bring joy to families in a safe, welcoming environment.
        </p>

        {/* PLAYGROUND SECTION */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-semibold text-title mb-6">Safe & Fun Playground</h2>
            <p className="text-text">
              Our indoor playground features a variety of activity zones to spark children's imagination and development. From ball pits and slides to our mini kitchen and library corner, kids can explore, learn, and play in a safe, supervised environment.
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
            <h2 className="text-3xl font-semibold text-title mb-6">Nutritious Kids Menu</h2>
            <p className="text-text mb-4">
              Our chef prepares nutritious and delicious meals specifically designed for children. Using fresh, healthy ingredients without MSG or preservatives, we offer a menu that keeps kids happy while giving parents peace of mind.
            </p>
            <Link href="/menu" className="btn">View Full Menu</Link>
          </div>
        </div>

        {/* BIRTHDAY SECTION */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-semibold text-title mb-6">Birthday & Private Events</h2>
            <p className="text-text mb-4">
              Host your child's birthday party or private event at Lalina. We offer complete party packages including decorations, food, and entertainment. Parents can relax and enjoy the celebration while we take care of all the details.
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
          <p className="text-text mb-4">Need more information or ready to book?</p>
          <a href="http://m.me/lalinakidscafe" className="btn inline-block" target="_blank" rel="noopener noreferrer">Contact us</a>
        </div>

        {/* LIFE AT LALINA SECTION */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-title mb-12 text-center">Moments at Lalina</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {GALLERY_IMAGES.map((column, columnIndex) => (
              <div key={`column-${columnIndex}`} className="space-y-3">
                {column.map((image, imageIndex) => (
                  <div key={`image-${columnIndex}-${imageIndex}`} className="overflow-hidden rounded-lg">
                    <Image 
                      src={image.src} 
                      alt={image.alt} 
                      width={300} 
                      height={200} 
                      className="w-full object-cover hover:scale-105 transition duration-300" 
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
