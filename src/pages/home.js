import React from "react";
import { PostMasonry, MasonryPost, PostGrid } from "../components/common";
import trending from "../assets/mocks/trending";
import featured from "../assets/mocks/featured";
import Slider from "../components/slider/slider";

import Navigation from "../components/navigation";

const user = {
  firstName: "",
  lastName: "",
};

const images = [
  "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  "https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80",
  "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80",
  "https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80",
];

const trendingConfig = {
  1: {
    gridArea: "1 / 2 / 3 / 3",
  },
};

const featuredConfig = {
  0: {
    gridArea: "1/ 1 / 2/ 3",
    height: "300px",
  },
  1: {
    height: "300px",
  },
  3: {
    height: "630px",
    marginLeft: "30px",
    width: "630px",
  },
};

const mergeStyles = function (posts, config) {
  posts.forEach((post, index) => {
    post.style = config[index];
    post.author = "Dinh Phan";
    post.description = "Lorem ipsum dolor sit amet, ............";
  });
};

const recentPosts = [...trending, ...featured, ...featured];
mergeStyles(trending, trendingConfig);
mergeStyles(featured, featuredConfig);

const lastPost = featured.pop();

export default function Home() {
  return (
    <main className="home">
      <Slider slides={images} autoPlay={2} />

      <section className="bg-gray">
        <section className="container">
          <div className="row">
            <section className="featured-posts-container">
              <PostMasonry posts={featured} columns={2} tagsOnTop={true} />
              <MasonryPost post={lastPost} tagsOnTop={true} />
            </section>
          </div>
        </section>
      </section>

      <section className="bg-white">
        <section className="container">
          <div className="row">
            <h1> Recent Posts</h1>
            <PostGrid posts={recentPosts} />
          </div>
        </section>
      </section>

      <section className="bg-gray">
        <section className="container">
          <div className="row">
            <PostMasonry posts={trending} columns={3} />
          </div>
        </section>
      </section>
    </main>
  );
}
