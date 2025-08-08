---
uri: https://gcxgce.sharepoint.com/teams/10001579/#accessibility_solution
title: accessibility_solution
mermaid_layers: 1
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#accessibility_barrier
- https://gcxgce.sharepoint.com/teams/10001579/#accessibility_solution
- https://gcxgce.sharepoint.com/teams/10001579/#area_person
draft: false
---

## Related Links

- [[accessibility_barrier]]
- [[accessibility_solution]]
- [[area_person]]

## Semantic Connections

```mermaid
graph TD
  accessibility_solution["accessibility_solution"]:::current-page-node
  area_person["area_person"]
  accessibility_barrier["accessibility_barrier"]
  accessibility_solution-->|" subClassOf "|area_person
  accessibility_solution-->|" qualifies "|accessibility_barrier
  accessibility_barrier-->|" has "|accessibility_solution
```
