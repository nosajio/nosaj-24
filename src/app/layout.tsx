import Breadcrumb from "@/components/breadcrumb";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import Link from "next/link";
import { type ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "~ nosaj",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <header className="relative w-full">
          <div className="flex items-start justify-between p-4 pb-12">
            <div>
              <h1 className="flex items-center font-semibold">
                <Link
                  href="/"
                  className="-ml-2 flex items-center gap-2 rounded px-2 text-soot-600 hover:bg-soot-100 hover:text-soot-900"
                >
                  <NosajLogo />
                  nosaj
                </Link>
                <Breadcrumb />
              </h1>
            </div>
            <div className="flex items-center gap-x-6">
              <Link href="https://x.com/nosajio" target="_blank">
                <XLogo />
              </Link>
              <Link href="https://github.com/nosajio" target="_blank">
                <GitHubLogo />
              </Link>
            </div>
          </div>
        </header>
        <div className="grow">{children}</div>
        <footer className="flex w-full flex-row-reverse p-6 pt-12">
          <span>&copy; {new Date().getFullYear()}</span>
        </footer>
      </body>
    </html>
  );
}

function XLogo() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9027 8.46864L19.3482 0H17.5838L11.119 7.3532L5.95547 0H0L7.8082 11.1193L0 20H1.76443L8.59152 12.2348L14.0445 20H20L11.9023 8.46864H11.9027ZM9.48608 11.2173L8.69495 10.1101L2.40018 1.29968H5.11025L10.1902 8.40994L10.9813 9.51718L17.5847 18.7594H14.8746L9.48608 11.2177V11.2173Z"
        fill="currentColor"
      />
    </svg>
  );
}

function GitHubLogo() {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.2531 0C4.58996 0 0 4.58996 0 10.2531C0 14.7824 2.93695 18.6261 7.01189 19.983C7.52485 20.0755 7.70989 19.7599 7.70989 19.4886C7.70989 19.2449 7.70167 18.5993 7.69858 17.7451C4.84592 18.3639 4.24352 16.3696 4.24352 16.3696C3.77887 15.1854 3.10554 14.8698 3.10554 14.8698C2.17522 14.2335 3.17648 14.2479 3.17648 14.2479C4.20652 14.3198 4.74621 15.3046 4.74621 15.3046C5.66112 16.8713 7.14758 16.419 7.72942 16.1568C7.82297 15.4938 8.09025 15.0415 8.38219 14.7855C6.10623 14.5275 3.71308 13.6475 3.71308 9.71755C3.71308 8.60013 4.11297 7.68316 4.76574 6.96769C4.66191 6.70761 4.30726 5.6642 4.86751 4.2538C4.86751 4.2538 5.72794 3.97728 7.68625 5.30338C8.52261 5.07585 9.38534 4.95972 10.2521 4.95797C11.1189 4.95938 11.9817 5.07552 12.818 5.30338C14.7773 3.97625 15.6367 4.2538 15.6367 4.2538C16.1969 5.6642 15.8454 6.70761 15.7385 6.96769C16.3964 7.68316 16.7911 8.5991 16.7911 9.71755C16.7911 13.6578 14.3959 14.5234 12.1117 14.7773C12.4767 15.0939 12.8056 15.7189 12.8056 16.675C12.8056 18.0463 12.7933 19.1524 12.7933 19.4886C12.7933 19.763 12.9763 20.0817 13.4995 19.981C17.5724 18.622 20.5063 14.7814 20.5063 10.2531C20.5063 4.58996 15.9163 0 10.2531 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

function NosajLogo() {
  return (
    <svg
      width="10"
      height="5"
      viewBox="0 0 10 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.45833 0C5.47917 0 6.10417 2.21983 7.79167 2.21983C8.60417 2.21983 9.10417 1.59483 9.58333 0.172413H10C9.27083 2.5 8.29167 5 6.54167 5C4.5625 5 3.875 2.5 2.27083 2.5C1.45833 2.5 0.958333 3.25431 0.416667 4.82759H0C0.708333 2.5 1.72917 0 3.45833 0Z"
        fill="currentColor"
      />
    </svg>
  );
}
