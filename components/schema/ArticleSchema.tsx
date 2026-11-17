import { articleSchema } from "@/lib/schema";
import { JsonLd } from "./JsonLd";

export function ArticleSchema(props: {
  title: string;
  description: string;
  url: string;
  image: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
}) {
  return <JsonLd data={articleSchema(props)} />;
}
