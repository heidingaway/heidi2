---
uri: https://www.canada.ca/#manages_cyber_security
title: Manages cyber security
mermaid_layers: 3
entities:
- https://www.canada.ca/#chief_digital_service_officer
- https://www.canada.ca/#cyber_security
- https://www.canada.ca/#data_information
- https://www.canada.ca/#data_information_functions
- https://www.canada.ca/#deliver_government_operations_services
- https://www.canada.ca/#department_agency_ca
- https://www.canada.ca/#government_operations_services
- https://www.canada.ca/#information_technology
- https://www.canada.ca/#manages_cyber_security
- https://www.canada.ca/#manages_data_information
- https://www.canada.ca/#manages_data_information_strategic
- https://www.canada.ca/#manages_information_technology
- https://www.canada.ca/#manages_service_delivery
- https://www.canada.ca/#manages_service_digital_functions
- https://www.canada.ca/#policy_service_digital
- https://www.canada.ca/#service_delivery
- https://www.canada.ca/#service_digital_functions
draft: false
---

## Related Links

- [[cyber_security]]
- [[data_information]]
- [[deliver_government_operations_services]]
- [[department_agency_ca]]
- [[government_operations_services]]
- [[information_technology]]
- [[manages_cyber_security]]
- [[manages_data_information]]
- [[manages_data_information_strategic]]
- [[manages_information_technology]]
- [[manages_service_delivery]]
- [[manages_service_digital_functions]]
- [[policy_service_digital]]
- [[service_delivery]]
- [[service_digital_functions]]

## Semantic Connections

```mermaid
graph TD
  Manages_cyber_security["Manages cyber security<br>+ label: Manages cyber security"]:::current-page-node
  Manages_service_and_digital_functions["Manages service and digital functions<br>+ label: Manages service and digital functions"]
  Cyber_Security["Cyber Security<br>+ label: Cyber Security"]
  Service_and_digital_functions["Service and digital functions<br>+ label: Service and digital functions"]
  Delivery_government_operations_and_services["Delivery government operations and services<br>+ label: Delivery government operations and services"]
  Manages_service_delivery["Manages service delivery<br>+ label: Manages service delivery"]
  Manages_data_and_information["Manages data and information<br>+ label: Manages data and information"]
  Manages_information_technology["Manages information technology<br>+ label: Manages information technology"]
  Government_operations_and_services["Government operations and services<br>+ label: Government operations and services"]
  Policy_on_Service_and_Digital["Policy on Service and Digital<br>+ label: Policy on Service and Digital<br>+ comment: The Policy on Service and Digital defines how a Government Department Agency manages service and digital functions. "]
  Service_delivery["Service delivery<br>+ label: Service delivery"]
  Information_Technology["Information Technology<br>+ label: Information Technology"]
  chief_digital_service_officer["chief_digital_service_officer"]
  data_information_functions["data_information_functions"]
  GC_Departments_or_Agencies["GC Departments or Agencies<br>+ label: GC Departments or Agencies"]
  Data_and_Information["Data and Information<br>+ label: Data and Information"]
  strategic_management_of_data_and_information["strategic management of data and information<br>+ label: strategic management of data and information"]
  Cyber_Security-->|" subClassOf "|Service_and_digital_functions
  Manages_service_delivery-->|" subClassOf "|Manages_service_and_digital_functions
  Manages_information_technology-->|" subClassOf "|Manages_service_and_digital_functions
  Service_and_digital_functions-->|" subClassOf "|Government_operations_and_services
  Manages_service_and_digital_functions-->|" object "|Service_and_digital_functions
  data_information_functions-->|" subClassOf "|Service_and_digital_functions
  Manages_cyber_security-->|" subClassOf "|Manages_service_and_digital_functions
  Information_Technology-->|" subClassOf "|Service_and_digital_functions
  Manages_cyber_security-->|" object "|Cyber_Security
  Manages_service_delivery-->|" object "|Service_delivery
  Service_delivery-->|" subClassOf "|Service_and_digital_functions
  Delivery_government_operations_and_services-->|" object "|Government_operations_and_services
  Manages_information_technology-->|" object "|Information_Technology
  chief_digital_service_officer-->|" partOf "|Service_and_digital_functions
  strategic_management_of_data_and_information-->|" hasPart "|Manages_data_and_information
  GC_Departments_or_Agencies-->|" performs "|Delivery_government_operations_and_services
  Manages_data_and_information-->|" subClassOf "|Manages_service_and_digital_functions
  Manages_data_and_information-->|" object "|Data_and_Information
  Manages_service_and_digital_functions-->|" subClassOf "|Delivery_government_operations_and_services
  Policy_on_Service_and_Digital-->|" object "|Service_and_digital_functions
```
