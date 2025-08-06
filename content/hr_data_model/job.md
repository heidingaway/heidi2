---
uri: https://gcxgce.sharepoint.com/teams/10001579/#job
title: Job
mermaid_layers: 1
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#area_job
- https://gcxgce.sharepoint.com/teams/10001579/#conditions_of_employment
- https://gcxgce.sharepoint.com/teams/10001579/#job
- https://gcxgce.sharepoint.com/teams/10001579/#job_status
- https://gcxgce.sharepoint.com/teams/10001579/#labour_data
- https://gcxgce.sharepoint.com/teams/10001579/#position_competency
- https://gcxgce.sharepoint.com/teams/10001579/#reporting_requirement
- https://gcxgce.sharepoint.com/teams/10001579/#work_description
draft: false
---

## Related Links

- [[area_job]]
- [[conditions_of_employment]]
- [[job_status]]
- [[labour_data]]
- [[position_competency]]
- [[reporting_requirement]]
- [[work_description]]

## Semantic Connections

```mermaid
graph TD
  Job["Job"]:::current-page-node
  area_job["area_job"]
  position_competency["position_competency"]
  work_description["work_description"]
  job_status["job_status"]
  reporting_requirement["reporting_requirement"]
  conditions_of_employment["conditions_of_employment"]
  labour_data["labour_data"]
  Job-->|" requires "|conditions_of_employment
  work_description-->|" correspondsTo "|Job
  labour_data-->|" uses "|Job
  Job-->|" subClassOf "|area_job
  Job-->|" has "|reporting_requirement
  conditions_of_employment-->|" requiredBy "|Job
  Job-->|" has "|job_status
  Job-->|" describedBy "|position_competency
  position_competency-->|" describes "|Job
  Job-->|" documentedBy "|work_description
```
