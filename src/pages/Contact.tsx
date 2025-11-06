import { useQuery } from '@tanstack/react-query';
import { motion } from 'motion/react';
import { useState, FormEvent, ChangeEvent } from 'react';

const profileQuery = () => ({
  queryKey: ['profile'],
  queryFn: async () => getProfile(),
});

const getProfile = async () =>
  (await fetch(`../../content/profile.json`).then((res) => res.json())) as ProfileData;

interface ProfileData {
  aboutSection: {
    name: string;
    address: string;
    experience: string;
    welcomeText: string[];
  };
}

interface FormData {
  name: string;
  email: string;
  message: string;
  botcheck: string; // honeypot field
}

interface Web3FormsResponse {
  success: boolean;
  message?: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const { data } = useQuery(profileQuery());
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    botcheck: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Honeypot check - if filled, it's a bot
    if (formData.botcheck) {
      return;
    }

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please fill in all fields');
      setStatus('error');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY as string,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Contact Form Submission from ${formData.name}`,
        }),
      });

      const result = (await response.json()) as Web3FormsResponse;

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '', botcheck: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setErrorMessage('Failed to send message. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.div
      animate={{
        y: 0,
        opacity: 100,
        transition: { duration: 1 },
      }}
      initial={{
        y: 20,
        opacity: 0,
      }}
    >
      <div className="p-6 sm:p-8 md:p-10 xl:p-20">
        <span className="mb-12 inline-block font-bold tracking-[8px] text-gray-800 dark:text-gray-100 uppercase">
          Get in Touch
        </span>

        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Left Column - Introduction Text */}
          <div className="w-full md:w-[45%]">
            <p className="leading-relaxed text-gray-700 dark:text-gray-300">
              I&apos;m always interested in new opportunities and exciting projects. Whether
              you&apos;re looking for a technical lead, fullstack developer, or consultant, I&apos;d
              love to hear from you.
            </p>
            <p className="mt-5 leading-relaxed text-gray-700 dark:text-gray-300">
              With extensive experience in modern web technologies, cloud platforms, and enterprise
              solutions, I can help bring your ideas to life.
            </p>

            {/* Contact Information */}
            <div className="mt-8">
              <span className="mb-4 inline-block font-bold tracking-[4px] text-gray-800 dark:text-gray-100 uppercase text-sm">
                Contact Information
              </span>
              <ul className="text-gray-700 dark:text-gray-300 text-sm">
                <li className="mb-3">
                  <span className="font-bold">Name:</span>{' '}
                  <span>{data?.aboutSection.name}</span>
                </li>
                <li className="mb-3">
                  <span className="font-bold">Address:</span>{' '}
                  <span>{data?.aboutSection.address}</span>
                </li>
                <li className="mb-3">
                  <span className="font-bold">Mail:</span>{' '}
                  <a
                    className="text-gray-500 dark:text-gray-400 transition-all duration-300 hover:text-gray-800 dark:hover:text-gray-200"
                    href="mailto:contact@michael-mayer.me"
                  >
                    contact@michael-mayer.me
                  </a>
                </li>
                <li>
                  <span className="font-bold">Phone:</span>{' '}
                  <span>+49 15730120969</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="w-full md:w-[50%]">
            <span className="mb-6 inline-block font-bold tracking-[4px] text-gray-800 dark:text-gray-100 uppercase text-sm">
              Send a Message
            </span>

            <form onSubmit={(e) => void handleSubmit(e)} className="space-y-4">
              {/* Honeypot field - hidden from users */}
              <input
                type="checkbox"
                name="botcheck"
                value={formData.botcheck}
                onChange={handleChange}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 text-gray-800 dark:text-gray-100 transition-colors focus:border-gray-500 dark:focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700"
                  placeholder="Your name"
                  disabled={status === 'loading'}
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 text-gray-800 dark:text-gray-100 transition-colors focus:border-gray-500 dark:focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700"
                  placeholder="your.email@example.com"
                  disabled={status === 'loading'}
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 text-gray-800 dark:text-gray-100 transition-colors focus:border-gray-500 dark:focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 resize-none"
                  placeholder="Your message..."
                  disabled={status === 'loading'}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full border-2 border-black dark:border-white bg-black dark:bg-white px-6 py-3 font-bold text-white dark:text-black transition-all duration-300 hover:bg-transparent hover:text-black dark:hover:bg-transparent dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>

              {/* Success Message */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-lg border border-green-500 bg-green-50 dark:bg-green-900/20 p-4 text-green-700 dark:text-green-400"
                >
                  ✓ Message sent successfully! I&apos;ll get back to you soon.
                </motion.div>
              )}

              {/* Error Message */}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-lg border border-red-500 bg-red-50 dark:bg-red-900/20 p-4 text-red-700 dark:text-red-400"
                >
                  ✗ {errorMessage}
                </motion.div>
              )}
            </form>
          </div>
        </div>

        <div className="mt-16">
          <span className="mb-6 inline-block font-bold tracking-[8px] text-gray-800 dark:text-gray-100 uppercase">
            Let&apos;s Connect
          </span>
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
            Feel free to reach out via the form above, email, or phone. I&apos;m based in Germany and available for
            both remote and on-site projects across Europe.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
