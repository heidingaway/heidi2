---
uri: https://gcxgce.sharepoint.com/teams/10001579/#report
title: Report
mermaid_layers: 1
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#area_hr_planning_reporting
- https://gcxgce.sharepoint.com/teams/10001579/#data_analysis
- https://gcxgce.sharepoint.com/teams/10001579/#measurement_framework
- https://gcxgce.sharepoint.com/teams/10001579/#report
- https://gcxgce.sharepoint.com/teams/10001579/#report_status
- https://gcxgce.sharepoint.com/teams/10001579/#reporting_requirement
draft: false
---

## Related Links

- [[area_hr_planning_reporting]]
- [[data_analysis]]
- [[measurement_framework]]
- [[report]]
- [[report_status]]
- [[reporting_requirement]]

## Semantic Connections

```mermaid
graph TD
  Report["Report"]:::current-page-node
  area_hr_planning_reporting["area_hr_planning_reporting"]
  measurement_framework["measurement_framework"]
  report_status["report_status"]
  data_analysis["data_analysis"]
  reporting_requirement["reporting_requirement"]
  reporting_requirement-->|" metBy "|Report
  Report-->|" subClassOf "|area_hr_planning_reporting
  Report-->|" consolidates "|measurement_framework
  Report-->|" uses "|data_analysis
  Report-->|" has "|report_status
```
