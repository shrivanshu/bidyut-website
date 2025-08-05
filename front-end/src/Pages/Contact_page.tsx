import { Phone, Mail, Clock, MapPin, ArrowRight } from "lucide-react";
import Header from '../Component/Header'; 
import Footer from '../Component/Footer';

export default function Contactpage() {
  return (
       
    
    <div className="flex flex-col min-h-screen">
  
       
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <div
                 
                  className="text-green-600 dark:text-green-400 transition-colors duration-300"
                  style={{
                    backgroundColor: "transparent",
                    fontWeight: 600,
                    fontSize: "16px",
                    padding: "6px 16px",
                    display: "inline-block",
                    marginBottom: "20px",
                    letterSpacing: "0.3px",
                  }}
                >
                  Connect With Us. Build the Future.
                </div>
                <h1
                  className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
                  style={{
                    fontSize: "64px",
                    fontWeight: 600,
                    lineHeight: 1.2,
                    margin: "0 0 20px 0",
                  }}
                >
                  <span className="text-green-600">Get in Touch</span>{" "}
                  <span className="text-gray-900 dark:text-white">
                    Let's
                  </span>{" "}
                  <br />
                  <span className="text-gray-900 dark:text-white">
                    Build Something Great
                  </span>
                </h1>
                <p
                  className="max-w-[900px] text-gray-700 md:text-lg dark:text-gray-300 mx-auto"
                  style={{
                    fontSize: "16px",
                    fontWeight: 400,
                    maxWidth: "900px",
                    textAlign: "center",
                    margin: "0 auto 20px auto",
                    lineHeight: "1.6",
                  }}
                >
                  At Bidyut, we go beyond conversations — offering collaborative solutions powered by innovation,
                  creativity, and expertise. Discover a new way to connect, collaborate, and solve real-world challenges
                  with purpose.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form and Info Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
          <div className="container px-4 md:px-6 grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left Column: Contact Form */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Let's Talk About Your Project</h2>
              <form className="grid gap-6">
                <div className="grid gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="We'll get back to you here"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="company"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Company Name
                  </label>
                  <input
                    id="company"
                    type="text"
                    placeholder="Let us know who you represent"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="What's this about?"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Tell us how we can help"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white hover:bg-green-600/90 py-3 text-lg rounded-md"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Right Column: Contact Info and Map */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Prefer a Direct Approach?</h2>
              <div className="grid gap-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  <span className="text-gray-700 dark:text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  <span className="text-gray-700 dark:text-gray-300">info@bidyut.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  <span className="text-gray-700 dark:text-gray-300">Monday to Friday, 9AM - 6PM (GMT)</span>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="relative w-full h-[500px] bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 text-sm">
                  Map Placeholder
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-gray-950 p-4 shadow-lg">
                  <h3 className="text-lg font-semibold mb-2">Visit Our Office</h3>
                  <div className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm">
                    <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                    <span>
                      901 Clifton Corporate Park,
                      <br />
                      11/6, AB Road, Sector A, Slice 6, Aranya Nagar, Vijay Nagar, Indore, Madhya Pradesh 452010
                    </span>
                  </div>
                  <button className="mt-4 p-0 h-auto text-green-600 hover:text-green-600/90 bg-transparent border-none cursor-pointer flex items-center">
                    Get a Direction
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
    
  );
}