
import { useEffect, useState } from 'react';
import { Header } from '@/components/Header';
import { Carousel } from '@/components/Carousel';
import { CategoryIcons } from '@/components/CategoryIcons';
import { ProductGrid } from '@/components/ProductGrid';
import { BrandGrid } from '@/components/BrandGrid';
import { Footer } from '@/components/Footer';

// Sample data for the carousel
const carouselImages = [
  {
    src: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1470&auto=format&fit=crop",
    alt: "PlayStation Games Promotion",
    title: "قسيمة خصم تصل إلى 40%",
    subtitle: "خصومات هائلة على ألعاب بلاي ستيشن الجديدة",
    cta: {
      text: "تسوق الآن",
      link: "#"
    }
  },
  {
    src: "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?q=80&w=1374&auto=format&fit=crop",
    alt: "Xbox Games Promotion",
    title: "عروض مميزة",
    subtitle: "تخفيضات على ألعاب اكسبوكس حتى 35%",
    cta: {
      text: "اكتشف المزيد",
      link: "#"
    }
  },
  {
    src: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=1470&auto=format&fit=crop",
    alt: "Nintendo Switch Promotion",
    title: "ألعاب نينتيندو",
    subtitle: "وصول أحدث الإصدارات من ألعاب نينتيندو سويتش",
    cta: {
      text: "اطلب الآن",
      link: "#"
    }
  },
  {
    src: "https://images.unsplash.com/photo-1592155931584-901ac15763e3?q=80&w=1374&auto=format&fit=crop",
    alt: "Gaming Accessories",
    title: "اكسسوارات الألعاب",
    subtitle: "اكتشف أحدث اكسسوارات الألعاب بأسعار منافسة",
    cta: {
      text: "تسوق الآن",
      link: "#"
    }
  },
  {
    src: "https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?q=80&w=1372&auto=format&fit=crop",
    alt: "PC Gaming",
    title: "ألعاب الكمبيوتر",
    subtitle: "أحدث إصدارات ألعاب الكمبيوتر بأسعار حصرية",
    cta: {
      text: "اكتشف المزيد",
      link: "#"
    }
  }
];

// Sample data for category icons
const categoryIcons = [
  {
    name: "بلايستيشن",
    icon: "https://cdn-icons-png.flaticon.com/512/588/588358.png",
    link: "#"
  },
  {
    name: "اكسبوكس",
    icon: "https://cdn-icons-png.flaticon.com/512/588/588292.png",
    link: "#"
  },
  {
    name: "نينتيندو",
    icon: "https://cdn-icons-png.flaticon.com/512/871/871377.png",
    link: "#"
  },
  {
    name: "العاب",
    icon: "https://cdn-icons-png.flaticon.com/512/686/686589.png",
    link: "#"
  },
  {
    name: "سماعات",
    icon: "https://cdn-icons-png.flaticon.com/512/3249/3249748.png",
    link: "#"
  },
  {
    name: "اكسسوارات",
    icon: "https://cdn-icons-png.flaticon.com/512/2949/2949874.png",
    link: "#"
  },
  {
    name: "قسائم شراء",
    icon: "https://cdn-icons-png.flaticon.com/512/679/679838.png",
    link: "#"
  }
];

// Sample data for featured products
const featuredProducts = [
  {
    id: "1",
    title: "لعبة God of War Ragnarök",
    image: "https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png",
    price: 299.99,
    salePrice: 259.99,
    rating: 5,
    platform: "PS5"
  },
  {
    id: "2",
    title: "لعبة God of War Ragnarök",
    image: "https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png",
    price: 299.99,
    salePrice: 259.99,
    rating: 5,
    platform: "PS5"
  },
  {
    id: "3",
    title: "لعبة God of War Ragnarök",
    image: "https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png",
    price: 299.99,
    salePrice: 259.99,
    rating: 5,
    platform: "PS5"
  },
  {
    id: "4",
    title: "لعبة God of War Ragnarök",
    image: "https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png",
    price: 299.99,
    salePrice: 259.99,
    rating: 5,
    platform: "PS5"
  },
  {
    id: "5",
    title: "لعبة God of War Ragnarök",
    image: "https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png",
    price: 299.99,
    salePrice: 259.99,
    rating: 5,
    platform: "PS5"
  }
];

// Sample data for used games
const usedGames = [
  {
    id: "u1",
    title: "مجموعة ألعاب PS5 مستعملة (GTA V + Spider-Man + FIFA 23)",
    image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?q=80&w=1619&auto=format&fit=crop",
    price: 399.99,
    rating: 4,
    platform: "PS5"
  },
  {
    id: "u2",
    title: "مجموعة ألعاب PS5 مستعملة (GTA V + Spider-Man + FIFA 23)",
    image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?q=80&w=1619&auto=format&fit=crop",
    price: 399.99,
    rating: 4,
    platform: "PS5"
  },
  {
    id: "u3",
    title: "مجموعة ألعاب PS5 مستعملة (GTA V + Spider-Man + FIFA 23)",
    image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?q=80&w=1619&auto=format&fit=crop",
    price: 399.99,
    rating: 4,
    platform: "PS5"
  },
  {
    id: "u4",
    title: "مجموعة ألعاب PS5 مستعملة (GTA V + Spider-Man + FIFA 23)",
    image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?q=80&w=1619&auto=format&fit=crop",
    price: 399.99,
    rating: 4,
    platform: "PS5"
  },
  {
    id: "u5",
    title: "مجموعة ألعاب PS5 مستعملة (GTA V + Spider-Man + FIFA 23)",
    image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?q=80&w=1619&auto=format&fit=crop",
    price: 399.99,
    rating: 4,
    platform: "PS5"
  }
];

// Sample data for brands
const brands = [
  {
    name: "PlayStation",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/2560px-PlayStation_logo.svg.png",
    link: "#"
  },
  {
    name: "Razer",
    logo: "https://logos-world.net/wp-content/uploads/2020/11/Razer-Symbol.png",
    link: "#"
  },
  {
    name: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png",
    link: "#"
  },
  {
    name: "Hasbro",
    logo: "https://logodownload.org/wp-content/uploads/2018/12/hasbro-logo-0.png",
    link: "#"
  },
  {
    name: "Pokemon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png",
    link: "#"
  },
  {
    name: "Zelda",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/86/The_Legend_of_Zelda_Logo.svg",
    link: "#"
  },
  {
    name: "Mario",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Mario_Series_Logo.svg",
    link: "#"
  },
  {
    name: "Funko",
    logo: "https://logos-world.net/wp-content/uploads/2021/08/Funko-Logo.png",
    link: "#"
  }
];

const Index = () => {
  // Language context is now managed by the LanguageProvider

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main>
        <div className="mb-8">
          <Carousel images={carouselImages} />
        </div>
        
        <CategoryIcons title="تصفح حسب الفئة" categories={categoryIcons} />
        
        <ProductGrid 
          title="منتجات مميزة" 
          products={featuredProducts}
          viewAllLink="#"
        />
        
        <ProductGrid 
          title="المنتجات المستعملة" 
          products={usedGames}
          viewAllLink="#"
        />
        
        <BrandGrid title="تصفح حسب المتجر" brands={brands} />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
