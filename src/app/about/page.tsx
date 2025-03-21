import Image from 'next/image';

export default function AboutPage() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-semibold text-title mb-12 text-center">
          About Lalina
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-semibold text-title mb-6">Our Story</h2>
            <p className="text-text">
              Welcome to Lalina, where culinary excellence meets family fun. We've created a space where children can safely play while parents enjoy quality dining. Our team is trained in childcare and safety, ensuring every family member has a wonderful experience in a place designed with both kids and adults in mind.
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
            <p className="text-text">
              At Lalina, we maintain the highest standards of cleanliness and safety. Our play areas are sanitized regularly, and our food is prepared with fresh ingredients without MSG or preservatives. From our kids' menu to premium coffee and adult dining options, we ensure every family member finds something to enjoy.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-title mb-6">Visit Us</h2>
            <p className="text-text">
              Visit Lalina and experience our unique blend of family dining and play. Whether you're looking for a quiet coffee while your children play, a family meal, or a venue for your child's birthday party, we look forward to welcoming you to our space.
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
