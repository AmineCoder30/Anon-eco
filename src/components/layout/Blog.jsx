import React from "react";
import blog1 from "../../assets/blog-1.jpg";
import blog2 from "../../assets/blog-2.jpg";
import blog3 from "../../assets/blog-3.jpg";
import blog4 from "../../assets/blog-4.jpg";
const articles = [
  {
    category: "Fashion",
    title: "Clothes Retail KPIs 2021 Guide for Clothes Executives.",
    author: "Mr Admin",
    date: "Apr 06, 2022",
    image: blog1,
    alt: "Two women holding shopping bags and smiling",
  },
  {
    category: "Clothes",
    title: "Curbside fashion Trends: How to Win the Pickup Battle.",
    author: "Mr Robin",
    date: "Jan 18, 2022",
    image: blog2,
    alt: "Two women holding shopping bags and smiling",
  },
  {
    category: "Shoes",
    title: "EBT vendors: Claim Your Share of SNAP Online Revenue.",
    author: "Mr Selsa",
    date: "Feb 10, 2022",
    image: blog3,
    alt: "Woman standing next to a clothing rack with various clothes",
  },
  {
    category: "Electronics",
    title: "Curbside fashion Trends: How to Win the Pickup Battle.",
    author: "Mr Pawar",
    date: "Mar 15, 2022",
    image: blog4,
    alt: "Woman holding shopping bags and jumping",
  },
];
function Blog() {
  return (
    <div className="container mx-auto my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        {articles.map((article, index) => (
          <div key={index} className="bg-white  overflow-hidden">
            <img
              src={article.image}
              alt={article.alt}
              className="w-full rounded-lg  object-cover "
            />
            <div className="py-2 ">
              <p className="text-rose-300  text-sm md:text-base lg:text-lg">
                {article.category}
              </p>
              <h2 className="text-lg font-semibold text-gray-900   ">
                {article.title}
              </h2>
              <p className="text-gray-500 mt-2 ">
                By {article.author} / {article.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
