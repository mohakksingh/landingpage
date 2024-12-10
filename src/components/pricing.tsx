import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { CardTitle } from "./ui/card-hover-effect";
import { Button } from "./ui/button";
import { Spotlight } from "./ui/spotlight";
import checkmark from "../assets/checkmark.svg"

const Pricing = () => {
  return (
    <div className="flex px-4 items-center justify-center">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl items-center justify-center">
        {[
          {
            name: "Free",
            price: "$9",
            tag: "Great for trying out Finament and for tiny teams",
            features: [
              "1 Website",
              "5GB Storage",
              "Basic Support",
              "Account Aggregation",
              "Expense Tracking",
            ],
            button: "Start for Free",
          },
          {
            name: "Professional",
            price: "$19",
            tag: "Best for growing startups and growth startups",
            features: [
              "5 Websites",
              "20GB Storage",
              "Priority Support",
              "Customizable Dashboards",
              "Investment Tracking",
            ],
            button: "Sign Up with Professional",
          },
          {
            name: "Enterprise",
            price: "$49",
            tag: "Best for large scale companies and teams requiring high security",
            features: [
              "Unlimited Websites",
              "100GB Storage",
              "24/7 Support",
              "Premium Widgets",
              "Advaned Security",
            ],
            button: "Sign Up with Enterprise",
          },
        ].map((plan) => (
          <Card key={plan.name} className="flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="font-light text-md text-neutral-500">
                {plan.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className=" bg-clip-text text-transparent bg-gradient-to-t from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-xl md:text-4xl lg:text-4xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                {plan.price}
                <span className="">/month</span>
              </p>
              <p className="font-light text-md text-neutral-500">{plan.tag}</p>
              <Button className="my-5 w-full bg-[#2a2a2d] text-white border border-white hover:bg-red-600">
                {plan.button}
              </Button>
              <div className="bg-zinc-950 p-8 rounded-lg">
                <div className="flex items-center justify-center mb-2 ">
                  <div className="h-px bg-zinc-700 flex-grow" />
                  <h2 className="text-zinc-400 text-center text-sm tracking-widest px-4">
                    FEATURES
                  </h2>
                  <div className="h-px bg-zinc-700 flex-grow" />
                </div>
              </div>
              <ul className="mt-4 space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-4">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-blue-500"
                      >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 16.2l-3.5-3.5 1.4-1.4 2.1 2.1 5.6-5.6 1.4 1.4L9 16.2z" />
                      </svg>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
