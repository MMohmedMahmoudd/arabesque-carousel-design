
import { ProductCard } from "./ProductCard";
import { useLanguage } from "@/context/LanguageContext";

interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
  salePrice?: number;
  rating: number;
  platform?: string;
}

interface ProductGridProps {
  title: string;
  titleEn: string;
  products: Product[];
  viewAllLink?: string;
}

export function ProductGridLTR({ title, titleEn, products, viewAllLink }: ProductGridProps) {
  const { language } = useLanguage();
  
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="section-title">{language === "ar" ? title : titleEn}</h2>
          
          {viewAllLink && (
            <a 
              href={viewAllLink} 
              className="text-brand-purple text-sm hover:underline"
            >
              {language === "ar" ? "عرض المزيد..." : "View more..."}
            </a>
          )}
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              salePrice={product.salePrice}
              rating={product.rating}
              platform={product.platform}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
