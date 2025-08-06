---
uri: https://gcxgce.sharepoint.com/teams/10001579/#address
title: Address
mermaid_layers: 1
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#text
- https://schema.org/GeoCoordinates
- https://schema.org/GeoShape
- https://schema.org/Organization
- https://schema.org/Person
- https://schema.org/Place
- https://schema.org/PostalAddress
- https://schema.org/address
draft: false
---

## Related Links

- [[Organization]]
- [[Person]]
- [[Place]]

## Semantic Connections

```mermaid
graph TD
  Address["Address<br>+ label: address<br>+ comment: Physical address of the item."]:::current-page-node
  GeoCoordinates["GeoCoordinates<br>+ label: GeoCoordinates<br>+ comment: The geographic coordinates of a place or event."]
  GeoShape["GeoShape<br>+ label: GeoShape<br>+ comment: longitude pairs. Either whitespace or commas can be used to separate latitude and longitude"]
  Organization["Organization<br>+ label: Organization<br>+ comment: An organization such as a school, NGO, corporation, club, etc."]
  Person["Person<br>+ label: Person<br>+ comment: A person (alive, dead, undead, or fictional)."]
  Place["Place<br>+ label: Place<br>+ comment: Entities that have a somewhat fixed, physical extension."]
  PostalAddress["PostalAddress<br>+ label: PostalAddress<br>+ comment: The mailing address."]
  Text["Text<br>+ label: Text<br>+ comment:  Text."]
  Address-->|" domainIncludes "|GeoShape
  Address-->|" domainIncludes "|GeoCoordinates
  Address-->|" domainIncludes "|Person
  Address-->|" domainIncludes "|Organization
  Address-->|" domainIncludes "|Place
  Address-->|" rangeIncludes "|Text
  Address-->|" rangeIncludes "|PostalAddress
```
