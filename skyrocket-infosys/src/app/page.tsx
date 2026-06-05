import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight, Bot, Code, Smartphone, Cloud, Globe, Zap, Users, Target, Shield, Clock, MapPin, Mail, Phone } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-24 pb-32 sm:pt-32 sm:pb-40 lg:pt-40 lg:pb-48 border-b border-slate-100">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-white to-white"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-primary-600 text-sm font-medium mb-8">
            <span className="flex h-2 w-2 rounded-full bg-primary-600"></span>
            Elevating Enterprise Solutions
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-tight">
            Build the future with <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-400">SkyRocket Infosys</span>
          </h1>
          <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
            We architect, develop, and scale modern web, mobile, and AI solutions that transform businesses and accelerate growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="#contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-primary-600 px-8 py-3.5 text-sm font-medium text-white shadow-lg shadow-blue-500/20 hover:bg-primary-700 hover:shadow-blue-500/30 transition-all"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link 
              href="#services" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-white border border-slate-200 px-8 py-3.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-all"
            >
              Explore Services
            </Link>
          </div>
          
          {/* Trust Badges */}
          <div className="mt-20 pt-10 border-t border-slate-100">
            <p className="text-sm font-medium text-slate-400 mb-6 uppercase tracking-wider">Trusted by innovative companies</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
              {/* Using generic placeholders for logos to keep it clean */}
              <div className="text-xl font-bold font-serif">Acme Corp</div>
              <div className="text-xl font-bold tracking-tighter">GLOBAL<span className="font-light">TECH</span></div>
              <div className="text-xl font-black italic">Nexus</div>
              <div className="text-xl font-semibold uppercase tracking-widest">Vertex</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 sm:py-32 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">Our Core Expertise</h2>
            <p className="text-lg text-slate-600">Comprehensive technology solutions designed to solve complex business challenges.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Bot, title: "AI Development", desc: "Custom machine learning models, NLP, and intelligent automation systems." },
              { icon: Code, title: "Web Development", desc: "High-performance enterprise web applications using modern frameworks." },
              { icon: Smartphone, title: "Mobile App Development", desc: "Native and cross-platform mobile experiences for iOS and Android." },
              { icon: Globe, title: "SaaS Development", desc: "Scalable multi-tenant architectures for modern software products." },
              { icon: Cloud, title: "Cloud Solutions", desc: "Cloud-native infrastructure, migration, and DevOps optimization." },
              { icon: Zap, title: "Digital Transformation", desc: "Modernizing legacy systems to accelerate business velocity." }
            ].map((service, idx) => (
              <div key={idx} className="group relative bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{service.desc}</p>
                <Link href="#contact" className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700">
                  Learn more <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-6">Why Partner With SkyRocket Infosys?</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We don't just write code; we build strategic assets. Our approach combines deep technical expertise with business acumen to deliver measurable results.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Users, title: "Expert Team", desc: "Senior engineers and architects with proven track records." },
                  { icon: Clock, title: "Fast Delivery", desc: "Agile methodologies ensuring rapid time-to-market." },
                  { icon: Target, title: "Cost Effective", desc: "Optimized processes that maximize your ROI." },
                  { icon: Shield, title: "Scalable Solutions", desc: "Architecture designed to grow with your business." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-primary-600">
                        <item.icon className="h-5 w-5" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900">{item.title}</h4>
                      <p className="mt-1 text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-slate-100 overflow-hidden relative">
                {/* Clean placeholder abstract graphic */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 via-slate-50 to-white"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-white rounded-2xl shadow-xl border border-slate-100 p-6 flex flex-col gap-4">
                  <div className="h-4 w-1/3 bg-slate-200 rounded-full"></div>
                  <div className="h-24 w-full bg-blue-50 rounded-lg"></div>
                  <div className="flex gap-4 mt-auto">
                    <div className="h-8 w-8 bg-slate-200 rounded-full"></div>
                    <div className="h-8 flex-1 bg-slate-100 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 sm:py-32 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">Featured Work</h2>
              <p className="text-lg text-slate-600">A glimpse into the digital experiences we've crafted for our clients.</p>
            </div>
            <Link href="#contact" className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors">
              View all case studies <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Fintech Dashboard", category: "Web Application", tag: "React & Node.js", color: "bg-blue-100" },
              { title: "Healthcare AI Assistant", category: "AI Solution", tag: "Python & Next.js", color: "bg-indigo-100" },
              { title: "Logistics Platform", category: "SaaS", tag: "AWS & TypeScript", color: "bg-sky-100" },
              { title: "E-Commerce App", category: "Mobile App", tag: "React Native", color: "bg-cyan-100" }
            ].map((project, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className={`aspect-video rounded-2xl ${project.color} mb-6 overflow-hidden relative border border-slate-200`}>
                  <div className="absolute inset-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm border border-white/50 transition-transform duration-500 group-hover:scale-[1.02]"></div>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm font-medium text-primary-600">{project.category}</span>
                  <span className="h-1 w-1 rounded-full bg-slate-300"></span>
                  <span className="text-sm text-slate-500">{project.tag}</span>
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 group-hover:text-primary-600 transition-colors">{project.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 sm:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-8">Our Mission</h2>
          <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed font-light mb-12">
            "To empower businesses by bridging the gap between complex technology and tangible growth. We believe in building software that is not only beautiful and fast, but strategically aligned with our clients' ultimate vision."
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-100 pt-12">
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">10+</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Years Exp.</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">150+</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">50+</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Experts</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">99%</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 sm:py-32 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-white">What Our Clients Say</h2>
            <p className="text-lg text-slate-400">Don't just take our word for it.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "SkyRocket Infosys transformed our legacy systems into a modern, lightning-fast platform. Their attention to detail and engineering excellence is unmatched.", author: "Sarah Jenkins", role: "CTO, Finova" },
              { text: "Working with them felt like an extension of our own team. They understood our business goals and delivered an AI solution that reduced our costs by 30%.", author: "Marcus Thorne", role: "CEO, HealthTech Solutions" },
              { text: "The quality of the web application they delivered exceeded all expectations. It's fast, beautifully designed, and built to scale effortlessly.", author: "Emily Chen", role: "VP Product, Nexus" }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
                <div className="flex gap-1 text-blue-400 mb-6">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                </div>
                <p className="text-slate-300 leading-relaxed mb-8">"{testimonial.text}"</p>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.author}</h4>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 sm:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-6">Ready to scale your business?</h2>
              <p className="text-lg text-slate-600 mb-12">
                Drop us a line to discuss your next project. Our team is ready to help you navigate your digital transformation journey.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-primary-600">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Email Us</h3>
                    <p className="mt-2 text-slate-600">hello@skyrocketinfosys.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-primary-600">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Call Us</h3>
                    <p className="mt-2 text-slate-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-primary-600">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Visit Us</h3>
                    <p className="mt-2 text-slate-600 max-w-xs">100 Tech Hub Avenue, Suite 400<br />San Francisco, CA 94107</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-100">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-slate-900 mb-2">First name</label>
                    <input type="text" id="first-name" className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 bg-white" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-slate-900 mb-2">Last name</label>
                    <input type="text" id="last-name" className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 bg-white" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-2">Email address</label>
                  <input type="email" id="email" className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 bg-white" placeholder="john@company.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-900 mb-2">How can we help?</label>
                  <textarea id="message" rows={4} className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 bg-white resize-none" placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="submit" className="w-full rounded-lg bg-primary-600 px-8 py-3.5 text-sm font-medium text-white shadow-sm hover:bg-primary-700 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function StarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
    </svg>
  );
}
