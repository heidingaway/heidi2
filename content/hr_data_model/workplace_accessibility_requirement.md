---
uri: https://gcxgce.sharepoint.com/teams/10001579/#workplace_accessibility_requirement
title: Workplace Accessibility Requirement *
mermaid_layers: 1
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#accessibility_barrier
- https://gcxgce.sharepoint.com/teams/10001579/#area_person
- https://gcxgce.sharepoint.com/teams/10001579/#workplace_accessibility_requirement
- https://schema.org/Person
draft: false
---

## Related Links

- [[accessibility_barrier]]
- [[area_person]]
- [[person]]

## Semantic Connections

```mermaid
graph TD
  Workplace_Accessibility_Requirement_["Workplace Accessibility Requirement *"]:::current-page-node
  area_person["area_person"]
  accessibility_barrier["accessibility_barrier"]
  person["person"]
  Workplace_Accessibility_Requirement_-->|" subClassOf "|area_person
  accessibility_barrier-->|" qualifies "|Workplace_Accessibility_Requirement_
  Workplace_Accessibility_Requirement_-->|" has "|accessibility_barrier
  person-->|" has "|Workplace_Accessibility_Requirement_
```
