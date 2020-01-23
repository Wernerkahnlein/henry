## COIN ON TABLE

You have a rectangular board consisting of  rows, numbered from  to , and  columns, numbered from  to . The top left is  and the bottom right is . Initially - at time  - there is a coin on the top-left cell of your board. Each cell of your board contains one of these letters:

> *: Exactly one of your cells has letter '*'.

U: If at time  the coin is on cell  and cell  has letter 'U', the coin will be on cell at time , if . Otherwise, there is no coin on your board at time .

L: If at time  the coin is on cell  and cell  has letter 'L', the coin will be on cell at time , if . Otherwise, there is no coin on your board at time .

D: If at time  the coin is on cell  and cell  has letter 'D', the coin will be on cell at time , if . Otherwise, there is no coin on your board at time .

R: If at time  the coin is on cell  and cell  has letter 'R', the coin will be on cell at time , if . Otherwise, there is no coin on your board at time .

When the coin reaches a cell that has letter '*', it will stay there permanently. When you punch on your board, your timer starts and the coin moves between cells. Before starting the game, you can make operations to change the board, such that you are sure that at or before time  the coin will reach the cell having letter '*'. In each operation you can select a cell with some letter other than '*' and change the letter to 'U', 'L', 'R' or 'D'. You need to carry out as few operations as possible in order to achieve your goal. Your task is to find the minimum number of operations.

Input: 
The first line of input contains three integers, , , and , respectively. The next  lines contain  letters each, describing your board.

Output: 
Print an integer which represents the minimum number of operations required to achieve your goal. If you cannot achieve your goal, print .

Constraints 
 

Sample input :
```
2 2 3  
RD  
*L
```
Sample output :
```
0
```
Sample input :
```
2 2 1  
RD  
*L
```
Sample output :
```
1
```

Explanation :

In the first example, you don't have to change any letter; but in the second example, you should change the letter of cell (1,1) to 'D'.