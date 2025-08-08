---
title: Organization
aliases:
- Organization
- Organizations
created: 2025-07-27
modified: 2025-08-03
tags: []
broaderTerm:
- '[[so_society_and_culture]]'
class:
- '[[Thing]]'
draft: false
mermaid_layers: 1
permalink: null
subClassOf:
- '[[Thing]]'
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#address
- https://gcxgce.sharepoint.com/teams/10001579/#area_organization
- https://gcxgce.sharepoint.com/teams/10001579/#mgmt_resource_results_structure
- https://gcxgce.sharepoint.com/teams/10001579/#organization
- https://gcxgce.sharepoint.com/teams/10001579/#organization_mandate
- https://gcxgce.sharepoint.com/teams/10001579/#organization_relationship
- https://gcxgce.sharepoint.com/teams/10001579/#position
---

An organization such as a school, NGO, corporation, club, etc.[^1]

[^1]: [Organization - Schema.org Type](https://schema.org/Organization)

## Related Links

- [[address]]
- [[area_organization]]
- [[mgmt_resource_results_structure]]
- [[organization]]
- [[organization_relationship]]
- [[position]]

## Semantic Connections

```mermaid
graph TD
  Organization["Organization"]:::current-page-node
  area_organization["area_organization"]
  address["address"]
  mgmt_resource_results_structure["mgmt_resource_results_structure"]
  organization_mandate["organization_mandate"]
  position["position"]
  organization_relationship["organization_relationship"]
  Organization-->|" subClassOf "|area_organization
  Organization-->|" includes "|position
  Organization-->|" contactedAt "|address
  Organization-->|" relatesTo "|organization_relationship
  Organization-->|" has "|mgmt_resource_results_structure
  Organization-->|" has "|organization_mandate
  position-->|" belongsTo "|Organization
```
