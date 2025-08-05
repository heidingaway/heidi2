---
uri: https://www.canada.ca/#user
title: User
mermaid_layers: 3
entities:
- http://www.thesaurus.gc.ca/#information_technology
- https://www.canada.ca/#client
- https://www.canada.ca/#cyber_security
- https://www.canada.ca/#data_information
- https://www.canada.ca/#external_service
- https://www.canada.ca/#government_operations_services
- https://www.canada.ca/#internal_service
- https://www.canada.ca/#manages_information_technology
- https://www.canada.ca/#manages_service_digital_functions
- https://www.canada.ca/#policy_service_digital
- https://www.canada.ca/#service_delivery
- https://www.canada.ca/#service_digital_functions
- https://www.canada.ca/#user
draft: false
---

## Related Links

- [[client]]
- [[cyber_security]]
- [[data_information]]
- [[government_operations_services]]
- [[information_technology]]
- [[manages_information_technology]]
- [[manages_service_digital_functions]]
- [[policy_service_digital]]
- [[service_delivery]]
- [[service_digital_functions]]

## Semantic Connections

```mermaid
graph TD
  User["User<br>+ label: User"]:::current-page-node
  Client["Client<br>+ comment: Individuals, businesses or their representatives served by or using either internal or external services provided by the Government of Canada. When describing interactions with information technologies, clients can be referred to as users.<br>+ label: Client"]
  Information_Technology["Information Technology<br>+ label: Information Technology"]
  internal_service["internal_service"]
  external_service["external_service"]
  Service_and_digital_functions["Service and digital functions<br>+ label: Service and digital functions"]
  Manages_information_technology["Manages information technology<br>+ label: Manages information technology"]
  Government_operations_and_services["Government operations and services<br>+ label: Government operations and services"]
  Policy_on_Service_and_Digital["Policy on Service and Digital<br>+ label: Policy on Service and Digital<br>+ comment: The Policy on Service and Digital defines how a Government Department Agency manages service and digital functions. "]
  Manages_service_and_digital_functions["Manages service and digital functions<br>+ label: Manages service and digital functions"]
  Service_delivery["Service delivery<br>+ label: Service delivery"]
  Data_and_Information["Data and Information<br>+ label: Data and Information"]
  Cyber_Security["Cyber Security<br>+ label: Cyber Security"]
  Manages_information_technology-->|" object "|Information_Technology
  User-->|" interacts_with "|Information_Technology
  Service_and_digital_functions-->|" subClassOf "|Government_operations_and_services
  Policy_on_Service_and_Digital-->|" object "|Service_and_digital_functions
  Client-->|" interacts_with "|internal_service
  Information_Technology-->|" subClassOf "|Service_and_digital_functions
  Manages_service_and_digital_functions-->|" object "|Service_and_digital_functions
  Client-->|" interacts_with "|external_service
  User-->|" subClassOf "|Client
  Cyber_Security-->|" subClassOf "|Service_and_digital_functions
  Service_delivery-->|" subClassOf "|Service_and_digital_functions
  Manages_information_technology-->|" subClassOf "|Manages_service_and_digital_functions
  Data_and_Information-->|" subClassOf "|Service_and_digital_functions
```
