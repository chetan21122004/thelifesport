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
} from "lucide-react"

export default function PickleBallPage() {
  return (
    <div className="min-h-screen bg-background">
  
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex py-5 items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/bg-7.webp"
            alt="Professional pickle ball court"
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
                Professional Pickle Ball Courts - Premium Experience
              </Badge>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Master the
                <span className="block bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent">
                  Pickle Ball Game
                </span>
              </h1>

              <p className="text-xl text-gray-200 leading-relaxed max-w-lg">
                Experience the fastest-growing paddle sport at our premium pickle ball courts. Professional equipment, 
                 and a welcoming community for all skill levels.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://booking.thelifesports.in/bookings" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#f39318] to-[#FF5500] hover:from-[#e8840f] hover:to-[#e54d00] text-lg px-8 py-6"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Start Playing Today
                  </Button>
                </a>
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
                  <div className="text-3xl font-bold text-[#f39318]">200+</div>
                  <div className="text-sm text-gray-300">Active Players</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#f39318]">3</div>
                  <div className="text-sm text-gray-300">Premium Courts</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#f39318]">18</div>
                  <div className="text-sm text-gray-300">Hours Open</div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative w-full">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-2xl blur opacity-20"></div>
                <div className="relative rounded-2xl shadow-2xl overflow-hidden aspect-[4/3] w-full">
                  <img
                    src="/images/bg-6.JPG"
                    alt="Pickle ball players in action"
                    className="w-full h-full object-cover"
                  />
                </div>
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
              Why Choose Our
              <span className="bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent"> Pickle Ball Courts</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the perfect blend of fun, fitness, and competition with our premium facilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Professional Courts</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  3 official-size Pickleball courts with international-grade surface, layer system synthetic flooring for perfect bounce and grip
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Equipment Provided</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  High-quality paddles and balls available for rent, perfect for beginners and experienced players
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
                  Open 7 AM to 11 PM daily with easy online booking and walk-in availability
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">All Skill Levels</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Beginner-friendly environment with players of all ages and abilities
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Community Events</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Regular tournaments, social games, and community events to connect with fellow players
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Great Workout</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Low-impact, high-fun exercise that improves agility, balance, and cardiovascular health
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Pickle Ball */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What is
              <span className="bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent">
                {" "}
                Pickle Ball?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the fastest-growing sport that combines elements of tennis, badminton, and ping pong
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Easy to Learn, Fun to Play</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Pickle ball is played on a court similar to a badminton court with a net slightly lower than tennis. 
                The game uses solid paddles and a perforated plastic ball, making it easier on the joints while 
                still providing an excellent workout.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-[#f39318] mb-1">30x60</div>
                  <div className="text-sm text-gray-400">Court Size (ft)</div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-[#f39318] mb-1">36"</div>
                  <div className="text-sm text-gray-400">Net Height</div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-[#f39318] mb-1">2-4</div>
                  <div className="text-sm text-gray-400">Players</div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-[#f39318] mb-1">11</div>
                  <div className="text-sm text-gray-400">Points to Win</div>
                </div>
              </div>
            </div>

            <div className="relative w-full">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-2xl blur opacity-20"></div>
              <div className="relative rounded-2xl shadow-2xl overflow-hidden aspect-[4/3] w-full">
                <img
                  src="/images/bg-7.webp"
                  alt="Pickle ball court layout"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              PICKLEBALL COURTS
              <span className="bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent">
                {" "}
                (55-Minute Session)
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              3 Courts • Layer system synthetic flooring
            </p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              Official-size Pickleball courts with international-grade surface for perfect bounce and grip
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Time</th>
                    <th className="px-6 py-4 text-left font-semibold">Days</th>
                    <th className="px-6 py-4 text-right font-semibold">Charges (Including GST)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-orange-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">06:00 AM – 06:55 AM</td>
                    <td className="px-6 py-4 text-gray-600">
                      Monday to Sunday
                      <Badge className="ml-2 bg-orange-100 text-orange-700 border-orange-300">Happy Hour</Badge>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="text-2xl font-bold text-[#FF5500]">₹354 (including GST)</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-orange-50 transition-colors bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">07:00 AM – 08:55 AM</td>
                    <td className="px-6 py-4 text-gray-600">Monday to Friday</td>
                    <td className="px-6 py-4 text-right">
                      <span className="text-2xl font-bold text-[#FF5500]">₹560 (including GST)</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-orange-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">09:00 AM – 04:55 PM</td>
                    <td className="px-6 py-4 text-gray-600">
                      Monday to Friday
                      <Badge className="ml-2 bg-orange-100 text-orange-700 border-orange-300">Happy Hour</Badge>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="text-2xl font-bold text-[#FF5500]">₹354 (including GST)</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-orange-50 transition-colors bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">05:00 PM – 11:55 PM</td>
                    <td className="px-6 py-4 text-gray-600">Monday to Friday</td>
                    <td className="px-6 py-4 text-right">
                      <span className="text-2xl font-bold text-[#FF5500]">₹560 (including GST)</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-orange-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">07:00 AM – 11:55 AM</td>
                    <td className="px-6 py-4 text-gray-600">Saturday to Sunday</td>
                    <td className="px-6 py-4 text-right">
                      <span className="text-2xl font-bold text-[#FF5500]">₹560 (including GST)</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-orange-50 transition-colors bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">12:00 PM – 03:55 PM</td>
                    <td className="px-6 py-4 text-gray-600">
                      Saturday to Sunday
                      <Badge className="ml-2 bg-orange-100 text-orange-700 border-orange-300">Happy Hour</Badge>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="text-2xl font-bold text-[#FF5500]">₹354 (including GST)</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-orange-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">04:00 PM – 11:55 PM</td>
                    <td className="px-6 py-4 text-gray-600">Saturday to Sunday</td>
                    <td className="px-6 py-4 text-right">
                      <span className="text-2xl font-bold text-[#FF5500]">₹560 (including GST)</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a 
              href="https://booking.thelifesports.in/bookings" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-gradient-to-r from-[#f39318] to-[#FF5500] hover:from-[#e8840f] hover:to-[#e54d00] text-lg px-10 py-6">
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Court Now
              </Button>
            </a>
            <p className="mt-4 text-sm text-gray-600">
              Bookings for all sports will be available through our website
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Health Benefits of
                <span className="bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent">
                  Pickle Ball
                </span>
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Low-Impact Exercise</h4>
                    <p className="text-gray-600">
                      Gentle on joints while providing excellent cardiovascular and strength benefits
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Improved Balance & Agility</h4>
                    <p className="text-gray-600">
                      Enhance coordination, balance, and quick reflexes through dynamic gameplay
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Social Connection</h4>
                    <p className="text-gray-600">
                      Meet new people and build friendships in our welcoming pickle ball community
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Mental Wellness</h4>
                    <p className="text-gray-600">Reduce stress and boost mood through fun, engaging physical activity</p>
                  </div>
                </div>
              </div>

              <a 
                href="https://booking.thelifesports.in/bookings" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="mt-8 bg-gradient-to-r from-[#f39318] to-[#FF5500] hover:from-[#e8840f] hover:to-[#e54d00] text-lg px-8 py-6">
                  Book Your Court
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <p className="mt-4 text-sm text-gray-600">
                Bookings for all sports will be available through our website
              </p>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <img
                  src="/images/bg-1.JPG"
                  alt="Pickle ball community"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <Card className="text-center p-4 border-2 border-[#f39318]/20 hover:border-[#f39318] transition-colors">
                  <div className="text-2xl font-bold text-[#f39318] mb-1">Beginner</div>
                  <div className="text-sm text-gray-600">Learn the Basics</div>
                </Card>
                <Card className="text-center p-4 border-2 border-[#f39318]/20 hover:border-[#f39318] transition-colors">
                  <div className="text-2xl font-bold text-[#f39318] mb-1">Inter</div>
                  <div className="text-sm text-gray-600">Improve Skills</div>
                </Card>
                <Card className="text-center p-4 border-2 border-[#f39318]/20 hover:border-[#f39318] transition-colors">
                  <div className="text-2xl font-bold text-[#f39318] mb-1">Advanced</div>
                  <div className="text-sm text-gray-600">Competitive Play</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  )
}
