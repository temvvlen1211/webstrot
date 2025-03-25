import SearchInput from "@/app/shop/components/SearchInput";
import BlogPost from "../components/BlogPost";
import BlogPostWithCarousel from "../components/BlogPostWithCarousel";
import BlogPostWithVideo from "../components/BlogPostWithVideo";
import NewsBlogPost from "../components/NewsBlogPost copy";
import TopCategories from "@/app/shop/components/TopCategories";
import RecentNews from "../components/RecentNews";
import Archives from "../components/Archives";
import InstagramGallery from "../components/InstagramGallery";

export default function Layout() {
  return (
    <>
      <section className="flex justify-center items-center w-full py-10">
        <div className="container w-full">
          <div className="grid sm:flex w-full gap-5 pb-10 ">
            {/* body*/}
            <div className="sm:max-w-3/4 w-full  px-5 sm:px-0 ">
              <BlogPost />
              <BlogPostWithCarousel />
              <BlogPostWithVideo />
              <NewsBlogPost />
            </div>
            {/* aside */}
            <div className="sm:max-w-1/4 w-full px-5 sm:px-0">
              <SearchInput />
              <TopCategories />
              <RecentNews />
              <Archives />
              <InstagramGallery />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
