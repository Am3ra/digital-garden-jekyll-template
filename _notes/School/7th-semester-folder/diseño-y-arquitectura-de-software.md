---
---

# Diseño Y Arquitectura De Software

Tags: [[7th semester]] [[university]]

## What is Software architecture?

- Software Architecture
  - An abstraction of the implementation
  - Every software system has an Architecture
  - Architecture includes behavior.
  - Structures
    - A structure is a set of elements themselves, as they exist in software or hardware.
    - Types of structures:
      - Modules
        - Major partitions of elements, like MVC
      - Component and Connector (C&C)
        - Focus on the way that elements interact with each-other
        - dynamic
        - runtime structures
      - Allocation structure
        - mapping from software structures to the system’s organizational, developmental, installation, and execution environments.
  - Views
    - A representation of a coherent set of architectural elements, as written and read by system stakeholders.
    - It is a representation of a set of elements, and the relation between them.
    - In short, a view is a representation of a structure
  - Architecture as a set of Structures
    - Software systems are sets of structures, with relations between them.
    - No single structure is the architecture
- Software Architect
  - Technical Knowledge
  - Leadership and communication
    - Effectively communicate ideas to stakeholders
    - Collaboration
    - Translation (business to technical)
  - Business Domain Knowledge
    - Architecture that fits domain.
    - Business trends.
    - Communication with business people.
  - Methodology and strategy
    - Which methodology?
      - Scrum
      - Agile
      - Waterfall
      - etc
- Software vs. System vs. Enterprise
  - Software is the smallest scope of the three.
  - System includes software.
  - Enterprise includes system architecture.

## Object oriented programming

- Encapsulation
  - Objects try to keep state private. (Try.)
- Abstraction
  - Hide complexities of internal operation
- Inheritance
  - Avoid repeating code by inheriting methods from parent classes.
- Polymorphism
  - Use a variable that is of a parent type, to call the same method from any type of child class.
- Abstract Classes and Interfaces
  - Interface is a contract to be fulfilled by classes that inherit.
    - All methods are abstract
  - Abstract classes are abstract.
    - Only some (>1) methods are abstract — some are concrete.
  - Neither can be instantiated
- Association
  - Relation between classes.
  - Composition
    - Describes a class with a *has-a* relationship to another classes.
      - A car *has an* engine, it is not one.
    - Restricted form of aggregation.
    - Implies one can't exist without the other.
  - Aggregation
    - Relationship where two entities are highly dependent of eachother.
    - represents *part-of* relationship

## SOLID principles

- Single Responsibility
  - A class must have only one reason to change - single responsibility
- Open/Closed design
  - software entities (classes, modules, functions, etc.) must be opened for an extension, but closed for modification
  - Basically, every time you want to extend it, shouldn't have to change the code.
    - Shape area() example
- Liskov Substitution Principle
  - subtypes should be replaceable by their base types
  - Basically, you should be able to replace Peugeot with Car
- Interface Segregation principle
  - many specific interfaces are better than a general interface
  - Make more specific interfaces that only do what they need to
- Dependency Inversion Principle
  - Depend on abstractions and not on concrete classes
    - High-level modules should not depend on low-level modules. Both should depend on abstractions.
    - Abstractions should not depend on details. Details should depend on abstractions.

Other important principles:

- Law of Demeter
  - Call only friends
  - Don't chain method calls:
    - Connection.getDriver( ).getName()
- Hollywood Principle
  - Don't Call Us, We'll Call you
  - Observer Pattern.
- KISS
- YAGNI
  - Only code what you need
  - Don't assume to know what you *will* need.
- DRY

## Architecture Quality

- Sample Application
  - Why are we seeing this UML diagram...
- Architecture Quality:
  - Depends on many Factors
    - Skill
    - Time
    - Legacy Dependencies
    - Time
    - Risk tolerance
    - Regulatory Constraint.
- Architecture Factors:
  - Reliability
    - High Accuracy
    - Low Accuracy puts the organization at risk.
    - Performs function user expected
    - **System should continue performing correctly in face of adversity**
    - Can tolerate Mistakes
      - Types of mistakes:
        - HW
        - SW
        - Human
    - What can we do:
      - Design to minimize opportunities for error.
      - Decouple places where mistakes happen and where mistakes can cause failure.
      - Test thoroughly.
    - Chaos Monkey + Netflix
  - Scalability
    - Ability to meet growth requirements.
    - “If the system grows in a particular way, what are our options for coping with the growth?”
    - Coping Mechanisms
      - Horizontal scalability
        - adding more resources to logical units, such as adding another server to a cluster of servers
        - Add more units (more buses)
      - Vertical scalability
        - Adding more resources to physical units
        - Improve Units (better buses)
      - Load Balancing
        - Spread traffic across cluster of servers
        - Keep track of statuses
        - Load balancing Metrics:
          - Bandwidth
          - Response time
          - Connections
        - Load balancing algorithms
          - Round robin
            - Cycle a list of which server to direct traffic to
          - Weighted Round Robin
            - Weigh servers based on capabilities
          - IP hash
            - Simply hash the IPs
      - Caching
        - Store common responses in smaller memory
        - CDN
          - Special type of Cache, helpful for statiic media.
        - Cache eviction policies
          - FIFO
          - LIFO
          - Least Recently used (oldest)
          - Most Recently Used (Newest)
          - Least Frequently Used
          - Random Replacement
  - Flexibility
    - Able to meet changing business demands
  - Availability
    - probability that a system will work as required when required during the period of a mission
    - Ensures continuity
  - Performance
    - Performance is an indicator of how well a software system or component meets its requirements for timeliness
    - Speed in effecting a task
    - Latency
      - Duration request waits to be handled
    - Response time
      - Total time to get response to request
      - High response times cost money
        - 100ms increase in response time reduces sales by 1%
  - CAP THEOREM
    - Trade-off between Availability, Consistency, Partition Tolerance

## Week 7


- UML
  - Degrees of UML
    - As a sketch
      - Explain ideas
    - As a blueprint
      - provide detailed specification of a system
      - Generated with UML tool
    - As a programming language
  - 4+1 view model
    - Logical Views
      - Funcitionality
      - Abstract descriptions of system partitions
      - Diagrams
        - Classes
        - Object
        - State machine
        - Interaction diagram
    - Implementation view
      - Software management
      - Describes processes within system
      - Diagrams
        - Activity Diagram
    - Process View
      - Performance
      - Scalability
      - Throughput
      - Diagrams:
        - Component or package
    - Deployment view
      - System topology
      - Delivery, installation
      - Communication
      - Diagram:
        - Deployment Diagrams
    - **Use case view**
      - Understandability
      - Usability
      - Describes functionality from perspective of outside world.
      - Diagrams:
        - Use case, Descriptions

## Week 9

- Design patterns
  - Creational
    - Singleton
      - Problem:
        - Access a unique instance from anywhere
      - Solution
        - Singleton.
      - Pros:
        - Only one instance (low memory)
        - lazy initialization
      - Cons:
        - Can't subclass
        - Synchronization problems
        - No parameters to the constructor
        - Difficult to test.
    - Factory
      - Generalization of object creation.
    - Abstract Factory
    - Builder
    - Object Pool
    - Facade
    - Adapter
  - Structural
  - Behavioral

## Configuration Administration

- Configuration Administration
  - Create Baseline
  - Track changes
  - Establish integrity
  - Basically:
    - Administration of all the work products, and tracking that all changes in one document are correctly reflected on other dependencies.
  - View all
  - The Requirements Traceability Matrix (RTM)
  - Configuration elements
    - Logical groupings of work products
    - Ex:
      - Files
      - Documents
      - analyses
  - Continuous Integration in Agile
    - Literally just continuously integrate lmao
    - need a central repo

[//begin]: # "Autogenerated link references for markdown compatibility"
[7th semester]: ../7th-semester "7th-semester"
[university]: ../../university "university"
[//end]: # "Autogenerated link references"
