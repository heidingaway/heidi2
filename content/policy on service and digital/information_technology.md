---
uri: https://www.canada.ca/#information_technology
title: Information Technology
mermaid_layers: 3
entities:
- https://www.canada.ca/#government_operations_services
- https://www.canada.ca/#information_technology
- https://www.canada.ca/#service_digital_functions
draft: false
---

## Related Links

- [[government_operations_services]]
- [[information_technology]]
- [[service_digital_functions]]

## Semantic Connections

```mermaid
graph TD
  Information_Technology["Information Technology<br>+ label: Information Technology"]:::current-page-node
  Service_and_digital_functions["Service and digital functions<br>+ label: Service and digital functions"]
  Government_operations_and_services["Government operations and services<br>+ label: Government operations and services"]
  Service_and_digital_functions-->|" subClassOf "|Government_operations_and_services
  Information_Technology-->|" subClassOf "|Service_and_digital_functions
```
