import { Check } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
export default function Pricingpage() {
  return (
    <div className="bg-[#0B1120] min-h-screen text-white my-10 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Pricing Plans</h1>
        <p className="text-xl text-gray-400">Unlock the perfect plan for your needs.</p>
      </div>
       
      <div className="max-w-7xl mx-auto text-center mt-20 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Websites & Web App Development</h2>
        <p className="text-xl text-gray-400">Dynamic and Modern solutions for your business</p>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {/* Basic Plan */}
        <Card className="bg-gray-900 border-gray-800 relative overflow-hidden">
          <CardHeader className="pb-4">
            <CardTitle className="text-blue-400 text-2xl">BASIC</CardTitle>
            <CardDescription className="text-gray-400">Basic website package</CardDescription>
            <div className="mt-4 flex items-baseline">
              <span className="text-5xl font-extrabold tracking-tight text-zinc-200 ">$499</span>
              <span className="ml-1 text-gray-400">/project</span>
            </div>
          </CardHeader>
          <CardContent className="pb-6">
            <div className="mt-2 mb-6">
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Get Started</Button>
            </div>
            <div className="text-sm text-gray-400 mb-6">$0 per user / month</div>
            <ul className="space-y-3 text-white">
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-400 mr-3"></div>
                <span>Simple landing page</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-400 mr-3"></div>
                <span>Up to 5 pages</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-400 mr-3"></div>
                <span>Basic SEO optimization</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-400 mr-3"></div>
                <span>Mobile responsive design</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-400 mr-3"></div>
                <span>Contact form</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Standard Plan */}
        <Card className="bg-gray-900 border-gray-800 relative overflow-hidden">
          <div className="absolute top-0 inset-x-0">
            <div className="h-1 bg-gradient-to-r from-blue-400 to-purple-500"></div>
          </div>
          <CardHeader className="pb-4">
            <CardTitle className="text-blue-400 text-2xl">STANDARD</CardTitle>
            <CardDescription className="text-gray-400">Website + basic features</CardDescription>
            <div className="mt-4 flex items-baseline">
              <span className="text-5xl font-extrabold tracking-tight  text-zinc-200">$999</span>
              <span className="ml-1 text-gray-400">/project</span>
            </div>
          </CardHeader>
          <CardContent className="pb-6">
            <div className="mt-2 mb-6">
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Start 14-day Trial</Button>
            </div>
            <div className="text-sm text-gray-400 mb-6">$15 per user / month</div>
            <div className="flex items-center justify-between mb-4">
              <div className="h-1 bg-blue-400 w-1/2 rounded-full"></div>
              <div className="text-xs text-gray-400 border border-gray-700 rounded-full px-2 py-0.5">20 users</div>
            </div>
            <ul className="space-y-3 text-white">
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-400 mr-3"></div>
                <span>Up to 10 pages</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-400 mr-3"></div>
                <span>Advanced SEO optimization</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-400 mr-3"></div>
                <span>Content management system</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-400 mr-3"></div>
                <span>Social media integration</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-400 mr-3"></div>
                <span>Email marketing setup</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-400 mr-3"></div>
                <span>Custom domain connection</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Premium Plan */}
        <Card className="bg-gray-900 border-gray-800 relative overflow-hidden">
          <div className="absolute -top-5 inset-x-0 flex justify-center">
            <Badge className="bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-1 rounded-md">Best Seller</Badge>
          </div>
          <CardHeader className="pb-4 pt-8">
            <CardTitle className="text-blue-400 text-2xl">PREMIUM</CardTitle>
            <CardDescription className="text-gray-400">Full-featured web app</CardDescription>
            <div className="mt-4 flex flex-col">
              <div className="flex items-center justify-center">
                <span className="text-gray-400 line-through text-lg">$2500</span>
                <span className="ml-2 text-sm bg-blue-900 text-blue-200 px-2 py-0.5 rounded">Save 25%</span>
              </div>
              <div className="flex items-baseline justify-center">
                <span className="text-5xl font-extrabold tracking-tight  text-zinc-200">$1875</span>
                <span className="ml-1 text-gray-400">/project</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pb-6">
            <div className="mt-2 mb-6">
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Start 14-day Trial</Button>
            </div>
            <div className="text-sm text-gray-400 mb-6">$25 per user / month</div>
            <div className="flex items-center justify-between mb-4">
              <div className="h-1 bg-blue-400 w-3/4 rounded-full"></div>
              <div className="text-xs text-gray-400 border border-gray-700 rounded-full px-2 py-0.5">50 users</div>
            </div>
            <ul className="space-y-3 text-white">
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-400 mr-3"></div>
                <span>Unlimited pages</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-400 mr-3"></div>
                <span>User authentication system</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-400 mr-3"></div>
                <span>Database integration</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-400 mr-3"></div>
                <span>Payment processing</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-400 mr-3"></div>
                <span>Admin dashboard</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-400 mr-3"></div>
                <span>API integration</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-400 mr-3"></div>
                <span>Advanced analytics</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Enterprise Plan */}
        <Card className="bg-gray-900 border-gray-800 relative overflow-hidden">
          <CardHeader className="pb-4">
            <CardTitle className="text-blue-400 text-2xl">ENTERPRISE</CardTitle>
            <CardDescription className="text-gray-400">Custom solutions</CardDescription>
            <div className="mt-4 flex items-baseline">
              <span className="text-3xl font-extrabold tracking-tight  text-zinc-200">Custom pricing</span>
            </div>
          </CardHeader>
          <CardContent className="pb-6">
            <div className="mt-2 mb-6">
              <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">Contact Us</Button>
            </div>
            <div className="text-sm text-gray-400 mb-6">Tailored to your needs</div>
            <ul className="space-y-3 text-white">
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-400 mr-3"></div>
                <span>Custom app development</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-400 mr-3"></div>
                <span>iOS & Android native apps</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-400 mr-3"></div>
                <span>Enterprise-grade security</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-400 mr-3"></div>
                <span>Dedicated support team</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-400 mr-3"></div>
                <span>Custom integrations</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-400 mr-3"></div>
                <span>White-label solutions</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-400 mr-3"></div>
                <span>Priority development</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Mobile App Section */}
      <div className="max-w-7xl mx-auto text-center mt-20 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Mobile App Development</h2>
        <p className="text-xl text-gray-400">Native iOS and Android solutions for your business</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Basic Mobile App */}
        <Card className="bg-gray-900 border-gray-800 relative overflow-hidden">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl text-blue-400">Basic</CardTitle>
            <div className="mt-4 flex flex-col">
              <div className="flex items-center justify-center">
                <span className="text-gray-400 line-through text-lg">$5500</span>
                <span className="ml-2 text-sm bg-blue-900 text-blue-200 px-2 py-0.5 rounded">Save 35%</span>
              </div>
              <div className="flex items-baseline justify-center">
                <span className="text-5xl font-extrabold tracking-tight  text-zinc-200">$3575</span>
                <span className="ml-1 text-gray-400">/platform</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pb-6">
            <ul className="space-y-3 mt-6 text-white">
              <li className="flex">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                <span>Single platform (iOS or Android)</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                <span>Basic UI/UX design</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                <span>Up to 5 screens</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                <span>Basic user authentication</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                <span>3 months support</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
              SUBSCRIBE
            </Button>
          </CardFooter>
        </Card>

        {/* Professional Mobile App */}
        <Card className="bg-gray-900 border-gray-800 relative overflow-hidden">
          <div className="absolute -top-5 inset-x-0 flex justify-center">
            <Badge className="bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-1 rounded-md">Best Seller</Badge>
          </div>
          <CardHeader className="pb-4 pt-8">
            <CardTitle className="text-2xl text-blue-400">Professional</CardTitle>
            <div className="mt-4 flex flex-col">
              <div className="flex items-center justify-center">
                <span className="text-gray-400 line-through text-lg ">$10000</span>
                <span className="ml-2 text-sm bg-blue-900 text-blue-200 px-2 py-0.5 rounded">Save 25%</span>
              </div>
              <div className="flex items-baseline justify-center">
                <span className="text-5xl font-extrabold tracking-tight  text-zinc-200">$7500</span>
                <span className="ml-1 text-gray-400">/both platforms</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pb-6">
            <ul className="space-y-3 mt-6 text-white ">
              <li className="flex">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                <span>Both platforms (iOS and Android)</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                <span>Advanced UI/UX design</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                <span>Up to 15 screens</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                <span>Social login integration</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                <span>Push notifications</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                <span>Basic analytics</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                <span>6 months support</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
              SUBSCRIBE
            </Button>
          </CardFooter>
        </Card>

        {/* Enterprise Mobile App */}
        <Card className="bg-gray-900 border-gray-800 relative overflow-hidden">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl text-blue-400">Enterprise</CardTitle>
            <div className="mt-4 flex flex-col">
              <div className="flex items-center justify-center">
                <span className="text-gray-400 line-through text-lg">$15000</span>
                <span className="ml-2 text-sm bg-blue-900 text-blue-200 px-2 py-0.5 rounded">Save 10%</span>
              </div>
              <div className="flex items-baseline justify-center">
                <span className="text-5xl font-extrabold tracking-tight  text-zinc-200">$13500</span>
                <span className="ml-1 text-gray-400">/both platforms</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pb-6">
            <ul className="space-y-3 mt-6 text-white">
              <li className="flex">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                <span>Both platforms (iOS and Android)</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                <span>Premium UI/UX design</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                <span>Unlimited screens</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                <span>Advanced authentication</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                <span>Payment gateway integration</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                <span>Advanced analytics</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                <span>Offline functionality</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                <span>12 months support</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
              SUBSCRIBE
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

