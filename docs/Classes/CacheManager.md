
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

