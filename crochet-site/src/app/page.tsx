import Image from "next/image";

// Gallery data (images live in `public/projects/`)
const crochetProjects = [
  {
    id: 1,
    title: "Collar",
    description: "A cute statement collar to elevate an outfit.",
    category: "Accessories",
    imageSrc: "/projects/Collar.JPG",
    imageAlt: "Crochet collar",
  },
  {
    id: 2,
    title: "Duck",
    description: "A cheerful duck friend made with soft yarn.",
    category: "Amigurumi",
    imageSrc: "/projects/Duck.jpg",
    imageAlt: "Crochet duck",
  },
  {
    id: 3,
    title: "Girl with a Pearl Earring",
    description: "A crochet art piece inspired by a classic painting.",
    category: "Art",
    imageSrc: "/projects/Girl_with_Pearl_Earring.jpg",
    imageAlt: "Crochet girl with a pearl earring",
  },
  {
    id: 4,
    title: "Mosaic Your Pet",
    description: "A mosaic-style crochet portrait—perfect for pet lovers.",
    category: "Custom",
    imageSrc: "/projects/Mosaic_Your_Pet.png",
    imageAlt: "Crochet mosaic pet portrait",
  },
  {
    id: 5,
    title: "Pear Ya",
    description: "A playful pear character with lots of personality.",
    category: "Amigurumi",
    imageSrc: "/projects/Pear_Ya.jpg",
    imageAlt: "Crochet pear character",
  },
  {
    id: 6,
    title: "Penguin",
    description: "A tiny penguin buddy—great as a gift.",
    category: "Amigurumi",
    imageSrc: "/projects/Penguin.JPG",
    imageAlt: "Crochet penguin",
  },
  {
    id: 7,
    title: "Market Veggie",
    description: "Cute veggie friends for play or decoration.",
    category: "Amigurumi",
    imageSrc: "/projects/Market_Veggie.JPG",
    imageAlt: "Crochet vegetables",
  },
  {
    id: 8,
    title: "Coaster",
    description: "Bright coasters to add color to your table.",
    category: "Home Decor",
    imageSrc: "/projects/Coaster.jpg",
    imageAlt: "Crochet coaster",
  },
  {
    id: 9,
    title: "Matilda",
    description: "A character doll with a sweet, handmade charm.",
    category: "Dolls",
    imageSrc: "/projects/Matilda.jpg",
    imageAlt: "Crochet Matilda doll",
  },
  {
    id: 10,
    title: "Rudoff",
    description: "A festive reindeer friend for the holidays.",
    category: "Amigurumi",
    imageSrc: "/projects/Rudoff.png",
    imageAlt: "Crochet reindeer (Rudoff)",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-100 via-sky-100 to-amber-100">
      {/* Playful background blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-fuchsia-300/40 blur-3xl" />
      <div className="pointer-events-none absolute top-16 -right-28 h-96 w-96 rounded-full bg-sky-300/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-1/3 h-[28rem] w-[28rem] rounded-full bg-emerald-300/30 blur-3xl" />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/40 bg-white/70 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-extrabold tracking-tight text-fuchsia-700">
              🧶 Goji NiuPi
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-slate-700 hover:text-fuchsia-700 transition-colors">
                Home
              </a>
              <a href="#gallery" className="text-slate-700 hover:text-fuchsia-700 transition-colors">
                Gallery
              </a>
              <a href="#about" className="text-slate-700 hover:text-fuchsia-700 transition-colors">
                About
              </a>
              <a href="#contact" className="text-slate-700 hover:text-fuchsia-700 transition-colors">
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
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-6">
              Handmade{" "}
              <span className="bg-gradient-to-r from-fuchsia-700 via-sky-700 to-emerald-600 bg-clip-text text-transparent">
                Crafts
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-700 max-w-3xl mx-auto mb-8">
              Discover beautiful crochet creations, each piece crafted with care and attention to detail
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#gallery"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-600 to-sky-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition-all hover:from-fuchsia-700 hover:to-sky-700 hover:shadow-xl"
              >
                View Gallery
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border-2 border-fuchsia-600 bg-white/80 px-8 py-3 text-base font-semibold text-fuchsia-700 shadow-sm transition-colors hover:bg-white"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-fuchsia-300 rounded-full opacity-30 blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-amber-300 rounded-full opacity-30 blur-2xl"></div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
              My Creations
            </h2>
            <p className="text-lg text-slate-700 max-w-2xl mx-auto">
              Each piece is unique, made with premium yarns and careful craftsmanship
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {crochetProjects.map((project) => (
              <div
                key={project.id}
                className="group overflow-hidden rounded-2xl border border-white/60 bg-white/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-gradient-to-br from-fuchsia-100 via-sky-100 to-amber-100">
                  <Image
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    priority={project.id <= 3}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 via-transparent to-white/10" />
                  <div className="absolute top-4 right-4 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold text-white">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-700">
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
          <div className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-xl sm:p-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
                About My Craft
              </h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-700 text-lg leading-relaxed mb-6">
                Welcome to my crochet journey! I've been creating beautiful handmade items for years, 
                combining traditional techniques with modern designs. Each piece is crafted with care, 
                using high-quality materials and attention to detail.
              </p>
              <p className="text-slate-700 text-lg leading-relaxed mb-6">
                From cozy blankets and warm accessories to adorable amigurumi toys, I love bringing 
                yarn to life through crochet. Every project is a labor of love, and I'm excited to 
                share my creations with you.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4 rounded-xl bg-gradient-to-br from-fuchsia-50 to-sky-50">
                  <div className="text-3xl mb-2">🎨</div>
                  <div className="font-semibold text-slate-900">Custom Designs</div>
                  <div className="text-sm text-slate-700">Unique patterns</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-gradient-to-br from-amber-50 to-emerald-50">
                  <div className="text-3xl mb-2">✨</div>
                  <div className="font-semibold text-slate-900">Quality Materials</div>
                  <div className="text-sm text-slate-700">Premium yarns</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-gradient-to-br from-pink-50 to-fuchsia-50">
                  <div className="text-3xl mb-2">❤️</div>
                  <div className="font-semibold text-slate-900">Made with Love</div>
                  <div className="text-sm text-slate-700">Handcrafted care</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white/40 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-slate-700">
              Interested in a custom piece or have questions? I'd love to hear from you!
            </p>
          </div>
          <div className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-xl sm:p-12">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded-lg border border-slate-200 bg-white/90 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-transparent focus:ring-2 focus:ring-fuchsia-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded-lg border border-slate-200 bg-white/90 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-transparent focus:ring-2 focus:ring-fuchsia-400"
                  placeholder="gojiniupui.crochet@gmail.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full rounded-lg border border-slate-200 bg-white/90 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-transparent focus:ring-2 focus:ring-fuchsia-400"
                  placeholder="Tell me about your project or ask any questions..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-fuchsia-600 to-sky-600 px-8 py-3 font-semibold text-white shadow-lg transition-all hover:from-fuchsia-700 hover:to-sky-700 hover:shadow-xl sm:w-auto"
              >
                Send Message
              </button>
            </form>
            <div className="mt-8 border-t border-slate-200 pt-8">
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-slate-700">
                <div className="flex items-center gap-2">
                  <span>📧</span>
                  <span>your.email@example.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📱</span>
                  <span>+64 21 0532 3146</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-fuchsia-700 via-sky-700 to-emerald-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-extrabold mb-4">
              🧶 Goji NiuPi
            </div>
            <p className="text-white/85 mb-6">
              Handmade Crafts
            </p>
            <div className="flex justify-center space-x-6 mb-6">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                Facebook
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                Etsy
              </a>
            </div>
            <p className="text-white/70 text-sm">
              © {new Date().getFullYear()} Goji NiuPi. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
