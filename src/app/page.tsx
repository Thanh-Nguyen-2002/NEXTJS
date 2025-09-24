import Banner from "@/components/home/Banner";
import Blog from "@/components/home/blog/Blog";
import FlashSale from "@/components/home/flashsale/FlashSale";
import ListProduct from "@/components/home/product/ListProduct";

export default function Home() {
  return (
    <div className="flex gap-2 flex-col">
      <div>
        <Banner />
      </div>
      <div>
        <FlashSale />
      </div>
      <div>
        <ListProduct />
      </div>
      <div>
        <Blog />
      </div>
        
    </div>
  );
}
