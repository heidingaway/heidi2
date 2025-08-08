---
uri: https://gcxgce.sharepoint.com/teams/10001579/#accessibility_barrier
title: accessibility_barrier
mermaid_layers: 1
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#accessibility_barrier
- https://gcxgce.sharepoint.com/teams/10001579/#accessibility_solution
- https://gcxgce.sharepoint.com/teams/10001579/#area_person
- https://gcxgce.sharepoint.com/teams/10001579/#workplace_accessibility_requirement
draft: false
---

## Related Links

- [[accessibility_barrier]]
- [[accessibility_solution]]
- [[area_person]]
- [[workplace_accessibility_requirement]]

## Semantic Connections

```mermaid
graph TD
  accessibility_barrier["accessibility_barrier"]:::current-page-node
  area_person["area_person"]
  accessibility_solution["accessibility_solution"]
  workplace_accessibility_requirement["workplace_accessibility_requirement"]
  accessibility_barrier-->|" qualifies "|workplace_accessibility_requirement
  accessibility_barrier-->|" has "|accessibility_solution
  accessibility_solution-->|" qualifies "|accessibility_barrier
  workplace_accessibility_requirement-->|" has "|accessibility_barrier
  accessibility_barrier-->|" subClassOf "|area_person
```
