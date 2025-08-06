---
uri: https://gcxgce.sharepoint.com/teams/10001579/#work_description
title: Work Description
mermaid_layers: 1
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#area_classification
- https://gcxgce.sharepoint.com/teams/10001579/#classification_decision
- https://gcxgce.sharepoint.com/teams/10001579/#classification_evaluation_authorization
- https://gcxgce.sharepoint.com/teams/10001579/#job
- https://gcxgce.sharepoint.com/teams/10001579/#position
- https://gcxgce.sharepoint.com/teams/10001579/#relativity_review_sample
- https://gcxgce.sharepoint.com/teams/10001579/#work_description
- https://gcxgce.sharepoint.com/teams/10001579/#work_description_status
- https://gcxgce.sharepoint.com/teams/10001579/#work_description_status_att
draft: false
---

## Related Links

- [[area_classification]]
- [[classification_decision]]
- [[classification_evaluation_authorization]]
- [[job]]
- [[position]]
- [[relativity_review_sample]]
- [[work_description_status]]

## Semantic Connections

```mermaid
graph TD
  Work_Description["Work Description"]:::current-page-node
  area_classification["area_classification"]
  job["job"]
  classification_decision["classification_decision"]
  work_description_status["work_description_status"]
  work_description_status_att["work_description_status_att"]
  relativity_review_sample["relativity_review_sample"]
  classification_evaluation_authorization["classification_evaluation_authorization"]
  position["position"]
  Work_Description-->|" subClassOf "|area_classification
  position-->|" relatesTo "|Work_Description
  Work_Description-->|" correspondsTo "|job
  classification_evaluation_authorization-->|" evaluates "|Work_Description
  Work_Description-->|" has "|work_description_status
  job-->|" documentedBy "|Work_Description
  work_description_status_att-->|" qualifies "|Work_Description
  Work_Description-->|" has "|classification_decision
  relativity_review_sample-->|" includes "|Work_Description
```
