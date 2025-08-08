---
uri: http://www.w3.org/2000/01/rdf-schema#Class
title: Class
mermaid_layers: 1
entities:
- http://www.w3.org/2000/01/rdf-schema#Class
- http://www.w3.org/2000/01/rdf-schema#Resource
draft: false
---

## Related Links

- [[Class]]
- [[Resource]]

## Semantic Connections

```mermaid
graph TD
  Class["Class<br>+ label: Class<br>+ comment: The class of classes."]:::current-page-node
  Resource["Resource<br>+ label: Resource<br>+ comment: The class resource, everything."]
  Class-->|" subClassOf "|Resource
```
