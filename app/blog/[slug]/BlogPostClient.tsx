"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageLayout from "../../components/PageLayout";
import { posts } from "../../data/posts";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./post.module.css";

interface BlogPostClientProps {
  slug: string;
}

export default function BlogPostClient({ slug }: BlogPostClientProps) {
  const { t, language } = useLanguage();
  const currentPosts = posts[language] || posts.id;
  const post = currentPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <PageLayout>
      <div className={styles.container}>
        <article className={styles.article}>
          <Link href="/blog" className={styles.backBtn}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            {t("blogBackBtn")}
          </Link>

          <header className={styles.header}>
            <div className={styles.meta}>
              <span className={styles.category}>{post.category}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className={styles.title}>{post.title}</h1>
          </header>

          <div className={styles.imageWrapper}>
            <Image
              src={post.image}
              alt={post.title}
              fill
              className={styles.image}
              priority
            />
          </div>

          <div className={styles.content}>
            {post.content.split("\n\n").map((paragraph, index) => {
              if (paragraph.startsWith("### ")) {
                return <h2 key={index}>{paragraph.replace("### ", "")}</h2>;
              }
              return <p key={index}>{paragraph}</p>;
            })}
          </div>
        </article>
      </div>
    </PageLayout>
  );
}
