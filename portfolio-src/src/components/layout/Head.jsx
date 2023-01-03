//react imports
import React from "react";

//next imports
import Head from "next/head";
import { useRouter } from "next/router";

const SiteHead = () => {
  const router = useRouter();
  let pageName =
    router.pathname === "/"
      ? "Portfolio"
      : router.pathname
          .replace("/", "")
          .split("-")
          .join(" ")
          .replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          });

  return (
    <Head>
      <title>
        Omar Anwar {typeof window === "undefined" ? "" : `- ${pageName}`}
      </title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SiteHead;
