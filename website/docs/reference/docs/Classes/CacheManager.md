
:::caution

This reference has been auto-generated and therefore is not guaranteed to be using the stable release.

:::

<a name="CacheManager"></a>

## CacheManager
Class to add and read current cache

**Kind**: global class  

* [CacheManager](#CacheManager)
    * [.add(type, input, output)](#CacheManager.add) ⇒ <code>any</code>
    * [.get(type, input)](#CacheManager.get) ⇒ <code>any</code>
    * [.delete(type, input)](#CacheManager.delete) ⇒ <code>any</code>
    * [.clear(type)](#CacheManager.clear) ⇒ <code>void</code>
    * [.clearAll()](#CacheManager.clearAll) ⇒ <code>void</code>

<a name="CacheManager.add"></a>

### CacheManager.add(type, input, output) ⇒ <code>any</code>
Adds the input/output pair to the appropriate cache based on the given type.

**Kind**: static method of [<code>CacheManager</code>](#CacheManager)  
**Returns**: <code>any</code> - - The cache object that the pair was added to  

| Param | Type | Description |
| --- | --- | --- |
| type | [<code>CacheType</code>](#CacheType) \| <code>string</code> | The type of cache to add the pair to. |
| input | <code>number</code> | The input value of the pair |
| output | <code>number</code> | The output value of the pair |

<a name="CacheManager.get"></a>

### CacheManager.get(type, input) ⇒ <code>any</code>
Returns a cached value based on the input and the type of cache.

**Kind**: static method of [<code>CacheManager</code>](#CacheManager)  
**Returns**: <code>any</code> - The cached value retrieved from the specified cache  

| Param | Type | Description |
| --- | --- | --- |
| type | [<code>CacheType</code>](#CacheType) \| <code>string</code> | The type of cache to retrieve the value from. |
| input | <code>number</code> | The input value used to retrieve the cached value |

<a name="CacheManager.delete"></a>

### CacheManager.delete(type, input) ⇒ <code>any</code>
Deletes the input/output pair from the appropriate cache based on the given type.

**Kind**: static method of [<code>CacheManager</code>](#CacheManager)  
**Returns**: <code>any</code> - - The cache object that the pair was deleted from  

| Param | Type | Description |
| --- | --- | --- |
| type | [<code>CacheType</code>](#CacheType) \| <code>string</code> | The type of cache to delete the pair from |
| input | <code>number</code> | The input value of the pair |

<a name="CacheManager.clear"></a>

### CacheManager.clear(type) ⇒ <code>void</code>
Clears the cache for a given trigonometric or logarithmic function.

**Kind**: static method of [<code>CacheManager</code>](#CacheManager)  
**Returns**: <code>void</code> - undefined  

| Param | Type | Description |
| --- | --- | --- |
| type | [<code>CacheType</code>](#CacheType) \| <code>string</code> | A string or CacheEnum representing the function to clear cache for |

<a name="CacheManager.clearAll"></a>

### CacheManager.clearAll() ⇒ <code>void</code>
Clears all cached values

**Kind**: static method of [<code>CacheManager</code>](#CacheManager)  
**Returns**: <code>void</code> - undefined  
