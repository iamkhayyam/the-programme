import type React from "react";

export interface PaperContent {
  id: string;
  track: string;
  title: React.ReactNode;
  authors: string;
  affiliation: string;
  date: string;
  abstract: React.ReactNode;
  keywords: string;
  msc: string;
  content: React.ReactNode;
  pdfUrl: string;
  githubUrl: string | null;
  nextPaper?: {
    id: string;
    title: React.ReactNode;
    desc: React.ReactNode;
    url: string;
  };
}
