import './globals.css'
import Navbar from './components/Navbar';
import AnimatedBackground from './components/AnimatedBackground';
import Footer from './components/Footer';

export const metadata = {
  title: 'Matilda Esenam Gbeve',
  description: 'My Personal Portfolio Website',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
        <body className="bg-[#0d1117] text-white">
          <AnimatedBackground />
        <Navbar /> 
        {children}
        <Footer />
      </body>
    </html>
  )
}