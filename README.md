# Layer Matrix
This code demonstrates an algorithm for building and visualizing a layer matrix.

## Example
Suppose we have a matrix:

[0.5  0.6  0.0]  
[0.8  0.2  0.4]  
[0.7  0.1  1.0]

Need to get a layer matrix consisting of two layers. Obviously, the first level contains values from the interval [0; 0.5], and the second level contains values from the interval (0.5; 1].
Therefore, the level matrix will look like this:

[0  1  0]  
[1  0  0]  
[1  0  1]