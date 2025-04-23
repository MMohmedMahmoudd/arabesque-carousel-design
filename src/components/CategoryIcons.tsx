
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

interface CategoryIcon {
  name: string;
  icon: string;
  link: string;
}

interface CategoryIconsProps {
  title: string;
  categories: CategoryIcon[];
}

export function CategoryIcons({ title, categories }: CategoryIconsProps) {
  const { language } = useLanguage();
  
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="section-title">{title}</h2>
        
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 mt-6">
          {categories.map((category, index) => (
            <a 
              key={index} 
              href={category.link} 
              className="flex flex-col items-center justify-center text-center gap-2"
            >
              <div className="category-icon">
                <img 
                  src={category.icon} 
                  alt={category.name}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <span className="text-xs font-medium text-gray-600">
                {category.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
