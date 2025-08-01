// quartz/components/SemanticGraph.tsx
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

// We use an empty interface as this component doesn't need any constructor options
interface Options { }

const defaultOptions: Options = {}

export default ((userOpts?: Options) => {
    const opts = { ...defaultOptions, ...userOpts }

    function SemanticGraph({ fileData }: QuartzComponentProps) {
        // 1. Access the semantic relationships from the page's frontmatter
        const relationships = fileData.frontmatter?.semantic_relationships as
            | { predicate: string; object: string }[]
            | undefined

        // If there are no relationships, don't render anything
        if (!relationships || relationships.length === 0) {
            return null
        }

        // 2. Programmatically generate the Mermaid syntax string
        const mermaidSyntax = relationships.reduce((acc, rel, index) => {
            // Create a unique ID for each subject and object node
            // Replace spaces with underscores for Mermaid to handle them correctly
            const subjectId = rel.subject.replace(/\s/g, '_');
            const objectId = rel.object.replace(/\s/g, '_');

            // Add a node and a labeled arrow for each relationship
            // Use the predicate as the label on the arrow
            return acc + `\n  ${subjectId}["${rel.subject}"] -->|" ${rel.predicate} "| ${objectId}["${rel.object}"]`;
        }, "graph TD;");

        // 3. Return the JSX with the Mermaid code in a <pre> tag
        return (
            <div className="semantic-graph">
                <h3>Semantic Connections</h3>
                <pre className="mermaid">
                    {mermaidSyntax}
                </pre>
            </div>
        )
    }

    // Define styling for the component
    SemanticGraph.css = `
    .semantic-graph {
      margin-top: 2rem;
    }
    .semantic-graph h3 {
      margin-bottom: 1rem;
    }
  `

    return SemanticGraph
}) satisfies QuartzComponentConstructor