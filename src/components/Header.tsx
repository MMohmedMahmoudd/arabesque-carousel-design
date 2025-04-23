
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

export function Header() {
  const { language } = useLanguage();
  return (
    <header className="w-full">
      {/* Top bar with contact info */}
      <div className="bg-brand-purple text-white text-xs py-1 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>+966 123456789</div>
          <div>info@tafaeel.com</div>
        </div>
      </div>
      
      {/* Main header */}
      <div className="bg-white py-4 shadow-sm">
        <div className="container mx-auto flex flex-wrap justify-between items-center gap-4">
          {/* Logo */}
          <div className="flex items-center h-10 w-32">
            <img src="/lovable-uploads/abd4f380-c540-4b88-82b4-cc43fb09bda9.png" alt="تفاعيل" className="w-full h-full object-contain" />
          </div>
          
          {/* Search Bar */}
          <div className="relative flex-grow max-w-md">
            <Input 
              placeholder={language === "ar" ? "ابحث عن المنتجات..." : "Search products..."} 
              className={`rounded-full border-gray-300 h-10 ${language === "ar" ? "pl-10 pr-4" : "pr-10 pl-4"}`}
            />
            <Search className={`absolute top-1/2 transform -translate-y-1/2 ${language === "ar" ? "left-3" : "right-3"} h-4 w-4 text-gray-400`} />
          </div>
          
          {/* Icons and language toggle */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <span className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                  <path d="M3 6h18"></path>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                <span className="absolute -top-1 -right-1 bg-brand-purple text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">0</span>
              </span>
            </Button>
            <Button variant="ghost" size="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              </svg>
            </Button>
            <Button variant="ghost" size="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </Button>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="bg-gray-100 py-2 shadow-sm">
        <div className="container mx-auto">
          <ul className="flex flex-wrap gap-6 items-center text-sm">
            <li><a href="#" className="hover:text-brand-purple font-medium">{language === "ar" ? "الرئيسية" : "Home"}</a></li>
            <li><a href="#" className="hover:text-brand-purple">{language === "ar" ? "تخفيضات" : "Sales"}</a></li>
            <li><a href="#" className="hover:text-brand-purple">{language === "ar" ? "العاب" : "Games"}</a></li>
            <li><a href="#" className="hover:text-brand-purple">{language === "ar" ? "اكسسوارات" : "Accessories"}</a></li>
            <li><a href="#" className="hover:text-brand-purple">{language === "ar" ? "بلايستيشن" : "PlayStation"}</a></li>
            <li><a href="#" className="hover:text-brand-purple">{language === "ar" ? "اكسبوكس" : "Xbox"}</a></li>
            <li><a href="#" className="hover:text-brand-purple">{language === "ar" ? "نينتيندو" : "Nintendo"}</a></li>
            <li><a href="#" className="hover:text-brand-purple">{language === "ar" ? "المتجر" : "Store"}</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
