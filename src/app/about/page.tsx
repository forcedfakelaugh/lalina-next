import Image from 'next/image';

export default function AboutPage() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-semibold text-title mb-12 text-center">
          About Us
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-semibold text-title mb-6">Our Story</h2>
            <p className="text-text mb-4">
              Lalina is a premium family restaurant and kids cafe, combining safe interactive play areas with quality food. 
              Our mission is to create a place where families can enjoy quality time together, parents can relax, 
              and children can play safely.
            </p>
            <p className="text-text">
              We believe in creating a special environment where children feel welcome and parents can enjoy 
              adult conversations while keeping an eye on their little ones. Our staff are trained in child safety 
              and first aid to ensure the well-being of all our young guests.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden">
            <Image 
              src="/assets/img/giadinhlina.jpg" 
              alt="Family at Lalina" 
              width={600} 
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1 rounded-lg overflow-hidden">
            <Image 
              src="/assets/img/staffclean.jpg" 
              alt="Staff cleaning" 
              width={600} 
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-semibold text-title mb-6">Our Commitment</h2>
            <p className="text-text mb-4">
              At Lalina, we are committed to maintaining the highest standards of cleanliness and safety. 
              Our play areas are sanitized regularly, and all our food is prepared with the freshest ingredients, 
              with no MSG or preservatives.
            </p>
            <p className="text-text">
              We strive to create a warm, welcoming atmosphere where every family member can find something to enjoy. 
              From our specially designed kids' menu to our premium coffee and adult dining options, Lalina is truly 
              a place for the whole family.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-title mb-6">Join Us</h2>
            <p className="text-text">
              We invite you to visit Lalina and experience our unique blend of family dining and play. 
              Whether you're looking for a quiet coffee while your children play, a family meal, or a special venue 
              for your child's birthday party, we look forward to welcoming you to Lalina.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden">
            <Image 
              src="/assets/img/momcall.jpg" 
              alt="Mom calling" 
              width={600} 
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
