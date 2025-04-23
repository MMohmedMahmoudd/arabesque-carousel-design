
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface ProductCardProps {
  id: string;
  title: string;
  image: string;
  price: number;
  salePrice?: number;
  rating: number;
  className?: string;
  platform?: string;
}

export function ProductCard({ 
  id, 
  title, 
  image, 
  price, 
  salePrice, 
  rating, 
  className,
  platform 
}: ProductCardProps) {
  const stars = Array(5).fill(0);
  
  return (
    <div className={cn("product-card", className)}>
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full aspect-square object-cover"
        />
        {platform && (
          <span className="absolute top-2 right-2 bg-brand-purple text-white text-xs py-1 px-2 rounded">
            {platform}
          </span>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-sm font-medium mb-1 line-clamp-2 h-10">
          {title}
        </h3>
        
        <div className="flex items-center mb-2">
          {stars.map((_, index) => (
            <span key={index} className="star-rating">
              {index < Math.floor(rating) ? "★" : "☆"}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            {salePrice ? (
              <>
                <span className="text-gray-400 line-through text-xs">
                  {price.toFixed(2)} ر.س
                </span>
                <span className="font-bold text-brand-purple">
                  {salePrice.toFixed(2)} ر.س
                </span>
              </>
            ) : (
              <span className="font-bold">
                {price.toFixed(2)} ر.س
              </span>
            )}
          </div>
          
          <Button className="bg-brand-purple hover:bg-brand-purple-light text-xs rounded-full h-8 px-3">
            إضافة للسلة
          </Button>
        </div>
      </div>
    </div>
  );
}
