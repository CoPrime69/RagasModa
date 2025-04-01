import { useState } from 'react';

type NewsletterProps = {
  onSubscribe: (email: string) => void;
};

export default function Newsletter({ onSubscribe }: NewsletterProps) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    onSubscribe(email);
    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
      {isSubscribed ? (
        <p className="text-green-500">Thank you for subscribing!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="px-4 py-2 border rounded-l-lg"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition duration-300"
          >
            Subscribe
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
      )}
    </div>
  );
}