
:::caution

This reference has been auto-generated and therefore is not guaranteed to be using the stable release.

:::

<a name="Matrix"></a>

## Matrix
Class to create and manipulate Matrices

**Kind**: global class  

* [Matrix](#Matrix)
    * [new Matrix(rows, columns, values)](#new_Matrix_new)
    * [.multiply(other)](#Matrix+multiply) ⇒ [<code>Matrix</code>](#Matrix)
    * [.add(other)](#Matrix+add) ⇒ [<code>Matrix</code>](#Matrix)
    * [.divide(other)](#Matrix+divide) ⇒ [<code>Matrix</code>](#Matrix)
    * [.subtract(other)](#Matrix+subtract) ⇒ [<code>Matrix</code>](#Matrix)
    * [.multiplyScalar(scalar)](#Matrix+multiplyScalar) ⇒ [<code>Matrix</code>](#Matrix)
    * [.divideScalar(scalar)](#Matrix+divideScalar) ⇒ [<code>Matrix</code>](#Matrix)

<a name="new_Matrix_new"></a>

### new Matrix(rows, columns, values)
Creates a new matrix


| Param | Type | Description |
| --- | --- | --- |
| rows | <code>number</code> | The number of rows |
| columns | <code>number</code> | The number of columns |
| values | <code>Array.&lt;Array.&lt;number&gt;&gt;</code> | The values of the matrix |

<a name="Matrix+multiply"></a>

### matrix.multiply(other) ⇒ [<code>Matrix</code>](#Matrix)
Calculates the product of two matrices.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: [<code>Matrix</code>](#Matrix) - A new matrix that is the product of this matrix and other.  
**Throws**:

- <code>Error</code> If the number of columns of this matrix does not match the number of rows of the other matrix.


| Param | Type | Description |
| --- | --- | --- |
| other | <code>MatrixConstructor</code> | The matrix to multiply with. |

<a name="Matrix+add"></a>

### matrix.add(other) ⇒ [<code>Matrix</code>](#Matrix)
Adds the values of two matrices together.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: [<code>Matrix</code>](#Matrix) - A new matrix with the added values.  
**Throws**:

- <code>Error</code> If matrices do not have the same number of rows and columns.


| Param | Type | Description |
| --- | --- | --- |
| other | <code>MatrixConstructor</code> | The matrix to add to this one. |

<a name="Matrix+divide"></a>

### matrix.divide(other) ⇒ [<code>Matrix</code>](#Matrix)
Divides this matrix by another one element-wise and returns the result as a new matrix.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: [<code>Matrix</code>](#Matrix) - A new matrix that is the result of the element-wise division  
**Throws**:

- <code>Error</code> When matrices do not have the same dimensions or when dividing by 0


| Param | Type | Description |
| --- | --- | --- |
| other | <code>MatrixConstructor</code> | the matrix to divide by |

<a name="Matrix+subtract"></a>

### matrix.subtract(other) ⇒ [<code>Matrix</code>](#Matrix)
Subtract two matrices of the same dimensions and return the result.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: [<code>Matrix</code>](#Matrix) - a new matrix that is the result of the subtraction  
**Throws**:

- <code>Error</code> if matrices do not have the same dimensions


| Param | Type | Description |
| --- | --- | --- |
| other | <code>MatrixConstructor</code> | the matrix to subtract from this one |

<a name="Matrix+multiplyScalar"></a>

### matrix.multiplyScalar(scalar) ⇒ [<code>Matrix</code>](#Matrix)
Multiplies the matrix by a scalar.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: [<code>Matrix</code>](#Matrix) - a new Matrix object that is the result of the scalar multiplication.  

| Param | Type | Description |
| --- | --- | --- |
| scalar | <code>number</code> | the scalar to multiply with. |

<a name="Matrix+divideScalar"></a>

### matrix.divideScalar(scalar) ⇒ [<code>Matrix</code>](#Matrix)
Divides every element in the matrix by a scalar.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: [<code>Matrix</code>](#Matrix) - a new matrix with the results of the division  
**Throws**:

- <code>Error</code> if scalar is zero


| Param | Type | Description |
| --- | --- | --- |
| scalar | <code>number</code> | the scalar to divide by |

