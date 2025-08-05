---
uri: https://www.canada.ca/#data_information
title: Data and Information
mermaid_layers: 3
entities:
- https://www.canada.ca/#data_information
- https://www.canada.ca/#government_operations_services
- https://www.canada.ca/#service_digital_functions
draft: false
---

## Related Links

- [[government_operations_services]]
- [[service_digital_functions]]

## Semantic Connections

```mermaid
graph TD
  Data_and_Information["Data and Information<br>+ label: Data and Information"]:::current-page-node
  Service_and_digital_functions["Service and digital functions<br>+ label: Service and digital functions"]
  Government_operations_and_services["Government operations and services<br>+ label: Government operations and services"]
  Data_and_Information-->|" subClassOf "|Service_and_digital_functions
  Service_and_digital_functions-->|" subClassOf "|Government_operations_and_services
```
