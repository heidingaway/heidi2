---
uri: https://gcxgce.sharepoint.com/teams/10001579/#area_recognition
title: Recognition
mermaid_layers: 1
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#area_recognition
- https://gcxgce.sharepoint.com/teams/10001579/#award_program
- https://gcxgce.sharepoint.com/teams/10001579/#hr_business_line_data
- https://gcxgce.sharepoint.com/teams/10001579/#recognition
- https://gcxgce.sharepoint.com/teams/10001579/#recognition_status
draft: false
---

## Related Links

- [[award_program]]
- [[hr_business_line_data]]
- [[recognition]]
- [[recognition_status]]

## Semantic Connections

```mermaid
graph TD
  Recognition["Recognition"]:::current-page-node
  hr_business_line_data["hr_business_line_data"]
  recognition_status["recognition_status"]
  award_program["award_program"]
  recognition["recognition"]
  recognition_status-->|" subClassOf "|Recognition
  recognition-->|" subClassOf "|Recognition
  Recognition-->|" subClassOf "|hr_business_line_data
  award_program-->|" subClassOf "|Recognition
```
