
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 backdrop-blur-lg bg-[#1A1F2C]/50 border-b border-purple-500/20 z-50 py-4">
      <div className="max-w-6xl mx-auto px-4">
        <NavigationMenu>
          <NavigationMenuList className="gap-8">
            {['home', 'about', 'projects', 'contact'].map((section) => (
              <NavigationMenuItem key={section}>
                <button 
                  onClick={() => scrollToSection(section)}
                  className="text-gray-300 hover:text-purple-400 transition-colors uppercase tracking-wider text-sm
                           relative after:content-[''] after:absolute after:w-full after:h-0.5 
                           after:bg-purple-500 after:left-0 after:-bottom-1 after:scale-x-0
                           hover:after:scale-x-100 after:transition-transform after:duration-300"
                >
                  {section}
                </button>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};

export default Navigation;
