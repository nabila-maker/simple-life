
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/samira/simple-life/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/samira/simple-life/src/pages/404.js")),
  "component---src-templates-blog-post-archive-js": preferDefault(require("/Users/samira/simple-life/src/templates/blog-post-archive.js")),
  "component---src-templates-blog-post-js": preferDefault(require("/Users/samira/simple-life/src/templates/blog-post.js")),
  "component---src-templates-category-js": preferDefault(require("/Users/samira/simple-life/src/templates/category.js")),
  "component---src-templates-page-js": preferDefault(require("/Users/samira/simple-life/src/templates/page.js")),
  "component---src-templates-tag-js": preferDefault(require("/Users/samira/simple-life/src/templates/tag.js"))
}

