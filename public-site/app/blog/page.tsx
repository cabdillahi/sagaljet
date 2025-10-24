import BlogPage from "@/components/blog-page";
import PageHeader from "@/components/page-header";

export default function Blog() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Blog & Insights"
        description="Stay updated with the latest trends, tips, and news from the printing industry"
        imageSrc="/blog-header.jpg"
      />
      <BlogPage />
    </div>
  );
}
