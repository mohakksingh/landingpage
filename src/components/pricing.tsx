import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { CardTitle } from "./ui/card-hover-effect";
import { Button } from "./ui/button";
import { Spotlight } from "./ui/spotlight";

const Pricing = () => {
  return (
    <div className="container px-4">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"/>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            name: "Basic",
            price: "$9",
            features: ["1 Website", "5GB Storage", "Basic Support"],
          },
          {
            name: "Pro",
            price: "$19",
            features: ["5 Websites", "20GB Storage", "Priority Support"],
          },
          {
            name: "Enterprise",
            price: "$49",
            features: ["Unlimited Websites", "100GB Storage", "24/7 Support"],
          },
        ].map((plan) => (
          <Card key={plan.name} className="flex flex-col justify-between">
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">
                {plan.price}
                <span className="">/month</span>
              </p>
              <ul className="mt-4 space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button>Choose Plan</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
