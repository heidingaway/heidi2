---
uri: https://gcxgce.sharepoint.com/teams/10001579/#data_analysis
title: Data Analysis
mermaid_layers: 1
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#area_hr_planning_reporting
- https://gcxgce.sharepoint.com/teams/10001579/#data_analysis
- https://gcxgce.sharepoint.com/teams/10001579/#data_set
- https://gcxgce.sharepoint.com/teams/10001579/#report
draft: false
---

## Related Links

- [[area_hr_planning_reporting]]
- [[data_analysis]]
- [[data_set]]
- [[report]]

## Semantic Connections

```mermaid
graph TD
  Data_Analysis["Data Analysis"]:::current-page-node
  area_hr_planning_reporting["area_hr_planning_reporting"]
  data_set["data_set"]
  report["report"]
  report-->|" uses "|Data_Analysis
  Data_Analysis-->|" uses "|data_set
  Data_Analysis-->|" subClassOf "|area_hr_planning_reporting
```
