---
uri: https://www.canada.ca/#service_digital_suite
title: Service and Digital policy Suite
mermaid_layers: 3
entities:
- https://www.canada.ca/#accessibility_requirements
- https://www.canada.ca/#advances_government_operations_services
- https://www.canada.ca/#deliver_government_operations_services
- https://www.canada.ca/#department_agency_ca
- https://www.canada.ca/#digital_era
- https://www.canada.ca/#government
- https://www.canada.ca/#government_operations_services
- https://www.canada.ca/#official_languages_requirements
- https://www.canada.ca/#policy_service_digital
- https://www.canada.ca/#privacy_requirements
- https://www.canada.ca/#public_servant
- https://www.canada.ca/#service_digital_functions
- https://www.canada.ca/#service_digital_suite
- https://www.canada.ca/#service_digital_supporting_instruments
- https://www.tbs-sct.canada.ca/pol/doc-eng.aspx?id=14208
- https://www.tbs-sct.canada.ca/pol/topic-sujet-eng.aspx?ta=27
draft: false
---

## Related Links

- [[advances_government_operations_services]]
- [[deliver_government_operations_services]]
- [[department_agency_ca]]
- [[government]]
- [[government_operations_services]]
- [[policy_service_digital]]
- [[public_servant]]
- [[service_digital_functions]]
- [[service_digital_supporting_instruments]]

## Semantic Connections

```mermaid
graph TD
  Service_and_Digital_policy_Suite["Service and Digital policy Suite"]:::current-page-node
  topic_sujet_engaspx["topic-sujet-eng.aspx"]
  Policy_on_Service_and_Digital["Policy on Service and Digital<br>+ label: Policy on Service and Digital<br>+ comment: The Policy on Service and Digital defines how a Government Department Agency manages service and digital functions. "]
  Policy_on_Service_and_Digital_Supporting_Instruments["Policy on Service and Digital Supporting Instruments<br>+ label: Policy on Service and Digital Supporting Instruments"]
  privacy_requirements["privacy_requirements"]
  official_languages_requirements["official_languages_requirements"]
  accessibility_requirements["accessibility_requirements"]
  Service_and_digital_functions["Service and digital functions<br>+ label: Service and digital functions"]
  GC_Departments_or_Agencies["GC Departments or Agencies<br>+ label: GC Departments or Agencies"]
  Advances_government_operations_and_services["Advances government operations and services<br>+ label: Advances government operations and services"]
  digital_era["digital_era"]
  doc_engaspx["doc-eng.aspx"]
  Government_operations_and_services["Government operations and services<br>+ label: Government operations and services"]
  Government_of_Canada["Government of Canada<br>+ label: Government of Canada"]
  Public_servant["Public servant<br>+ label: Public servant<br>+ comment: A role held by a person who is employed by the Government of Canada to carry out government duties and responsibilities."]
  Delivery_government_operations_and_services["Delivery government operations and services<br>+ label: Delivery government operations and services"]
  GC_Departments_or_Agencies-->|" employee "|Public_servant
  Policy_on_Service_and_Digital-->|" in_conjunction_with "|official_languages_requirements
  Service_and_Digital_policy_Suite-->|" hasPart "|Policy_on_Service_and_Digital
  Policy_on_Service_and_Digital-->|" in_conjunction_with "|accessibility_requirements
  Service_and_digital_functions-->|" subClassOf "|Government_operations_and_services
  Policy_on_Service_and_Digital-->|" provider "|GC_Departments_or_Agencies
  Advances_government_operations_and_services-->|" object "|Government_operations_and_services
  GC_Departments_or_Agencies-->|" subClassOf "|Government_of_Canada
  Policy_on_Service_and_Digital-->|" object "|Service_and_digital_functions
  Policy_on_Service_and_Digital-->|" has_context "|digital_era
  Policy_on_Service_and_Digital-->|" result "|Advances_government_operations_and_services
  GC_Departments_or_Agencies-->|" performs "|Delivery_government_operations_and_services
  Policy_on_Service_and_Digital-->|" seeAlso "|doc_engaspx
  Service_and_Digital_policy_Suite-->|" hasPart "|Policy_on_Service_and_Digital_Supporting_Instruments
  Service_and_Digital_policy_Suite-->|" seeAlso "|topic_sujet_engaspx
  Policy_on_Service_and_Digital-->|" supportedBy "|Policy_on_Service_and_Digital_Supporting_Instruments
  Policy_on_Service_and_Digital_Supporting_Instruments-->|" supports "|Policy_on_Service_and_Digital
  Policy_on_Service_and_Digital-->|" in_conjunction_with "|privacy_requirements
```
