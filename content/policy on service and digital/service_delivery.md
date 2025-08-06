---
uri: https://www.canada.ca/#service_delivery
title: Service delivery
mermaid_layers: 3
entities:
- https://www.canada.ca/#government_operations_services
- https://www.canada.ca/#service_delivery
- https://www.canada.ca/#service_digital_functions
draft: false
---

## Related Links

- [[government_operations_services]]
- [[service_digital_functions]]

## Semantic Connections

```mermaid
graph TD
  Service_delivery["Service delivery<br>+ label: Service delivery"]:::current-page-node
  Service_and_digital_functions["Service and digital functions<br>+ label: Service and digital functions"]
  Government_operations_and_services["Government operations and services<br>+ label: Government operations and services"]
  Service_and_digital_functions-->|" subClassOf "|Government_operations_and_services
  Service_delivery-->|" subClassOf "|Service_and_digital_functions
```
