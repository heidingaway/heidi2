---
title: owl_restriction
created: 2025-08-12
modified: 2025-08-13
tags: []
draft: true
permalink: 
---
# owl_restriction
`owl:Restriction` is a way to define classes based on the properties of their instances. Instead of simply listing what a class "is," you use `owl:Restriction` to describe what its instances **"have"**. This makes your ontology more powerful for automated reasoning.

## How to Apply `owl:Restriction`

There are three main types of `owl:Restriction` that are used to describe a class based on its properties:

1. **Quantifier Restrictions** 🧐: These set rules about the number or type of values a property can have.

    - **`owl:someValuesFrom`**: This means "at least one of the values for this property must come from a certain class." It's used to state that a relationship exists.

        - **Example**: `h2:duty_holder rdfs:subClassOf [ owl:onProperty h2:holds ; owl:someValuesFrom h2:duty ]`. This states that every `duty_holder` **must hold at least one** `duty`.

    - **`owl:allValuesFrom`**: This means "all values for this property must come from a certain class." It's a stronger statement, used to constrain a relationship.

        - **Example**: `h2:authorized_action rdfs:subClassOf [ owl:onProperty schema:agent ; owl:allValuesFrom h2:authority_holder ]`. This states that **all agents** of an `authorized_action` **must be** an `authority_holder`.

    - **`owl:hasValue`**: This means "at least one of the values for this property must be a specific individual."

        - **Example**: A class `h2:CanadianPolicy` could be a subclass of `h2:policy`, with a restriction that its `dcterms:author` property `owl:hasValue` `wiki:Government_of_Canada`.

2. **Cardinality Restrictions** 🔢: These set rules about the exact number of values a property can have for a given instance.

    - **`owl:minCardinality`**: Specifies the minimum number of values.

    - **`owl:maxCardinality`**: Specifies the maximum number of values.

    - **`owl:exactCardinality`**: Specifies an exact number of values.

        - **Example**: A `h2:policy_suite` could have a restriction that it has `owl:minCardinality "1"` for `h2:policy`, meaning it **must have at least one** policy.

3. **Complex Restrictions** 🧠: These can be combined to form more advanced logical expressions. You can use these restrictions to define a class that is the intersection (`owl:intersectionOf`) or union (`owl:unionOf`) of other classes or restrictions.

**Key takeaway**: `owl:Restriction` is a powerful tool to describe classes **by their properties** rather than just their sub-class relationships. This approach, known as **"description logic,"** allows a reasoner to automatically infer a class's members, making the ontology smarter and more flexible.
