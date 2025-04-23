
import { Button } from "./ui/button";
import { useLanguage } from "@/context/LanguageContext";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLanguage = language === "ar" ? "en" : "ar";
    setLanguage(newLanguage);
  };

  return (
    <Button 
      variant="outline" 
      size="sm" 
      onClick={toggleLanguage} 
      className="text-xs font-medium"
    >
      {language === "ar" ? "English" : "العربية"}
    </Button>
  );
}
