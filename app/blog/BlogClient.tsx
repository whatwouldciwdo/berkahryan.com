"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import PageLayout from "../components/PageLayout";
import { posts } from "../data/posts";
import { useLanguage } from "../context/LanguageContext";
import styles from "./blog.module.css";

export default function BlogClient() {
  const { t, language } = useLanguage();
  const currentPosts = posts[language] || posts.id;
  const featuredPost = currentPosts[0];
  const feedPosts = currentPosts.slice(1);

  if (!featuredPost) {
    return null;
  }

  return (
    <PageLayout>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.journalLabel}>{t("blogLabel")}</span>
          <h1 className={styles.title}>{t("blogTitle")}</h1>
        </div>

        <div className={styles.editorialLayout}>
          {/* LEFT SIDE: FEATURED POST */}
          <div className={styles.featuredSticky}>
            <Link href={`/blog/${featuredPost.slug}`} className={styles.featuredCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className={styles.featuredImage}
                  priority
                />
              </div>
              <div className={styles.meta}>
                <span className={styles.category}>{featuredPost.category}</span>
                <span>•</span>
                <span>{featuredPost.date}</span>
                <span>•</span>
                <span>{featuredPost.readTime}</span>
              </div>
              <h2 className={styles.featuredTitle}>{featuredPost.title}</h2>
              <p className={styles.excerpt}>{featuredPost.excerpt}</p>
            </Link>
          </div>

          {/* RIGHT SIDE: FEED LIST */}
          <div className={styles.feedList}>
            {feedPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.feedItem}>
                <div className={styles.feedItemMeta}>
                  <span className={styles.category}>{post.category}</span>
                  <span>{post.date}</span>
                </div>
                <h3 className={styles.feedItemTitle}>{post.title}</h3>
                <p className={styles.feedItemExcerpt}>{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
