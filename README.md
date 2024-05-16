## This code demonstrates the Prototype pattern in JavaScript for creating character objects with inheritance.

# Explanation:

A base Character class defines common properties 
- name
- position
- methods (move)

Archer and Mage subclasses inherit from Character and add unique properties (range, spell) and attack methods specific to their abilities.
New character objects are created using the prototypes, inheriting common functionalities while having space for customization.

## Benefits:

### Code reusability:
Base character class provides a foundation for subclasses.

Inheritance: Subclasses inherit common properties and methods.
Customization: Subclasses can have unique properties and methods.
