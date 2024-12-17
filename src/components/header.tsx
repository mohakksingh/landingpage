import { Globe } from "lucide-react";

const Header = () => {
  return (
    <div className="z-10 rounded-xl border w-3/5 mt-2">
      <header className="h-14 px-4 flex items-center ">
        <div className="flex items-center">
          <Globe className="w-6 h-6 mr-2"></Globe>
          <a className="font-bold" href="/">
            Quanta Inc.
          </a>
        </div>
        <div className="ml-auto gap-4 flex ">
          <a
            className="font-bold bg-clip-text text-transparent bg-gradient-to-t from-neutral-100 to-neutral-400 dark:from-black dark:to-neutral-100 font-sans hover:text-white"
            href="#pricing"
          >
            Home
          </a>
          <a
            className="font-bold   bg-clip-text text-transparent bg-gradient-to-t from-neutral-100 to-neutral-400 dark:from-black dark:to-neutral-100 font-sans hover:text-white"
            href=""
          >
            About
          </a>
          <a
            className="font-bold  bg-clip-text text-transparent bg-gradient-to-t from-neutral-100 to-neutral-400 dark:from-black dark:to-neutral-100 font-sans hover:text-white"
            href=""
          >
            Contact
          </a>
          <a
            className="font-bold bg-clip-text text-transparent bg-gradient-to-t from-neutral-100 to-neutral-400 dark:from-black dark:to-neutral-100 font-sans hover:text-white pr-3"
            href=""
          >
            Pricing
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
