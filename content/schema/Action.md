---
title: Action
created: 2025-08-02
modified: 2025-08-03
tags: []
draft: false
subClassOf: '[[Thing]]'
entities:
- https://schema.org/Action
- https://schema.org/Thing
- https://schema.org/docs/collab/ActionCollabClass
---

> An action performed by a direct agent and indirect participants upon a direct object. Optionally happens at a location with the help of an inanimate instrument. The execution of the action may produce a result. Specific action sub-type documentation specifies the exact expectation of each argument/role.[^1]

[^1]: [Action - Schema.org Type](https://schema.org/Action)

## Related Links

- [[Thing]]

## Semantic Connections

```mermaid
graph TD
  Action["Action<br>+ label: Action<br>+ comment: //blog.schema.org/2014/04/announcing-schemaorg-actions.html) and [Actions overview document](https://schema.org/docs/actions.html)."]:::current-page-node
  Thing["Thing<br>+ label: Thing<br>+ comment: The most generic type of item."]
  ActionCollabClass["ActionCollabClass"]
  Action-->|" subClassOf "|Thing
  Action-->|" contributor "|ActionCollabClass
```
