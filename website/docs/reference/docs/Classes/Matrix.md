
:::caution

This reference has been auto-generated and therefore is not guaranteed to be using the stable release.

:::

<a name="Matrix"></a>

## Matrix
Class to create and manipulate Matrices

**Kind**: global class  

* [Matrix](#Matrix)
    * [.multiplyMatrices(matrixA, matrixB)](#Matrix+multiplyMatrices) ⇒ <code>Array.&lt;Array.&lt;number&gt;&gt;</code>
    * [.addMatrices(matrixA, matrixB)](#Matrix+addMatrices) ⇒ <code>Array.&lt;Array.&lt;number&gt;&gt;</code>
    * [.divideMatrices(matrixA, matrixB)](#Matrix+divideMatrices) ⇒ <code>Array.&lt;Array.&lt;number&gt;&gt;</code>
    * [.subtractMatrices(matrixA, matrixB)](#Matrix+subtractMatrices) ⇒ <code>Array.&lt;Array.&lt;number&gt;&gt;</code>
    * [.multiplyMatrixByScalar(matrix, scalar)](#Matrix+multiplyMatrixByScalar) ⇒ <code>Array.&lt;Array.&lt;number&gt;&gt;</code>
    * [.divideMatrixByScalar(matrix, scalar)](#Matrix+divideMatrixByScalar) ⇒ <code>Array.&lt;Array.&lt;number&gt;&gt;</code>

<a name="Matrix+multiplyMatrices"></a>

### matrix.multiplyMatrices(matrixA, matrixB) ⇒ <code>Array.&lt;Array.&lt;number&gt;&gt;</code>
Multiplies two matrices of different sizes.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: <code>Array.&lt;Array.&lt;number&gt;&gt;</code> - The resulting matrix from the multiplication.  
**Throws**:

- <code>Error</code> If the matrices cannot be multiplied.


| Param | Type | Description |
| --- | --- | --- |
| matrixA | <code>Array.&lt;Array.&lt;number&gt;&gt;</code> | The first matrix to multiply. |
| matrixB | <code>Array.&lt;Array.&lt;number&gt;&gt;</code> | The second matrix to multiply. |

<a name="Matrix+addMatrices"></a>

### matrix.addMatrices(matrixA, matrixB) ⇒ <code>Array.&lt;Array.&lt;number&gt;&gt;</code>
Adds two matrices.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: <code>Array.&lt;Array.&lt;number&gt;&gt;</code> - The resulting matrix from the addition.  
**Throws**:

- <code>Error</code> If the matrices have different dimensions.


| Param | Type | Description |
| --- | --- | --- |
| matrixA | <code>Array.&lt;Array.&lt;number&gt;&gt;</code> | The first matrix to add. |
| matrixB | <code>Array.&lt;Array.&lt;number&gt;&gt;</code> | The second matrix to add. |

<a name="Matrix+divideMatrices"></a>

### matrix.divideMatrices(matrixA, matrixB) ⇒ <code>Array.&lt;Array.&lt;number&gt;&gt;</code>
Divides two matrices.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: <code>Array.&lt;Array.&lt;number&gt;&gt;</code> - The resulting matrix from the division.  
**Throws**:

- <code>Error</code> If the matrices have different dimensions or if any element of matrixB is zero.


| Param | Type | Description |
| --- | --- | --- |
| matrixA | <code>Array.&lt;Array.&lt;number&gt;&gt;</code> | The first matrix to divide. |
| matrixB | <code>Array.&lt;Array.&lt;number&gt;&gt;</code> | The second matrix to divide. |

<a name="Matrix+subtractMatrices"></a>

### matrix.subtractMatrices(matrixA, matrixB) ⇒ <code>Array.&lt;Array.&lt;number&gt;&gt;</code>
Subtracts two matrices.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: <code>Array.&lt;Array.&lt;number&gt;&gt;</code> - The resulting matrix from the subtraction.  
**Throws**:

- <code>Error</code> If the matrices have different dimensions.


| Param | Type | Description |
| --- | --- | --- |
| matrixA | <code>Array.&lt;Array.&lt;number&gt;&gt;</code> | The first matrix to subtract. |
| matrixB | <code>Array.&lt;Array.&lt;number&gt;&gt;</code> | The second matrix to subtract. |

<a name="Matrix+multiplyMatrixByScalar"></a>

### matrix.multiplyMatrixByScalar(matrix, scalar) ⇒ <code>Array.&lt;Array.&lt;number&gt;&gt;</code>
Multiplies a matrix by a scalar.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: <code>Array.&lt;Array.&lt;number&gt;&gt;</code> - The resulting matrix from the multiplication.  

| Param | Type | Description |
| --- | --- | --- |
| matrix | <code>Array.&lt;Array.&lt;number&gt;&gt;</code> | The matrix to multiply. |
| scalar | <code>number</code> | The scalar to multiply the matrix by. |

<a name="Matrix+divideMatrixByScalar"></a>

### matrix.divideMatrixByScalar(matrix, scalar) ⇒ <code>Array.&lt;Array.&lt;number&gt;&gt;</code>
Divides a matrix by a scalar.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: <code>Array.&lt;Array.&lt;number&gt;&gt;</code> - The resulting matrix from the division.  
**Throws**:

- <code>Error</code> If the scalar is zero.


| Param | Type | Description |
| --- | --- | --- |
| matrix | <code>Array.&lt;Array.&lt;number&gt;&gt;</code> | The matrix to divide. |
| scalar | <code>number</code> | The scalar to divide the matrix by. |

