import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-gradient-to-b from-muted to-background">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Our Service</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
          We provide high-quality solutions to elevate your business and deliver lasting value.
        </p>
        <Button asChild>
          <Link to="/contact">Get Started</Link>
        </Button>
      </section>

      <Separator className="my-8" />

      {/* Features Section */}
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-10">Our Services</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {["Web Development", "UI/UX Design", "Cloud Integration"].map((feature) => (
            <Card key={feature}>
              <CardHeader>
                <CardTitle>{feature}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {feature} tailored to your needs with cutting-edge technology and scalable architecture.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-8" />

      {/* Call to Action */}
      <section className="text-center py-20 px-4 bg-muted">
        <h2 className="text-3xl font-bold mb-4">Ready to transform your business?</h2>
        <p className="text-muted-foreground mb-6">
          Contact us today and see how we can help.
        </p>
        <Button asChild>
          <Link to="/contact">Contact Us</Link>
        </Button>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
