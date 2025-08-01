import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
// The style import is no longer needed here if CSS is moved to custom.scss
// import style from "../styles/custom.scss" 

// We use an empty interface as this component doesn't need any constructor options
interface Options { }

const defaultOptions: Options = {}

/**
 * Helper function to extract the last part of a URI (after '#' or '/')
 * for use as a readable label in the Mermaid graph.
 * If it's not a valid URI, it returns the string as is (e.g., a literal value).
 */
function getUriLastPart(uri: string): string {
    try {
        const url = new URL(uri);
        // Prioritize fragment (after #) if it exists
        if (url.hash) {
            return url.hash.substring(1); // Remove the '#'
        }
        // Otherwise, take the last path segment
        const pathParts = url.pathname.split('/').filter(part => part !== '');
        if (pathParts.length > 0) {
            return pathParts[pathParts.length - 1];
        }
        return uri; // Fallback to full URI if no clear label part
    } catch (e) {
        // If it's not a valid URI (e.g., a literal string like "Title of Document A"), return as is.
        return uri;
    }
}

export default ((userOpts?: Options) => {
    const opts = { ...defaultOptions, ...userOpts }

    const SemanticGraph: QuartzComponent = ({ fileData, cfg }: QuartzComponentProps) => {
        // Access the 'entities' array from the page's frontmatter
        const entities = fileData.frontmatter?.entities as
            | { relationship?: string; entity: string; inverse_relationship?: string }[]
            | undefined

        // If there are no entities, don't render anything
        if (!entities || entities.length === 0) {
            return null
        }

        // Get the current page's title for the central node in the graph
        const currentPageTitle = fileData.frontmatter?.title || fileData.slug || "Current Page";
        // Sanitize the title to create a valid Mermaid ID (no spaces, special chars)
        const currentPageId = currentPageTitle.replace(/\s/g, '_').replace(/[^a-zA-Z0-9_]/g, '');

        let mermaidSyntax = `graph TD\n`; // Start with directed graph syntax
        const nodes = new Set<string>(); // To keep track of unique nodes and avoid re-declaring them

        // Declare the current page node explicitly
        nodes.add(currentPageId);
        mermaidSyntax += `  ${currentPageId}["${currentPageTitle}"]\n`;

        // Iterate over each entity to build the Mermaid graph syntax
        entities.forEach((rel) => {
            const entityUri = rel.entity;
            const entityLabel = getUriLastPart(entityUri); // Get a readable label for the connected entity
            // Sanitize the entity label to create a valid Mermaid ID
            const entityId = entityLabel.replace(/\s/g, '_').replace(/[^a-zA-Z0-9_]/g, '');

            let predicateLabel = "";
            let relationshipDirection = "";

            if (rel.relationship) {
                // This is a direct relationship (current page -> entity)
                predicateLabel = getUriLastPart(rel.relationship);
                relationshipDirection = `-->|" ${predicateLabel} "|`;
                mermaidSyntax += `  ${currentPageId}${relationshipDirection}${entityId}\n`;
            } else if (rel.inverse_relationship) {
                // This is an inverse relationship (entity -> current page)
                predicateLabel = getUriLastPart(rel.inverse_relationship);
                // Mermaid doesn't have a direct inverse arrow like <--|.
                // We represent it by drawing an arrow from the entity to the current page.
                relationshipDirection = `-->|" ${predicateLabel} "|`;
                mermaidSyntax += `  ${entityId}${relationshipDirection}${currentPageId}\n`;
            }

            // Add the connected entity node if it hasn't been added yet
            if (!nodes.has(entityId)) {
                nodes.add(entityId);
                mermaidSyntax += `  ${entityId}["${entityLabel}"]\n`;
            }
        });

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
    // SemanticGraph.css is removed from here
    // SemanticGraph.css = `...`

    return SemanticGraph
}) satisfies QuartzComponentConstructor
