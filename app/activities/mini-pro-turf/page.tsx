import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
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
  Sun,
  Droplets,
} from "lucide-react"

export default function MiniProTurfPage() {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=500&auto=format&fit=crop&q=60"
            alt="Professional mini pro turf"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <Badge
                variant="secondary"
                className="bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white border-none"
              >
                <Award className="w-4 h-4 mr-2" />
                Premium Synthetic Turf - Multi-Sport Facility
              </Badge>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Experience
                <span className="block bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent">
                  Mini Pro Turf
                </span>
              </h1>

              <p className="text-xl text-gray-200 leading-relaxed max-w-lg">
                Play on premium synthetic turf designed for multiple sports. Weather-resistant,
                professional-grade surface perfect for football, cricket, and various outdoor activities.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#f39318] to-[#FF5500] hover:from-[#e8840f] hover:to-[#e54d00] text-lg px-8 py-6"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Book Your Session
                </Button>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg px-8 py-6 border-white hover:bg-white text-gray-900"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#f39318]">500+</div>
                  <div className="text-sm text-gray-300">Monthly Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#f39318]">2</div>
                  <div className="text-sm text-gray-300">Premium Turfs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#f39318]">24/7</div>
                  <div className="text-sm text-gray-300">Available</div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-2xl blur opacity-20"></div>
                <img
                  src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=500&auto=format&fit=crop&q=60"
                  alt="Players on synthetic turf"
                  className="relative rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Premium Turf
              <span className="bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent"> Features</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the perfect playing surface with our state-of-the-art synthetic turf technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Premium Surface</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  High-quality synthetic turf with optimal grip, bounce, and durability for professional play
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Droplets className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Weather Resistant</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  All-weather playing surface that performs consistently in rain or shine
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Multi-Sport</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Perfect for football, cricket, hockey, and various other outdoor sports activities
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Safe Playing</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Shock-absorbing surface reduces injury risk and provides comfortable gameplay
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Sun className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">LED Lighting</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Professional LED floodlights for excellent visibility during evening games
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Flexible Booking</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Hourly bookings available with convenient online reservation system
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sports Supported */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sports We
              <span className="bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent">
                {" "}
                Support
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our versatile turf surface is designed to accommodate multiple sports and activities
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Multi-Sport Excellence</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our mini pro turf features a premium synthetic surface that provides consistent
                ball bounce, excellent traction, and optimal playing conditions for various sports.
                The surface is designed to meet professional standards while ensuring player safety.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-[#f39318] mb-1">Football</div>
                  <div className="text-sm text-gray-400">5v5 & 7v7</div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-[#f39318] mb-1">Cricket</div>
                  <div className="text-sm text-gray-400">Practice & Matches</div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-[#f39318] mb-1">Hockey</div>
                  <div className="text-sm text-gray-400">Field Hockey</div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-[#f39318] mb-1">Training</div>
                  <div className="text-sm text-gray-400">Fitness & Drills</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-2xl blur opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=500&auto=format&fit=crop&q=60"
                alt="Multi-sport turf facility"
                className="relative rounded-2xl shadow-2xl w-full h-80 object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=300&auto=format&fit=crop&q=60"
                alt="Football on turf"
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <h4 className="text-lg font-bold">Football</h4>
                <p className="text-sm text-gray-300">5v5 & 7v7 matches</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=300&auto=format&fit=crop&q=60"
                alt="Cricket practice"
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <h4 className="text-lg font-bold">Cricket</h4>
                <p className="text-sm text-gray-300">Practice sessions</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&auto=format&fit=crop&q=60"
                alt="Hockey training"
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <h4 className="text-lg font-bold">Hockey</h4>
                <p className="text-sm text-gray-300">Field hockey</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&auto=format&fit=crop&q=60"
                alt="Fitness training"
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <h4 className="text-lg font-bold">Training</h4>
                <p className="text-sm text-gray-300">Fitness & drills</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Why Choose Our
                <span className="bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent">
                  Mini Pro Turf
                </span>
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Consistent Performance</h4>
                    <p className="text-gray-600">
                      Uniform surface provides predictable ball bounce and player movement in all conditions
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Low Maintenance</h4>
                    <p className="text-gray-600">
                      No mud, no grass stains, and always ready to play regardless of weather
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Enhanced Safety</h4>
                    <p className="text-gray-600">
                      Shock-absorbing properties reduce impact on joints and minimize injury risk
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Professional Standards</h4>
                    <p className="text-gray-600">FIFA-quality turf that meets international playing standards</p>
                  </div>
                </div>
              </div>

              <Button className="mt-8 bg-gradient-to-r from-[#f39318] to-[#FF5500] hover:from-[#e8840f] hover:to-[#e54d00] text-lg px-8 py-6">
                Reserve Your Slot
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&auto=format&fit=crop&q=60"
                  alt="Professional turf surface"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="text-center p-4 border-2 border-lime-400/20 hover:border-lime-400 transition-colors">
                  <div className="text-2xl font-bold text-[#f39318] mb-1">FIFA</div>
                  <div className="text-sm text-gray-600">Quality Standard</div>
                </Card>
                <Card className="text-center p-4 border-2 border-lime-400/20 hover:border-lime-400 transition-colors">
                  <div className="text-2xl font-bold text-[#f39318] mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Available</div>
                </Card>
                <Card className="text-center p-4 border-2 border-lime-400/20 hover:border-lime-400 transition-colors">
                  <div className="text-2xl font-bold text-[#f39318] mb-1">LED</div>
                  <div className="text-sm text-gray-600">Floodlights</div>
                </Card>
                <Card className="text-center p-4 border-2 border-lime-400/20 hover:border-lime-400 transition-colors">
                  <div className="text-2xl font-bold text-[#f39318] mb-1">Multi</div>
                  <div className="text-sm text-gray-600">Sports</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Mini Pro Turf
              <span className="bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent">
                {" "}
                Booking Charges
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Flexible half-hour booking slots available throughout the day from Monday to Sunday.
            </p>
          </div>

          <Card className="border-0 shadow-xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white">
              <CardTitle className="text-2xl">Half-Hour Session Pricing</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-white/90 text-gray-900">
                      <th className="py-4 px-6 text-left text-sm sm:text-base font-semibold">Days</th>
                      <th className="py-4 px-6 text-left text-sm sm:text-base font-semibold">Timings</th>
                      <th className="py-4 px-6 text-right text-sm sm:text-base font-semibold">Charges</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-orange-50 transition-colors">
                      <td className="px-6 py-4 text-gray-700 text-sm sm:text-base">Monday to Sunday</td>
                      <td className="px-6 py-4 text-gray-700 text-sm sm:text-base">06:00 AM – 06:00 PM</td>
                      <td className="px-6 py-4 text-right text-sm sm:text-base font-bold text-[#f39318]">
                        ₹350 (including GST)
                      </td>
                    </tr>
                    <tr className="hover:bg-orange-50 transition-colors bg-gray-50">
                      <td className="px-6 py-4 text-gray-700 text-sm sm:text-base">Monday to Sunday</td>
                      <td className="px-6 py-4 text-gray-700 text-sm sm:text-base">06:00 PM – 12:00 AM</td>
                      <td className="px-6 py-4 text-right text-sm sm:text-base font-bold text-[#f39318]">
                        ₹500 (including GST)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <p className="text-sm text-gray-500 mt-4 text-center">
            Each slot is for a 30-minute session. Longer durations can be booked by reserving consecutive slots.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://booking.thelifesports.in/bookings"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#f39318] to-[#FF5500] hover:from-[#e8840f] hover:to-[#e54d00] text-lg px-8 py-6"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Online
              </Button>
            </a>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-[#f39318] text-[#f39318] hover:bg-gradient-to-r hover:from-[#f39318] hover:to-[#FF5500] hover:text-white"
              >
                <Phone className="w-5 h-5 mr-2" />
                Enquire Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Play on
            <span className="bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent">
              Premium Turf?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Experience the difference of professional-grade synthetic turf. Book your session today!
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
                Book Your Turf Now
              </Button>
            </a>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-10 py-6 border-white text-white hover:bg-white hover:text-gray-900"
              >
                <Phone className="w-6 h-6 mr-3" />
                Call Us Today
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-400">
            Bookings for all sports will be available through our website
          </p>
        </div>
      </section>


    </div>
  )
}
