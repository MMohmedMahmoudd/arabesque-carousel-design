
interface Brand {
  name: string;
  logo: string;
  link: string;
}

interface BrandGridProps {
  title: string;
  brands: Brand[];
}

import { useLanguage } from "@/context/LanguageContext";

export function BrandGrid({ title, brands }: BrandGridProps) {
  const { language } = useLanguage();
  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">
          {language === "ar" ? title : "Browse by Brand"}
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          {brands.map((brand, index) => (
            <a 
              key={index} 
              href={brand.link} 
              className="flex items-center justify-center"
            >
              <img 
                src={brand.logo} 
                alt={brand.name}
                className="h-12 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
