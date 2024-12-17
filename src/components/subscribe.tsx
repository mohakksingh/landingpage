import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Subscribe = () => {
  return (
    <div className="my-20 ">
      <div>
        <h2 className="text-white pb-2 text-5xl font-bold font-sans">
          {" "}
          Ready to get Started
        </h2>
        <p className="text-zinc-500 pb-2">
          Join thousands of satisfied customers and start building your dream
          website today.
        </p>
        <Button>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=singhmohak999@gmail.com">
            Start you free Trial{" "}
          </a>{" "}
          <ArrowRight />{" "}
        </Button>
      </div>
    </div>
  );
};

export default Subscribe;
