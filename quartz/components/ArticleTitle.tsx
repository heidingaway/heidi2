import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const ArticleTitle: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  // Corrected line: Uses frontmatter title, with a fallback to the filename
  const title = fileData.frontmatter?.title ?? fileData.slug

  return (
    <h1 class={classNames(displayClass, "article-title")}>{title}</h1>
  )
}

ArticleTitle.css = `
.article-title {
  margin: 2rem 0 0 0;
}
`

export default (() => ArticleTitle) satisfies QuartzComponentConstructor