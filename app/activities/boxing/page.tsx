import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Trophy,
  Users,
  Clock,
  Star,
  CheckCircle,
  Target,
  Heart,
  Zap,
  Award,
  Phone,
  Mail,
  Calendar,
  Play,
  ArrowRight,
  Shield,
  Instagram,
  MapPin,
} from "lucide-react"
import Link from "next/link"

export default function BoxingPage() {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1620123449946-30d6efd4b8ba?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJveGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"

            alt="Professional boxing training"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        </div>

        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <Badge
                variant="secondary"
                className="bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white border-none"
              >
                <Award className="w-4 h-4 mr-2" />
                In Collaboration with Fittera The Boxing Gym
              </Badge>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Master the
                <span className="block bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent">
                  Art of Boxing
                </span>
              </h1>

              <p className="text-xl text-gray-200 leading-relaxed max-w-lg">
                Experience the best 1-hour boxing fitness in town. Train with National and International
                level players under expert guidance at our premium facility.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#f39318] to-[#FF5500] hover:from-[#e8840f] hover:to-[#e54d00] text-lg px-8 py-6"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Start Training Today
                </Button>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg px-8 py-6 border-white hover:bg-white text-gray-900"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Contact us for more details
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400">500+</div>
                  <div className="text-sm text-gray-300">Active Boxers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400">3</div>
                  <div className="text-sm text-gray-300">Locations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400">1Hr</div>
                  <div className="text-sm text-gray-300">Sessions</div>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <div className="relative max-w-md w-full">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-2xl blur opacity-20"></div>
                <img
                  src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=500&auto=format&fit=crop&q=60"
                  alt="Boxing training session"
                  className="relative rounded-2xl shadow-2xl w-full h-auto object-cover max-h-[450px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fittera Partnership Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Powered by
              <span className="bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent"> Fittera Boxing Gym</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience world-class boxing training in partnership with Pune's premier boxing fitness destination
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center">
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">FITTERA THE BOXING GYM</h3>
                    <p className="text-gray-600">Boxing Fitness Excellence</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Instagram className="w-5 h-5 text-pink-500" />
                    <div>
                      <p className="font-medium text-gray-900">@fitteraboxinggym</p>
                      <p className="text-sm text-gray-600">251 posts • 563 followers • 185 following</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-red-500" />
                    <p className="text-gray-700">Founder: <span className="font-medium">@ameykalambe</span></p>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-red-500 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Multiple Locations:</p>
                      <p className="text-gray-600">AUN • KTHRD • FC RD</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-2xl blur opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1561532325-7d5231a2dede?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGJveGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
                alt="Fittera boxing gym"
                className="relative rounded-2xl shadow-2xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Our
              <span className="bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent">
                {" "}
                Boxing Program
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Train with the best and achieve your fitness goals through professional boxing training
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-gray-800 text-white">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">National Level Trainers</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300">
                  Train with National and International level players and certified boxing coaches
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-gray-800 text-white">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">1-Hour Sessions</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300">
                  Intensive 1-hour boxing fitness sessions designed for maximum results and efficiency
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-gray-800 text-white">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Professional Equipment</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300">
                  High-quality boxing gloves, punching bags, and training equipment for safe practice
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-gray-800 text-white">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Fitness Focused</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300">
                  Boxing fitness training that improves strength, endurance, and overall physical conditioning
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-gray-800 text-white">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">All Levels Welcome</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300">
                  Programs designed for beginners to advanced boxers with personalized training approaches
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-gray-800 text-white">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Multiple Locations</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300">
                  Convenient locations across Pune: Aundh, Katraj Road, and FC Road
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Transform Your Fitness with
                <span className="bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent">
                  Boxing Training
                </span>
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Full Body Workout</h4>
                    <p className="text-gray-600">
                      Boxing engages every muscle group, providing comprehensive strength and cardio training
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Stress Relief</h4>
                    <p className="text-gray-600">
                      Release tension and stress through powerful, controlled movements and focused training
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Self-Defense Skills</h4>
                    <p className="text-gray-600">
                      Learn practical self-defense techniques while building confidence and mental strength
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Professional Guidance</h4>
                    <p className="text-gray-600">Train under National and International level coaches with proven expertise</p>
                  </div>
                </div>
              </div>

              <Button className="mt-8 bg-gradient-to-r from-[#f39318] to-[#FF5500] hover:from-[#e8840f] hover:to-[#e54d00] text-lg px-8 py-6">
                Join Boxing Program
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=600&auto=format&fit=crop&q=60"
                  alt="Boxing training benefits"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <Card className="text-center p-4 border-2 border-red-500/20 hover:border-red-500 transition-colors">
                  <div className="text-2xl font-bold text-red-500 mb-1">Beginner</div>
                  <div className="text-sm text-gray-600">Learn Basics</div>
                </Card>
                <Card className="text-center p-4 border-2 border-red-500/20 hover:border-red-500 transition-colors">
                  <div className="text-2xl font-bold text-red-500 mb-1">Inter</div>
                  <div className="text-sm text-gray-600">Build Skills</div>
                </Card>
                <Card className="text-center p-4 border-2 border-red-500/20 hover:border-red-500 transition-colors">
                  <div className="text-2xl font-bold text-red-500 mb-1">Advanced</div>
                  <div className="text-sm text-gray-600">Master Techniques</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your
            <span className="bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent">
              Boxing Journey?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join Fittera The Boxing Gym at The Life Sports Academy and experience the best boxing fitness training in Pune
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://booking.thelifesports.in/bookings"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#f39318] to-[#FF5500] hover:from-[#e8840f] hover:to-[#e54d00] text-lg px-10 py-6"
              >
                <Calendar className="w-6 h-6 mr-3" />
                Book Your Session
              </Button>
            </a>
           
          </div>
          <p className="mt-6 text-sm text-gray-400">
            Bookings for all sports will be available through our website
          </p>
        </div>
      </section>


    </div>
  )
}
