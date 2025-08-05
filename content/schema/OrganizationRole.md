---
title: OrganizationRole
created: 2025-07-28
modified: 2025-08-03
tags: prefix/schema
draft: false
has: '[[accountability]]'
mermaid_layers: 1
permalink: null
subClassOf:
- '[[Role]]'
entities:
- https://schema.org/OrganizationRole
- https://schema.org/Role
---

> A subclass of Role used to describe roles within organizations.[^1]

[^1]: [OrganizationRole - Schema.org Type](https://schema.org/OrganizationRole)

## Related Links

- [[Role]]

## Semantic Connections

```mermaid
graph TD
  OrganizationRole["OrganizationRole<br>+ label: OrganizationRole<br>+ comment: A subclass of Role used to describe roles within organizations."]:::current-page-node
  Role["Role<br>+ label: Role<br>+ comment: //blog.schema.org/2014/06/introducing-role.html)."]
  OrganizationRole-->|" subClassOf "|Role
```
