
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";

const Navbar = () => {
  const { user, signOut } = useAuth();

  return (
    <header className="border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            <line x1="10" y1="11" x2="10" y2="17" />
            <line x1="14" y1="11" x2="14" y2="17" />
          </svg>
          CleanNigeria
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-700 hover:text-primary-500 transition">Home</Link>
          <Link to="/services" className="text-gray-700 hover:text-primary-500 transition">Services</Link>
          <Link to="/collectors" className="text-gray-700 hover:text-primary-500 transition">Collectors</Link>
          <Link to="/map" className="text-gray-700 hover:text-primary-500 transition">Map</Link>
          <Link to="/about" className="text-gray-700 hover:text-primary-500 transition">About</Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link to="/" className="text-lg font-medium py-2 hover:text-primary transition">Home</Link>
                <Link to="/services" className="text-lg font-medium py-2 hover:text-primary transition">Services</Link>
                <Link to="/collectors" className="text-lg font-medium py-2 hover:text-primary transition">Collectors</Link>
                <Link to="/map" className="text-lg font-medium py-2 hover:text-primary transition">Map</Link>
                <Link to="/about" className="text-lg font-medium py-2 hover:text-primary transition">About</Link>
                {user && (
                  <Link to="/dashboard" className="text-lg font-medium py-2 hover:text-primary transition">Dashboard</Link>
                )}
                <div className="mt-4 pt-4 border-t">
                  {user ? (
                    <div className="flex flex-col gap-2">
                      <Link to="/schedule">
                        <Button className="w-full">Schedule Pickup</Button>
                      </Link>
                      <Button variant="outline" onClick={() => signOut()} className="w-full">
                        Logout
                      </Button>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-2">
                      <Link to="/auth">
                        <Button variant="outline" className="w-full">Login</Button>
                      </Link>
                      <Link to="/auth?tab=signup">
                        <Button className="w-full">Sign Up</Button>
                      </Link>
                    </div>
                  )}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <>
              <Link to="/dashboard">
                <Button variant="outline">
                  Dashboard
                </Button>
              </Link>
              <Link to="/schedule">
                <Button>Schedule Pickup</Button>
              </Link>
              <Button variant="ghost" onClick={() => signOut()}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/auth">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/auth?tab=signup">
                <Button>Sign Up</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
