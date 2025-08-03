---
title: Service Design Delivery
aliases:
- Service Design Delivery
created: 2025-07-29
modified: 2025-08-03
tags: []
draft: false
subClassOf:
- '[[cdso_specific_accountability]]'
entities:
- https://heidingaway.github.io/heidi2/cdso_accountability_3
- https://heidingaway.github.io/heidi2/cdso_accountability_4
- https://heidingaway.github.io/heidi2/cdso_specific_accountability
- https://heidingaway.github.io/heidi2/service_design_delivery
- https://heidingaway.github.io/heidi2/service_design_delivery_functions
---

## Related Links

- [[cdso_accountability_3]]
- [[cdso_accountability_4]]
- [[cdso_specific_accountability]]
- [[service_design_delivery_functions]]

## Semantic Connections

```mermaid
graph TD
  Service_Design_Delivery["Service Design Delivery"]:::current-page-node
  cdso_specific_accountability["cdso_specific_accountability"]
  cdso_accountability_3["cdso_accountability_3"]
  cdso_accountability_4["cdso_accountability_4"]
  service_design_delivery_functions["service_design_delivery_functions"]
  service_design_delivery_functions-->|" subClassOf "|Service_Design_Delivery
  Service_Design_Delivery-->|" subClassOf "|cdso_specific_accountability
  cdso_accountability_4-->|" subClassOf "|Service_Design_Delivery
  cdso_accountability_3-->|" subClassOf "|Service_Design_Delivery
```
