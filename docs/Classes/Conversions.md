<a name="Conversions"></a>

## Conversions
Class containing all conversions.

**Kind**: global class  

* [Conversions](#Conversions)
    * [.convertLength(value, fromUnit, toUnit)](#Conversions.convertLength) ⇒ <code>number</code>
    * [.convertTemperature(value, fromUnit, toUnit)](#Conversions.convertTemperature) ⇒ <code>number</code>
    * [.convertAngle(value, fromUnit, toUnit)](#Conversions.convertAngle) ⇒ <code>number</code>
    * [.convertMass(value, fromUnit, toUnit)](#Conversions.convertMass) ⇒ <code>number</code>

<a name="Conversions.convertLength"></a>

### Conversions.convertLength(value, fromUnit, toUnit) ⇒ <code>number</code>
Converts a length value from one unit to another.

**Kind**: static method of [<code>Conversions</code>](#Conversions)  
**Returns**: <code>number</code> - - The converted value.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | The value to be converted. |
| fromUnit | <code>LengthType</code> \| <code>string</code> | The unit to convert from. |
| toUnit | <code>LengthType</code> \| <code>string</code> | The unit to convert to. |

<a name="Conversions.convertTemperature"></a>

### Conversions.convertTemperature(value, fromUnit, toUnit) ⇒ <code>number</code>
Converts a temperature value from one unit to another.

**Kind**: static method of [<code>Conversions</code>](#Conversions)  
**Returns**: <code>number</code> - The temperature value converted to the desired unit.  
**Throws**:

- <code>Error</code> Unknown unit: fromUnit or toUnit, if the unit is not recognized.


| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | The temperature value to convert. |
| fromUnit | <code>TemperatureType</code> \| <code>string</code> | The unit of the input value. |
| toUnit | <code>TemperatureType</code> \| <code>string</code> | The desired output unit. |

<a name="Conversions.convertAngle"></a>

### Conversions.convertAngle(value, fromUnit, toUnit) ⇒ <code>number</code>
Converts an angle value from one unit of measurement to another.

**Kind**: static method of [<code>Conversions</code>](#Conversions)  
**Returns**: <code>number</code> - The value of the input angle converted to the specified unit of measurement.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | The value of the angle to be converted. |
| fromUnit | <code>AngleType</code> \| <code>string</code> | The unit of measurement of the input angle. |
| toUnit | <code>AngleType</code> \| <code>string</code> | The unit of measurement to which the angle needs to be converted. |

<a name="Conversions.convertMass"></a>

### Conversions.convertMass(value, fromUnit, toUnit) ⇒ <code>number</code>
Converts a mass value from one unit to another.

**Kind**: static method of [<code>Conversions</code>](#Conversions)  
**Returns**: <code>number</code> - The converted value.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | The value to be converted. |
| fromUnit | <code>MassType</code> \| <code>string</code> | The unit to convert from. |
| toUnit | <code>MassType</code> \| <code>string</code> | The unit to convert to. |

