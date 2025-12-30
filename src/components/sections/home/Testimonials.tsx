import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Abhishek Rajput',
      role: 'Software Engineer',
      image: '/testimoni/img1.jpeg',
      rating: 4,
      comment:
        'This website is good in terms of functionality. The only thing you can improve is the theme. Other than this you can give more theme options to the user. Overall the experience is good and smooth.',
    },
    {
      id: 2,
      name: 'Jaanvi Chouhan',
      role: 'CSE Student',
      image: '/testimoni/img2.jpeg',
      rating: 5,
      comment:
        'MultiCalc is really impressive! I found it very useful, and I love the clean and simple design it makes everything easy to use. Having so many calculators in one place is super convenient.',
    },
    {
      id: 3,
      name: 'Sanskruti D',
      role: 'BE Student',
      image: '/testimoni/img3.jpeg',
      rating: 5,
      comment:
        'I was very impressed with the MultiCal website. It offers a truly comprehensive suite of tools, The site is incredibly fast and responsive, making it a great resource for quick and efficient calculations. Highly recommended!',
    },
    {
      id: 4,
      name: 'Janani M',
      role: 'SDE @Zoho',
      image: '/testimoni/img4.jpeg',
      rating: 5,
      comment:
        'I have used the Multicalc platform. It is very smooth to use. It had wide range of calculators. Interesting to explore all in one place. With a Sleek UI and smooth UX MultiCalc is built very well.',
    },
    {
      id: 6,
      name: 'Priyadharshini S',
      role: 'SDE @Zoho',
      image: '/testimoni/img6.jpeg',
      rating: 5,
      comment:
        'I went through your Multicalc project, its really amazing in terms of both UI and functionality. the whole project is excellent, Kudos to the team for such a wonderful project.',
    },
    {
      id: 7,
      name: 'Aishika Biswas',
      role: 'Developer @Mekyek',
      image: '/testimoni/img7.jpeg',
      rating: 5,
      comment:
        'MultiCalc calculator site is s full package, for someone who needs every calculation at one place, this your place! The UI is simple and easy to use. Kudos to the team for such a wonderful project.',
    },
    {
      id: 8,
      name: 'Archana B',
      role: 'MTS @Zoho',
      image: '/testimoni/img12.jpeg',
      rating: 5,
      comment:
        'I like the way it have many calculations which includes health calcs too. This is a great work dhrubaraj! Congratulations.',
    },
  ];

  return (
    <section className={`py-20 'bg-gray-800' : 'bg-gray-50'`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-excon font-bold mb-8 text-center">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-500 font-supreme max-w-3xl mx-auto mb-6">
            Here's what our happy user have to say about their experience.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          data-aos="fade-up"
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={` 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} p-8 rounded-2xl border hover:shadow-2xl transition-all duration-300 group relative overflow-hidden`}
            >
              {/* Background Quote */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="w-16 h-16" />
              </div>

              {/* Profile */}
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4
                    className={`text-lg font-outfit font-bold 'text-white' : 'text-gray-900'`}
                  >
                    {testimonial.name}
                  </h4>
                  <p className="text-sm font-supreme text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="font-poppins text-sm relative z-10">
                "{testimonial.comment}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
