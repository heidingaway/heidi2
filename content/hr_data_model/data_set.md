---
uri: https://gcxgce.sharepoint.com/teams/10001579/#data_set
title: Data Set
mermaid_layers: 1
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#area_hr_planning_reporting
- https://gcxgce.sharepoint.com/teams/10001579/#data_analysis
- https://gcxgce.sharepoint.com/teams/10001579/#data_set
- https://gcxgce.sharepoint.com/teams/10001579/#measurement_framework
draft: false
---

## Related Links

- [[area_hr_planning_reporting]]
- [[data_analysis]]
- [[data_set]]
- [[measurement_framework]]

## Semantic Connections

```mermaid
graph TD
  Data_Set["Data Set"]:::current-page-node
  area_hr_planning_reporting["area_hr_planning_reporting"]
  data_analysis["data_analysis"]
  measurement_framework["measurement_framework"]
  Data_Set-->|" subClassOf "|area_hr_planning_reporting
  measurement_framework-->|" compiles "|Data_Set
  data_analysis-->|" uses "|Data_Set
```
