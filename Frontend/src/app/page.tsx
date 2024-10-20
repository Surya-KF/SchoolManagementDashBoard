import Link from "next/link"
import LoginPage from "./sign-in/page";
export default function Homepage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center mb-4 sm:mb-0">
            <svg className="h-10 w-10 mr-2 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
            <span className="text-2xl font-bold">Shree Divine School</span>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/" className="hover:text-yellow-300 transition-colors duration-200">Home</Link></li>
              <li><Link href="/sign-in" className="hover:text-yellow-300 transition-colors duration-200">Login</Link></li>
              <li><Link href="/admin" className="hover:text-yellow-300 transition-colors duration-200">About Us</Link></li>
              <li><Link href="/admissions" className="hover:text-yellow-300 transition-colors duration-200">Admissions</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-300 transition-colors duration-200">Parent</Link></li>
            </ul>
          </nav>
        </div>=
      </header>

      <main className="flex-grow">
        <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-yellow-300">Welcome to Shree Divine Secondary English Boarding School</h1>
            <p className="text-xl mb-8">Nurturing minds, shaping futures</p>
            <Link href="/about" className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 transition-colors duration-200 px-6 py-3 rounded-md font-semibold text-lg inline-block">Learn More</Link>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-indigo-800">Why Choose Shree Divine?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Quality Education", icon: "book-open", description: "We provide a comprehensive curriculum that fosters academic excellence and critical thinking." },
                { title: "Experienced Faculty", icon: "users", description: "Our dedicated teachers are committed to nurturing each student's potential." },
                { title: "Extracurricular Activities", icon: "award", description: "We offer a wide range of activities to promote holistic development." },
                { title: "Modern Facilities", icon: "graduation-cap", description: "Our school is equipped with state-of-the-art facilities to enhance the learning experience." }
              ].map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-100 to-indigo-100 shadow-md hover:shadow-lg transition-shadow duration-200 rounded-lg p-6">
                  <div className="flex items-center text-indigo-700 mb-4">
                    <svg className="h-6 w-6 mr-2 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-yellow-300">Contact Us</h3>
              <p>123 School Street, Kathmandu, Nepal</p>
              <p>Phone: +977 1234567890</p>
              <p>Email: info@shreedivine.edu.np</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-yellow-300">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:text-yellow-300 transition-colors duration-200">About Us</Link></li>
                <li><Link href="/admissions" className="hover:text-yellow-300 transition-colors duration-200">Admissions</Link></li>
                <li><Link href="/academics" className="hover:text-yellow-300 transition-colors duration-200">Academic Calendar</Link></li>
                <li><Link href="/news" className="hover:text-yellow-300 transition-colors duration-200">News & Events</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-yellow-300">Follow Us</h3>
              <div className="flex space-x-4">
                {["facebook", "twitter", "instagram"].map((social) => (
                  <Link key={social} href={`https://www.${social}.com`} className="hover:text-yellow-300 transition-colors duration-200">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="sr-only">{social}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-blue-200">
            <p>&copy; {new Date().getFullYear()} Shree Divine Secondary English Boarding School. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}