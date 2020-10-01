# Conway's Game Of Life
Refer to [wikipedia](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life).

## How to setup
```
yarn install
```

## Design
### Design Goal
- Avoid mutation
- Avoid full copy every cell iteration

### Data Structure
There are 2 data structures. One represents alive cell another represents cell's neighbours. Alive cell represented as set. Cell's neighbours represented as map of cell and it's neighbour.
#### Example of Cell's neibhgours
| Cell | Neighbours            |
|------|-----------------------|
| 1,2  | '2,2'                 |
| 2,2  | '1,2' , '3,2'         |
| 3,2  | '2,2'                 |
| 0,3  | '1,2'                 |
| 0,2  | '1,2'                 |
| 0,1  | '1,2'                 |
| 1,1  | '1,2'                 |
| 2,1  | '1,2' , '2,2' , '3,2' |
| 2,3  | '1,2' , '2,2' , '3,2' |
| 1,3  | '1,2'                 |
| 1,3  | '2,2'                 |
| 3,3  | '2,2'                 |
| 1,1  | '2,2'                 |
| 3,1  | '2,2'                 |
| 3,3  | '3,2'                 |
| 4,3  | '3,2'                 |
| 4,2  | '3,2'                 |
| 4,1  | '3,2'                 |
| 3,1  | '3,2'                 |
#### Example of Alive cell

`['1,2', '2,2', '3,3']`

### Pseudo Code
```
For every stage
  Create new cell's neighbours table and alive cells set
  For every cell with neighbours
    Check the next state by counting the neigbours
      If it suppose to be alive?
        Add to alive cells set
        Add cell to neighbours table
  Return the new neigbhour table and alive cells set
```

## TODO
[] Visualize the result
[] Add propper input command (generation, template, etc)
[] Have neighbour generation for alive cell
