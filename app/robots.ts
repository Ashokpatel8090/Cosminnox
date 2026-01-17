// import type { MetadataRoute } from "next"

// export default function robots(): MetadataRoute.Robots {
//   return {
//     rules: {
//       userAgent: "*",
//       allow: "/",
//       disallow: "/admin",
//     },
//     sitemap: "https://cosminnox.com/sitemap.xml",
//     crawlDelay: 1,
//   }
// }


import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/admin",
    },
    sitemap: "https://cosminnox.com/sitemap.xml",
  }
}
