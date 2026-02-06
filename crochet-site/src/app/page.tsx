import Image from "next/image";

// Sample crochet projects data - you can replace these with your actual projects
const crochetProjects = [
  {
    id: 1,
    title: "Cross Body Bag",
    description: "A warm and soft bag perfect for everyday use",
    category: "Fashion",
  },
  {
    id: 2,
    title: "Food Platter",
    description: "Sorted food platter for your next party",
    category: "Toys",
  },
  {
    id: 3,
    title: "Granny Square Bag",
    description: "A colorful and stylish tote bag",
    category: "Accessories",
  },
  {
    id: 4,
    title: "Baby Booties",
    description: "Sweet little booties for tiny feet",
    category: "Baby Items",
  },
  {
    id: 5,
    title: "Floral Coasters",
    description: "Beautiful decorative coasters for your home",
    category: "Home Decor",
  },
  {
    id: 6,
    title: "Scarf Set",
    description: "Crossiant Scarf",
    category: "Accessories",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-rose-100 dark:bg-gray-900/80 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-rose-600 dark:text-rose-400">
              🧶 Goji NiuPi
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-rose-600 dark:text-gray-300 dark:hover:text-rose-400 transition-colors">
                Home
              </a>
              <a href="#gallery" className="text-gray-700 hover:text-rose-600 dark:text-gray-300 dark:hover:text-rose-400 transition-colors">
                Gallery
              </a>
              <a href="#about" className="text-gray-700 hover:text-rose-600 dark:text-gray-300 dark:hover:text-rose-400 transition-colors">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-rose-600 dark:text-gray-300 dark:hover:text-rose-400 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Handmade with
              <span className="text-rose-600 dark:text-rose-400"> Love</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Discover beautiful crochet creations, each piece crafted with care and attention to detail
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#gallery"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-rose-600 hover:bg-rose-700 rounded-full transition-colors shadow-lg hover:shadow-xl"
              >
                View Gallery
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-rose-600 bg-white hover:bg-rose-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-rose-400 rounded-full transition-colors border-2 border-rose-600 dark:border-rose-400"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-rose-200 dark:bg-rose-900 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-amber-200 dark:bg-amber-900 rounded-full opacity-20 blur-2xl"></div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              My Creations
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Each piece is unique, made with premium yarns and careful craftsmanship
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {crochetProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-rose-100 dark:border-gray-700"
              >
                <div className="aspect-square bg-gradient-to-br from-rose-100 to-amber-100 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center relative overflow-hidden">
                  {/* Placeholder for image - replace with actual images */}
                  <div className="text-6xl opacity-30 group-hover:scale-110 transition-transform duration-300">
                    🧶
                  </div>
                  <div className="absolute top-4 right-4 bg-rose-600 dark:bg-rose-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8 sm:p-12 border border-rose-100 dark:border-gray-700">
            <div className="text-center mb-8">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                About My Craft
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                Welcome to my crochet journey! I've been creating beautiful handmade items for years, 
                combining traditional techniques with modern designs. Each piece is crafted with care, 
                using high-quality materials and attention to detail.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                From cozy blankets and warm accessories to adorable amigurumi toys, I love bringing 
                yarn to life through crochet. Every project is a labor of love, and I'm excited to 
                share my creations with you.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4 bg-rose-50 dark:bg-gray-800 rounded-xl">
                  <div className="text-3xl mb-2">🎨</div>
                  <div className="font-semibold text-gray-900 dark:text-white">Custom Designs</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Unique patterns</div>
                </div>
                <div className="text-center p-4 bg-amber-50 dark:bg-gray-800 rounded-xl">
                  <div className="text-3xl mb-2">✨</div>
                  <div className="font-semibold text-gray-900 dark:text-white">Quality Materials</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Premium yarns</div>
                </div>
                <div className="text-center p-4 bg-pink-50 dark:bg-gray-800 rounded-xl">
                  <div className="text-3xl mb-2">❤️</div>
                  <div className="font-semibold text-gray-900 dark:text-white">Made with Love</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Handcrafted care</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Interested in a custom piece or have questions? I'd love to hear from you!
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8 sm:p-12 border border-rose-100 dark:border-gray-700">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                  placeholder="Tell me about your project or ask any questions..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 bg-rose-600 hover:bg-rose-700 text-white font-medium rounded-full transition-colors shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <span>📧</span>
                  <span>your.email@example.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📱</span>
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-rose-400 mb-4">
              🧶 Goji NiuPi
            </div>
            <p className="text-gray-400 mb-6">
              Handmade with love and care
            </p>
            <div className="flex justify-center space-x-6 mb-6">
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">
                Etsy
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Goji NiuPi. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
