import { ModeToggle } from './mode-toggle'
import { Globe } from 'lucide-react'

const Header = () => {
  return (
    <div>
        <header className="h-14 px-4 flex items-center ">
            <div className="flex items-center">
              <Globe className="w-6 h-6 mr-2"></Globe>
              <a className="font-bold" href="/">
                Quanta Inc.
              </a>
              {/* <TextHoverEffect text="ACET" /> */}
            </div>
            <div className="ml-auto gap-4 flex ">
              <a
                className="font-bold mt-1 bg-clip-text text-transparent bg-gradient-to-t from-neutral-100 to-neutral-400 dark:from-neutral-100 dark:to-black font-sans"
                href=""
              >
                Home
              </a>
              <a
                className="font-bold mt-1  bg-clip-text text-transparent bg-gradient-to-t from-neutral-100 to-neutral-400 dark:from-neutral-100 dark:to-black font-sans"
                href=""
              >
                About
              </a>
              <a
                className="font-bold mt-1  bg-clip-text text-transparent bg-gradient-to-t from-neutral-100 to-neutral-400 dark:from-neutral-100 dark:to-black font-sans"
                href=""
              >
                Contact
              </a>
              <a
                className="font-bold mt-1  bg-clip-text text-transparent bg-gradient-to-t from-neutral-100 to-neutral-400 dark:from-neutral-100 dark:to-black font-sans "
                href=""
              >
                Pricing
              </a>
              <ModeToggle />
            </div>
          </header>
    </div>
  )
}

export default Header