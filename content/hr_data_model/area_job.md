---
uri: https://gcxgce.sharepoint.com/teams/10001579/#area_job
title: Job
mermaid_layers: 1
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#area_job
- https://gcxgce.sharepoint.com/teams/10001579/#core_workforce_data
- https://gcxgce.sharepoint.com/teams/10001579/#job
- https://gcxgce.sharepoint.com/teams/10001579/#job_status
draft: false
---

## Related Links

- [[area_job]]
- [[core_workforce_data]]
- [[job]]
- [[job_status]]

## Semantic Connections

```mermaid
graph TD
  Job["Job"]:::current-page-node
  core_workforce_data["core_workforce_data"]
  job_status["job_status"]
  job["job"]
  job-->|" subClassOf "|Job
  job_status-->|" subClassOf "|Job
  Job-->|" subClassOf "|core_workforce_data
```
