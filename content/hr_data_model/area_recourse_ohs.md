---
uri: https://gcxgce.sharepoint.com/teams/10001579/#area_recourse_ohs
title: Recourse & OHS
mermaid_layers: 1
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#area_recourse_ohs
- https://gcxgce.sharepoint.com/teams/10001579/#complaint
- https://gcxgce.sharepoint.com/teams/10001579/#complaint_status
- https://gcxgce.sharepoint.com/teams/10001579/#disciplinary_action
- https://gcxgce.sharepoint.com/teams/10001579/#grievance
- https://gcxgce.sharepoint.com/teams/10001579/#grievance_assessment
- https://gcxgce.sharepoint.com/teams/10001579/#grievance_status
- https://gcxgce.sharepoint.com/teams/10001579/#hr_business_line_data
- https://gcxgce.sharepoint.com/teams/10001579/#incident
- https://gcxgce.sharepoint.com/teams/10001579/#incident_resolution
- https://gcxgce.sharepoint.com/teams/10001579/#ohs_event_action
- https://gcxgce.sharepoint.com/teams/10001579/#ohs_event_action_status
draft: false
---

## Related Links

- [[area_recourse_ohs]]
- [[complaint]]
- [[complaint_status]]
- [[disciplinary_action]]
- [[grievance]]
- [[grievance_assessment]]
- [[grievance_status]]
- [[hr_business_line_data]]
- [[incident]]
- [[incident_resolution]]
- [[ohs_event_action]]
- [[ohs_event_action_status]]

## Semantic Connections

```mermaid
graph TD
  Recourse__OHS["Recourse & OHS"]:::current-page-node
  hr_business_line_data["hr_business_line_data"]
  complaint_status["complaint_status"]
  grievance_status["grievance_status"]
  incident_resolution["incident_resolution"]
  ohs_event_action_status["ohs_event_action_status"]
  grievance_assessment["grievance_assessment"]
  disciplinary_action["disciplinary_action"]
  incident["incident"]
  ohs_event_action["ohs_event_action"]
  complaint["complaint"]
  grievance["grievance"]
  grievance_status-->|" subClassOf "|Recourse__OHS
  incident-->|" subClassOf "|Recourse__OHS
  ohs_event_action_status-->|" subClassOf "|Recourse__OHS
  ohs_event_action-->|" subClassOf "|Recourse__OHS
  complaint_status-->|" subClassOf "|Recourse__OHS
  grievance_assessment-->|" subClassOf "|Recourse__OHS
  disciplinary_action-->|" subClassOf "|Recourse__OHS
  incident_resolution-->|" subClassOf "|Recourse__OHS
  complaint-->|" subClassOf "|Recourse__OHS
  Recourse__OHS-->|" subClassOf "|hr_business_line_data
  grievance-->|" subClassOf "|Recourse__OHS
```
