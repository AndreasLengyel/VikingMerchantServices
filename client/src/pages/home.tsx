import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  PillBottle, 
  Sparkles, 
  TrendingUp, 
  Plane, 
  Pill, 
  Network, 
  PlayCircle, 
  Repeat,
  Search,
  Handshake,
  BarChart3,
  Mail,
  Phone,
  Clock,
  Facebook,
  Twitter,
  Linkedin
} from "lucide-react";
import vikingLogo from "@assets/VIKING-MERCHANT-SERVICES-LR_1753981973267.jpg";

const businessTypes = [
  {
    icon: PillBottle,
    title: "Nutraceutical/Diet",
    description: "Specialized processing for health supplements and dietary products with compliance expertise."
  },
  {
    icon: Sparkles,
    title: "Skincare",
    description: "Tailored solutions for beauty and skincare merchants with subscription models."
  },
  {
    icon: TrendingUp,
    title: "Credit Repair",
    description: "Compliant processing solutions for credit repair and financial services businesses."
  },
  {
    icon: Plane,
    title: "Travel Agencies",
    description: "High-volume processing for travel bookings with chargeback protection."
  },
  {
    icon: Pill,
    title: "Pharmacy/Online Pharmacy",
    description: "Secure processing for pharmaceutical merchants with regulatory compliance."
  },
  {
    icon: Network,
    title: "MLMs",
    description: "Multi-level marketing payment solutions with distributor management features."
  },
  {
    icon: PlayCircle,
    title: "Entertainment",
    description: "Flexible processing for entertainment and adult content platforms."
  },
  {
    icon: Repeat,
    title: "Content/Subscription",
    description: "Recurring billing solutions for subscription-based content platforms."
  }
];

export default function Home() {

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-background shadow-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-primary flex items-center">
                <img 
                  src={vikingLogo} 
                  alt="Viking Merchant Services Logo" 
                  className="h-12 w-auto mr-3"
                />
                <span className="hidden sm:inline">Viking Merchant Services</span>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
                data-testid="nav-home"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
                data-testid="nav-services"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('approach')} 
                className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
                data-testid="nav-approach"
              >
                Our Approach
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
                data-testid="nav-contact"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-muted to-background py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Expert eCommerce Payment Processing Solutions
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Viking Merchant Services specializes in placing eCommerce businesses with both Domestic and Offshore processors at highly competitive rates. Regardless of your business type, return rates, or credit history.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection('contact')} 
                  size="lg"
                  className="px-8 py-4 text-lg"
                  data-testid="button-consultation"
                >
                  Get Free Consultation
                </Button>
                <Button 
                  onClick={() => scrollToSection('services')} 
                  variant="outline" 
                  size="lg"
                  className="px-8 py-4 text-lg"
                  data-testid="button-services"
                >
                  View Services
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
                alt="Professional business partnership handshake" 
                className="rounded-xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">SERVICES</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We specialize in serving high-risk and challenging business types that others won't touch. Our stable of processors can address your specific needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {businessTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300" data-testid={`service-card-${index}`}>
                  <CardContent className="p-6">
                    <div className="text-primary text-3xl mb-4">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{type.title}</h3>
                    <p className="text-muted-foreground">{type.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="text-center">
            <Button 
              onClick={() => scrollToSection('contact')} 
              size="lg"
              className="px-8 py-4 bg-green-600 hover:bg-green-700"
              data-testid="button-custom-solution"
            >
              Get Your Custom Solution
            </Button>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section id="approach" className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
                alt="Modern financial technology and data analytics" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">OUR APPROACH</h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Our unique approach at Viking Merchant Services focuses on understanding your specific business challenges and matching you with the right processor from our extensive network.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                    <Search className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Comprehensive Analysis</h3>
                    <p className="text-muted-foreground">We analyze your business type, transaction volume, chargeback history, and credit profile to find the perfect match.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                    <Handshake className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Strategic Partnerships</h3>
                    <p className="text-muted-foreground">Our stable of domestic and offshore processors ensures we can deliver solutions regardless of your risk profile.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                    <BarChart3 className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Competitive Rates</h3>
                    <p className="text-muted-foreground">We negotiate the most competitive rates in the industry, helping you maximize profitability.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Consultation Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">FREE CONSULTATION</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Get a free, no-obligation consultation to discover how we can solve your payment processing challenges. Our experts will review your business and provide tailored recommendations.
          </p>
          
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-8">
                Contact us today to discuss your payment processing needs. We'll deliver a solution that meets your requirements, regardless of your business type or credit history.
              </p>
              
              <div className="space-y-4">
                <a 
                  href="mailto:stephen@vikingmerchantservices.com" 
                  className="flex items-center justify-center bg-primary text-primary-foreground px-6 py-4 rounded-lg hover:bg-primary/90 transition-colors duration-200 font-semibold"
                  data-testid="link-email"
                >
                  <Mail className="h-5 w-5 mr-3" />
                  stephen@vikingmerchantservices.com
                </a>
                <a 
                  href="tel:+13102932000" 
                  className="flex items-center justify-center border-2 border-primary text-primary px-6 py-4 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200 font-semibold"
                  data-testid="link-phone"
                >
                  <Phone className="h-5 w-5 mr-3" />
                  +1 (310) 293-2000
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Contact Us</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your payment processing? Get in touch with our team of experts today.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card className="bg-muted">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-6">Get In Touch</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                        <Mail className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground uppercase tracking-wide">Email</p>
                        <a 
                          href="mailto:stephen@vikingmerchantservices.com" 
                          className="text-lg font-semibold text-primary hover:text-primary/80"
                          data-testid="contact-email"
                        >
                          stephen@vikingmerchantservices.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                        <Phone className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground uppercase tracking-wide">Phone</p>
                        <a 
                          href="tel:+13102932000" 
                          className="text-lg font-semibold text-primary hover:text-primary/80"
                          data-testid="contact-phone"
                        >
                          +1 (310) 293-2000
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                        <Clock className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground uppercase tracking-wide">Business Hours</p>
                        <p className="text-lg font-semibold text-foreground">Monday - Friday, 9 AM - 6 PM PST</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-foreground mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
                    data-testid="social-facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
                    data-testid="social-twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
                    data-testid="social-linkedin"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-6">Ready to Get Started?</h3>
                  <p className="text-muted-foreground mb-8">
                    Contact us today to discuss your payment processing needs. We'll deliver a solution that meets your requirements.
                  </p>
                  
                  <div className="space-y-4">
                    <a 
                      href="mailto:stephen@vikingmerchantservices.com" 
                      className="flex items-center justify-center bg-primary text-primary-foreground px-6 py-4 rounded-lg hover:bg-primary/90 transition-colors duration-200 font-semibold"
                      data-testid="contact-card-email"
                    >
                      <Mail className="h-5 w-5 mr-3" />
                      Email Us Now
                    </a>
                    <a 
                      href="tel:+13102932000" 
                      className="flex items-center justify-center border-2 border-primary text-primary px-6 py-4 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200 font-semibold"
                      data-testid="contact-card-phone"
                    >
                      <Phone className="h-5 w-5 mr-3" />
                      Call Us Today
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4 flex items-center">
                <Shield className="h-7 w-7 mr-2" />
                Viking Merchant Services
              </div>
              <p className="text-muted-foreground mb-4">
                Expert eCommerce payment processing solutions for high-risk businesses. Domestic and offshore processors at competitive rates.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => scrollToSection('home')} 
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    data-testid="footer-link-home"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')} 
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    data-testid="footer-link-services"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('approach')} 
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    data-testid="footer-link-approach"
                  >
                    Our Approach
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')} 
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    data-testid="footer-link-contact"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" /> 
                  stephen@vikingmerchantservices.com
                </p>
                <p className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" /> 
                  +1 (310) 293-2000
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Viking Merchant Services. All rights reserved. | Professional payment processing solutions for eCommerce businesses.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
