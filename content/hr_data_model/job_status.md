---
uri: https://gcxgce.sharepoint.com/teams/10001579/#job_status
title: job_status
mermaid_layers: 1
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#area_job
- https://gcxgce.sharepoint.com/teams/10001579/#job
- https://gcxgce.sharepoint.com/teams/10001579/#job_status
draft: false
---

## Related Links

- [[area_job]]
- [[job]]
- [[job_status]]

## Semantic Connections

```mermaid
graph TD
  job_status["job_status"]:::current-page-node
  area_job["area_job"]
  job["job"]
  job_status-->|" subClassOf "|area_job
  job-->|" has "|job_status
```
