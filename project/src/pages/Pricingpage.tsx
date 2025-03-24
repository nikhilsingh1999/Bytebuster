import { Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";

const pricingPlans = [
  {
    title: "BASIC",
    description: "Basic website package",
    price: "₹7,500",
    per: "/project",
    features: [
      "Simple landing page",
      "Up to 5 pages",
      "Basic SEO optimization",
      "Mobile responsive design",
      "Contact form",
    ],
    buttonText: "Get Started",
    buttonClass: "bg-blue-500 hover:bg-blue-600",
    badge: null,
    save: null,
  },
  {
    title: "STANDARD",
    description: "Website + basic features",
    price: "₹22,500",
    per: "/project",
    features: [
      "Up to 10 pages",
      "Advanced SEO optimization",
      "Content management system",
      "Social media integration",
      "Email marketing setup",
      "Custom domain connection",
    ],
    buttonText: "Start 14-day Trial",
    buttonClass: "bg-blue-500 hover:bg-blue-600",
    badge: null,
    save: null,
  },
  {
    title: "PREMIUM",
    description: "Full-featured web app",
    price: "₹37,500",
    per: "/project",
    features: [
      "Unlimited pages",
      "User authentication system",
      "Database integration",
      "Payment processing",
      "Admin dashboard",
      "API integration",
      "Advanced analytics",
    ],
    buttonText: "Start 14-day Trial",
    buttonClass: "bg-blue-500 hover:bg-blue-600",
    badge: "Best Seller",
    save: "Save 50%",
  },
  {
    title: "ENTERPRISE",
    description: "Custom solutions",
    price: "Custom pricing",
    per: "",
    features: [
      "Custom app development",
      "iOS & Android native apps",
      "Enterprise-grade security",
      "Dedicated support team",
      "Custom integrations",
      "White-label solutions",
      "Priority development",
    ],
    buttonText: "Contact Us",
    buttonClass: "bg-purple-500 hover:bg-purple-600",
    badge: null,
    save: null,
  },
];

const mobilePlans = [
  {
    title: "Basic",
    price: "₹29,250",
    originalPrice: "₹45,000",
    save: "Save 35%",
    per: "/platform",
    features: [
      "Single platform (iOS or Android)",
      "Basic UI/UX design",
      "Up to 5 screens",
      "Basic user authentication",
      "3 months support",
    ],
    buttonText: "SUBSCRIBE",
    buttonClass: "bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600",
    badge: null,
  },
  {
    title: "Professional",
    price: "₹56,250",
    originalPrice: "₹75,000",
    save: "Save 25%",
    per: "/both platforms",
    features: [
      "Both platforms (iOS and Android)",
      "Advanced UI/UX design",
      "Up to 15 screens",
      "Social login integration",
      "Push notifications",
      "Basic analytics",
      "6 months support",
    ],
    buttonText: "SUBSCRIBE",
    buttonClass: "bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600",
    badge: "Best Seller",
  },
  {
    title: "Enterprise",
    price: "₹67,500",
    originalPrice: "₹75,000",
    save: "Save 10%",
    per: "/both platforms",
    features: [
      "Both platforms (iOS and Android)",
      "Premium UI/UX design",
      "Unlimited screens",
      "Advanced authentication",
      "Payment gateway integration",
      "Advanced analytics",
      "Offline functionality",
      "12 months support",
    ],
    buttonText: "SUBSCRIBE",
    buttonClass: "bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600",
    badge: null,
  },
];

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
        {pricingPlans.map((plan, index) => (
          <Card key={index} className="bg-gray-900 border-gray-800 relative overflow-hidden">
            {plan.badge && (
              <div className="absolute -top-5 inset-x-0 flex justify-center">
                <Badge className="bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-1 rounded-md">{plan.badge}</Badge>
              </div>
            )}
            <CardHeader className={`pb-4 ${plan.badge ? "pt-8" : ""}`}>
              <CardTitle className="text-blue-400 text-2xl">{plan.title}</CardTitle>
              <CardDescription className="text-gray-400">{plan.description}</CardDescription>
              <div className="mt-4 flex flex-col">
                {plan.save && (
                  <div className="flex items-center justify-center">
                    <span className="text-gray-400 line-through text-lg">₹75,000</span>
                    <span className="ml-2 text-sm bg-blue-900 text-blue-200 px-2 py-0.5 rounded">{plan.save}</span>
                  </div>
                )}
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-extrabold tracking-tight text-zinc-200">{plan.price}</span>
                  <span className="ml-1 text-gray-400">{plan.per}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pb-6">
              <div className="mt-2 mb-6">
                <Button className={`w-full ${plan.buttonClass} text-white`}>{plan.buttonText}</Button>
              </div>
              <ul className="space-y-3 text-white">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mr-3"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Mobile App Section */}
      <div className="max-w-7xl mx-auto text-center mt-20 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Mobile App Development</h2>
        <p className="text-xl text-gray-400">Native iOS and Android solutions for your business</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {mobilePlans.map((plan, index) => (
          <Card key={index} className="bg-gray-900 border-gray-800 relative overflow-hidden">
            {plan.badge && (
              <div className="absolute -top-5 inset-x-0 flex justify-center">
                <Badge className="bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-1 rounded-md">{plan.badge}</Badge>
              </div>
            )}
            <CardHeader className={`pb-4 ${plan.badge ? "pt-8" : ""}`}>
              <CardTitle className="text-2xl text-blue-400">{plan.title}</CardTitle>
              <div className="mt-4 flex flex-col">
                <div className="flex items-center justify-center">
                  <span className="text-gray-400 line-through text-lg">{plan.originalPrice}</span>
                  <span className="ml-2 text-sm bg-blue-900 text-blue-200 px-2 py-0.5 rounded">{plan.save}</span>
                </div>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-extrabold tracking-tight text-zinc-200">{plan.price}</span>
                  <span className="ml-1 text-gray-400">{plan.per}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pb-6">
              <ul className="space-y-3 mt-6 text-white">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className={`w-full ${plan.buttonClass}`}>{plan.buttonText}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

