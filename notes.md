# 42000 ft.
The JSON files need to represent ship structure, objects, entities, zones, damage & other meta information

Every ship has a single file which defines all of this information. The idea here is to minimize HTTP/I.O. requests & quickly build this in memory.

## Structure
The structure definition simply contains the vertice/shape/position information. It's broken out into subgroups that can be accessed depending on what part of the universe you're observing.

To help facilitate the more complicated builds, some helper functions could be implemented. For example, symmetry, repeating & basic math functions + variables.

## Scaffolding
Scaffolding defines the base shape of the ship at its lowest LOD. It's grouped together in arrays that share the same texture so they can be merged into a single geometry later.

### Interior
A subset of structure is the interior definition. The interior geometry is detached because it is only loaded by players inside the ship.

Some pieces of the geometry (eg: walls) can be merged, while others (eg: doors) cannot be.

### Increased LOD
For players working close to a particular part of the ship (eg: Pilot looking over the bow) we should enhance the LOD displayed.

## Components
Components are parts of the ship that any player can interact with. Example components could be
- Computer
- Turret
- Pipes
- Repair station

The components definition specifies either the type of component (for common / shared items) or defines a custom one on the spot. (Maybe allow for inheritance?)
It also specifies location on the ship.

## Zones
Zones are invisible hit-boxes which define different areas of the ship. Zones are used to determine
- What to render. This is done by listing which structure groups & components should be rendered.
- What to receive updates in. Same as above ^
