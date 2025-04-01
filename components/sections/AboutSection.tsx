import FadeIn from '@/components/animations/FadeIn';

export default function AboutSection() {
  return (
    <section className="py-16 bg-gray-100">
      <FadeIn>
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About Ragas Modas</h2>
          <p className="text-lg text-gray-700 mb-4">
            At Ragas Modas, we believe in transforming fabric into art. Our mission is to provide high-quality printing services that meet the diverse needs of our clients.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            With a commitment to sustainability and innovation, we use eco-friendly inks and cutting-edge technology to deliver exceptional results.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Whether you're looking for custom designs or bulk orders, our team is here to help you every step of the way.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}