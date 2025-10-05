import ContactForm from '../components/ContactForm';
import ContactSidebar from '../components/ContactSidebar';
import { FaRegClock, FaCheckCircle } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <main className="pt-24 md:pt-32">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-pink-500 font-semibold">Full-Stack Developer & Creative Designer</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">From Ideas to Impact</h1>
          <p className="text-gray-400 text-lg mb-8">
            My work bridges design and technology to create meaningful user experiences, scalable applications, and standout brand identities. I’m open to freelance projects, consultations, and collaborations that challenge me to deliver real value.
          </p>
        </div>

        {/* Availability Badges */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16 text-sm text-gray-300">
          <span className="flex items-center gap-2"><FaRegClock className="text-green-400"/> 24h Response Time</span>
          <span className="flex items-center gap-2"><FaCheckCircle className="text-green-400"/> Open to Opportunities</span>
          <span className="flex items-center gap-2"><FaCheckCircle className="text-green-400"/> Remote Available</span>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <div>
            <ContactSidebar />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;