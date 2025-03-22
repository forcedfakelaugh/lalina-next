import Image from 'next/image';

export default function BirthdayPage() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-semibold text-title mb-12 text-center">
          Birthday Parties
        </h1>

        <div className="bg-[#FF9F45] py-6 px-4 rounded-lg text-center mb-12">
          <h2 className="text-2xl font-semibold text-white mb-3">Limited Time Offer</h2>
          <p className="text-white mb-4">Book your 2025 birthday package now and receive a <span className="font-bold">10% Early Bird Discount</span> plus a complimentary photo session!</p>
          <p className="text-white text-sm mb-3">Offer valid for parties booked 30+ days in advance. Subject to availability.</p>
          <a href="http://m.me/lalinakidscafe" className="btn bg-white text-[#FF9F45] hover:bg-gray-100" target="_blank" rel="noopener noreferrer">Claim This Offer</a>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-semibold text-title mb-6">Make Your Child's Day Special</h2>
            <p className="text-text">
              At Lalina, we specialize in creating memorable birthday celebrations for children of all ages. 
              Our dedicated team works closely with you to customize every detail of your child's special day, 
              from decorations to food and activities.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden">
            <Image 
              src="/assets/img/hpbd.jpg" 
              alt="Happy Birthday" 
              width={600} 
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* PARTY PACKAGES */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-title mb-3 text-center">All-Inclusive Birthday Experiences</h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">Choose from our carefully crafted packages, each designed to create unforgettable celebrations</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex flex-col">
              <div>
                <h3 className="text-xl font-semibold text-title mb-2 text-center">Standard Package</h3>
                <p className="text-primary font-semibold mb-2 text-center text-2xl">Starting from 2,500,000 VND</p>
                <p className="text-center text-sm mb-4 text-gray-500">Perfect for intimate celebrations</p>
                <ul className="list-disc pl-5 text-text mb-6">
                  <li className="mb-1">2-hour private area reservation</li>
                  <li className="mb-1">Birthday decorations</li>
                  <li className="mb-1">Birthday cake (1kg)</li>
                  <li className="mb-1">Food and drinks for 10 children</li>
                  <li className="mb-1">Party host</li>
                  <li className="mb-1">Access to playground</li>
                </ul>
              </div>
              <div className="mt-auto">
                <a href="http://m.me/lalinakidscafe" className="btn-sm block w-full text-center" target="_blank" rel="noopener noreferrer">Book This Package</a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-2 border-primary transform hover:scale-105 transition-all relative z-10 flex flex-col">
              <div>
                <div className="bg-primary text-white text-center py-1 px-3 rounded-full text-sm font-medium mb-2 w-max mx-auto">MOST POPULAR</div>
                <h3 className="text-xl font-semibold text-title mb-2 text-center">Premium Package</h3>
                <p className="text-primary font-semibold mb-2 text-center text-2xl">Starting from 4,500,000 VND</p>
                <p className="text-center text-sm mb-4 text-gray-500">Our most popular choice for amazing celebrations</p>
                <ul className="list-disc pl-5 text-text mb-6">
                  <li className="mb-1">3-hour private area reservation</li>
                  <li className="mb-1">Deluxe decorations with theme</li>
                  <li className="mb-1">Custom birthday cake (2kg)</li>
                  <li className="mb-1">Food and drinks for 15 children</li>
                  <li className="mb-1">Party host and assistant</li>
                  <li className="mb-1">Organized games and activities</li>
                  <li className="mb-1">Goodie bags for all children</li>
                  <li className="mb-1">Basic photography</li>
                </ul>
              </div>
              <div className="mt-auto">
                <a href="http://m.me/lalinakidscafe" className="btn block w-full text-center" target="_blank" rel="noopener noreferrer">Book This Package</a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex flex-col">
              <div>
                <h3 className="text-xl font-semibold text-title mb-2 text-center">VIP Package</h3>
                <p className="text-primary font-semibold mb-2 text-center text-2xl">Starting from 6,500,000 VND</p>
                <p className="text-center text-sm mb-4 text-gray-500">The ultimate luxury birthday experience</p>
                <ul className="list-disc pl-5 text-text mb-6">
                  <li className="mb-1">4-hour exclusive venue use</li>
                  <li className="mb-1">Premium themed decorations</li>
                  <li className="mb-1">Custom cake and cupcakes</li>
                  <li className="mb-1">Food and drinks for 20 children</li>
                  <li className="mb-1">Dedicated party team</li>
                  <li className="mb-1">Professional host and entertainment</li>
                  <li className="mb-1">Premium goodie bags</li>
                  <li className="mb-1">Professional photography</li>
                  <li className="mb-1">Special surprise for birthday child</li>
                </ul>
              </div>
              <div className="mt-auto">
                <a href="http://m.me/lalinakidscafe" className="btn-sm block w-full text-center" target="_blank" rel="noopener noreferrer">Book This Package</a>
              </div>
            </div>
          </div>
        </div>

        {/* GALLERY SECTION */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-title mb-12 text-center">Birthday Gallery</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="overflow-hidden rounded-lg">
              <img 
                src="/assets/img/bd2.jpg" 
                alt="Birthday party 1" 
                className="w-full h-60 object-cover hover:scale-105 transition duration-300" 
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img 
                src="/assets/img/bd3.jpg" 
                alt="Birthday party 2" 
                className="w-full h-60 object-cover hover:scale-105 transition duration-300" 
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img 
                src="/assets/img/bd4.jpg" 
                alt="Birthday party 3" 
                className="w-full h-60 object-cover hover:scale-105 transition duration-300" 
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img 
                src="/assets/img/bdninja.jpg" 
                alt="Birthday party 4" 
                className="w-full h-60 object-cover hover:scale-105 transition duration-300" 
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img 
                src="/assets/img/bdvn.jpg" 
                alt="Birthday party 5" 
                className="w-full h-60 object-cover hover:scale-105 transition duration-300" 
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img 
                src="/assets/img/bdvn2.jpg" 
                alt="Birthday party 6" 
                className="w-full h-60 object-cover hover:scale-105 transition duration-300" 
              />
            </div>
          </div>
        </div>

        {/* BOOKING SECTION */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-title mb-6">How to Book</h2>
            <p className="text-text mb-4">
              Booking your child's birthday party at Lalina is easy:
            </p>
            <ol className="list-decimal pl-5 mb-6 text-text">
              <li className="mb-2">Contact us via messenger or phone to check availability</li>
              <li className="mb-2">Choose your preferred package and discuss any customizations</li>
              <li className="mb-2">Confirm your booking with a 30% deposit</li>
              <li className="mb-2">Finalize details one week before the party</li>
              <li className="mb-2">Arrive and enjoy while we take care of everything!</li>
            </ol>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="font-semibold text-title mb-2 text-xl">
                Ready to create magical memories?
              </p>
              <p className="text-text mb-4">
                Contact us today to plan your perfect celebration!
              </p>
              <p className="text-text mb-5">
                Phone: <a href="tel:0936285660" className="text-primary font-medium">093 628 5660</a><br />
                Email: <a href="mailto:info@lalinakidscafe.com" className="text-primary font-medium">info@lalinakidscafe.com</a><br />
              </p>
              <a href="http://m.me/lalinakidscafe" className="btn block w-full text-center" target="_blank" rel="noopener noreferrer">Book Your Party Now</a>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden">
            <Image 
              src="/assets/img/hpbddecor.jpg" 
              alt="Birthday decorations" 
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
