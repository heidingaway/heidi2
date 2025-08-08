---
uri: https://gcxgce.sharepoint.com/teams/10001579/#employee
title: Employee
mermaid_layers: 1
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#area_employee
- https://gcxgce.sharepoint.com/teams/10001579/#career_development
- https://gcxgce.sharepoint.com/teams/10001579/#employee
- https://gcxgce.sharepoint.com/teams/10001579/#employee_classification
- https://gcxgce.sharepoint.com/teams/10001579/#employment_history
- https://gcxgce.sharepoint.com/teams/10001579/#financial_institution_information
- https://gcxgce.sharepoint.com/teams/10001579/#medical_assessment
- https://gcxgce.sharepoint.com/teams/10001579/#organization
- https://gcxgce.sharepoint.com/teams/10001579/#position
- https://gcxgce.sharepoint.com/teams/10001579/#tax_information
- https://gcxgce.sharepoint.com/teams/10001579/#work_arrangement
draft: false
---

## Related Links

- [[area_employee]]
- [[career_development]]
- [[employee]]
- [[employee_classification]]
- [[employment_history]]
- [[financial_institution_information]]
- [[medical_assessment]]
- [[organization]]
- [[position]]
- [[tax_information]]
- [[work_arrangement]]

## Semantic Connections

```mermaid
graph TD
  Employee["Employee"]:::current-page-node
  area_employee["area_employee"]
  career_development["career_development"]
  employment_history["employment_history"]
  financial_institution_information["financial_institution_information"]
  medical_assessment["medical_assessment"]
  tax_information["tax_information"]
  work_arrangement["work_arrangement"]
  position["position"]
  employee_classification["employee_classification"]
  organization["organization"]
  Employee-->|" has "|medical_assessment
  Employee-->|" has "|employment_history
  Employee-->|" has "|work_arrangement
  Employee-->|" incumbentIn "|position
  employee_classification-->|" isFor "|Employee
  organization-->|" employs "|Employee
  Employee-->|" subClassOf "|area_employee
  Employee-->|" has "|career_development
  Employee-->|" has "|tax_information
  Employee-->|" has "|financial_institution_information
```
