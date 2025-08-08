---
uri: https://gcxgce.sharepoint.com/teams/10001579/#area_performance
title: Performance
mermaid_layers: 1
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#area_performance
- https://gcxgce.sharepoint.com/teams/10001579/#employee_performance_result
- https://gcxgce.sharepoint.com/teams/10001579/#hr_business_line_data
- https://gcxgce.sharepoint.com/teams/10001579/#performance_agreement
- https://gcxgce.sharepoint.com/teams/10001579/#performance_agreement_commitment
- https://gcxgce.sharepoint.com/teams/10001579/#performance_agreement_review_schedule
- https://gcxgce.sharepoint.com/teams/10001579/#performance_agreement_signoff
- https://gcxgce.sharepoint.com/teams/10001579/#performance_agreement_status
- https://gcxgce.sharepoint.com/teams/10001579/#performance_improvement_plan
- https://gcxgce.sharepoint.com/teams/10001579/#talent_management_plan
draft: false
---

## Related Links

- [[area_performance]]
- [[employee_performance_result]]
- [[hr_business_line_data]]
- [[performance_agreement]]
- [[performance_agreement_commitment]]
- [[performance_agreement_review_schedule]]
- [[performance_agreement_signoff]]
- [[performance_agreement_status]]

## Semantic Connections

```mermaid
graph TD
  Performance["Performance"]:::current-page-node
  hr_business_line_data["hr_business_line_data"]
  performance_agreement_review_schedule["performance_agreement_review_schedule"]
  performance_agreement_status["performance_agreement_status"]
  performance_agreement_commitment["performance_agreement_commitment"]
  performance_agreement_signoff["performance_agreement_signoff"]
  talent_management_plan["talent_management_plan"]
  performance_agreement["performance_agreement"]
  performance_improvement_plan["performance_improvement_plan"]
  employee_performance_result["employee_performance_result"]
  performance_agreement_signoff-->|" subClassOf "|Performance
  Performance-->|" subClassOf "|hr_business_line_data
  performance_agreement-->|" subClassOf "|Performance
  employee_performance_result-->|" subClassOf "|Performance
  performance_agreement_commitment-->|" subClassOf "|Performance
  performance_agreement_review_schedule-->|" subClassOf "|Performance
  performance_improvement_plan-->|" subClassOf "|Performance
  performance_agreement_status-->|" subClassOf "|Performance
  talent_management_plan-->|" subClassOf "|Performance
```
