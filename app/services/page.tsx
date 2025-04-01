import Card from '@/components/ui/Card';

export default function ServicesPage() {
  const services = [
    {
      title: "Digital Printing",
      description: "High-quality digital printing services for vibrant and detailed designs."
    },
    {
      title: "Screen Printing",
      description: "Durable screen printing for bulk orders with consistent quality."
    },
    {
      title: "Embroidery",
      description: "Professional embroidery services for a sophisticated finish."
    },
    {
      title: "Custom Fabric Design",
      description: "Tailored fabric designs to meet your unique specifications."
    }
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Our Services</h1>
      <p className="mb-6 text-lg text-gray-700">
        At Ragas Modas, we offer a range of printing services to cater to all your fabric needs. Here’s why you should choose us:
      </p>
      <ul className="list-disc pl-5 mb-6 text-lg text-gray-700">
        <li>✔ High Precision Printing</li>
        <li>✔ Eco-Friendly Inks</li>
        <li>✔ Custom & Bulk Orders</li>
        <li>✔ Fast Turnaround</li>
      </ul>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <Card key={index} title={service.title} content={[service.description]} />
        ))}
      </div>
    </div>
  );
}