
:::caution

This reference has been auto-generated and therefore is not guaranteed to be using the stable release.

:::

<a name="Conversions"></a>

## Conversions
Class for Conversions

**Kind**: global class  

* [Conversions](#Conversions)
    * [.convertAngle(value, fromUnit, toUnit)](#Conversions.convertAngle) ⇒ <code>number</code>
    * [.convertLength(value, fromUnit, toUnit)](#Conversions.convertLength) ⇒ <code>number</code>
    * [.convertTime(value, fromUnit, toUnit)](#Conversions.convertTime) ⇒ <code>number</code>
    * [.convertMass(value, fromUnit, toUnit)](#Conversions.convertMass) ⇒ <code>number</code>
    * [.convertEnergy(value, fromUnit, toUnit)](#Conversions.convertEnergy) ⇒ <code>number</code>
    * [.convertTemperature(value, fromUnit, toUnit)](#Conversions.convertTemperature) ⇒ <code>number</code>
    * [.convertSpeed(value, fromUnit, toUnit)](#Conversions.convertSpeed) ⇒ <code>number</code>
    * [.convertPressure(value, fromUnit, toUnit)](#Conversions.convertPressure) ⇒ <code>number</code>
    * [.convertArea(value, fromUnit, toUnit)](#Conversions.convertArea) ⇒ <code>number</code>
    * [.convertVolume(value, fromUnit, toUnit)](#Conversions.convertVolume) ⇒ <code>number</code>

<a name="Conversions.convertAngle"></a>

### Conversions.convertAngle(value, fromUnit, toUnit) ⇒ <code>number</code>
Converts an angle from one unit to another.

**Kind**: static method of [<code>Conversions</code>](#Conversions)  
**Returns**: <code>number</code> - The converted angle value. 


| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | The value of the angle to convert. |
| fromUnit | <code>AngleType</code> \| <code>string</code> | The unit of the input angle. |
| toUnit | <code>AngleType</code> \| <code>string</code> | The desired unit of the output angle. |

<a name="Conversions.convertLength"></a>

### Conversions.convertLength(value, fromUnit, toUnit) ⇒ <code>number</code>
Converts a length value from one unit to another.

**Kind**: static method of [<code>Conversions</code>](#Conversions)  
**Returns**: <code>number</code> - The converted value.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | The value to convert. |
| fromUnit | <code>LengthType</code> \| <code>string</code> | The unit to convert from. |
| toUnit | <code>LengthType</code> \| <code>string</code> | The unit to convert to. |

<a name="Conversions.convertTime"></a>

### Conversions.convertTime(value, fromUnit, toUnit) ⇒ <code>number</code>
Converts a time value from one unit to another.

**Kind**: static method of [<code>Conversions</code>](#Conversions)  
**Returns**: <code>number</code> - - The converted value in the desired unit.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | The value to convert. |
| fromUnit | <code>TimeType</code> \| <code>string</code> | The unit of the input value. |
| toUnit | <code>TimeType</code> \| <code>string</code> | The desired unit of the output value. |

<a name="Conversions.convertMass"></a>

### Conversions.convertMass(value, fromUnit, toUnit) ⇒ <code>number</code>
Converts a mass value from one unit to another.

**Kind**: static method of [<code>Conversions</code>](#Conversions)  
**Returns**: <code>number</code> - The converted mass value.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | The mass value to be converted. |
| fromUnit | <code>MassType</code> \| <code>string</code> | The unit to convert from. |
| toUnit | <code>MassType</code> \| <code>string</code> | The unit to convert to. |

<a name="Conversions.convertEnergy"></a>

### Conversions.convertEnergy(value, fromUnit, toUnit) ⇒ <code>number</code>
Convert an energy value from one unit to another.

**Kind**: static method of [<code>Conversions</code>](#Conversions)  
**Returns**: <code>number</code> - - the converted energy value  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | the energy value to convert |
| fromUnit | <code>EnergyType</code> \| <code>string</code> | the unit of the input value |
| toUnit | <code>EnergyType</code> \| <code>string</code> | the desired output unit |

<a name="Conversions.convertTemperature"></a>

### Conversions.convertTemperature(value, fromUnit, toUnit) ⇒ <code>number</code>
Converts a temperature value from one unit to another.

**Kind**: static method of [<code>Conversions</code>](#Conversions)  
**Returns**: <code>number</code> - The converted temperature value in the desired unit.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | The temperature value to be converted. |
| fromUnit | <code>TemperatureType</code> \| <code>string</code> | The unit of the input temperature value. |
| toUnit | <code>TemperatureType</code> \| <code>string</code> | The unit of the output temperature value. |

<a name="Conversions.convertSpeed"></a>

### Conversions.convertSpeed(value, fromUnit, toUnit) ⇒ <code>number</code>
Converts a speed value from one unit to another.

**Kind**: static method of [<code>Conversions</code>](#Conversions)  
**Returns**: <code>number</code> - - the converted value  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | the value to be converted |
| fromUnit | <code>SpeedType</code> \| <code>string</code> | the unit to convert from |
| toUnit | <code>SpeedType</code> \| <code>string</code> | the unit to convert to |

<a name="Conversions.convertPressure"></a>

### Conversions.convertPressure(value, fromUnit, toUnit) ⇒ <code>number</code>
Converts a pressure value from one unit to another.

**Kind**: static method of [<code>Conversions</code>](#Conversions)  
**Returns**: <code>number</code> - The converted pressure value.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | The pressure value to convert. |
| fromUnit | [<code>PressureType</code>](#PressureType) \| <code>string</code> | The unit to convert from. |
| toUnit | [<code>PressureType</code>](#PressureType) \| <code>string</code> | The unit to convert to. |

<a name="Conversions.convertArea"></a>

### Conversions.convertArea(value, fromUnit, toUnit) ⇒ <code>number</code>
Converts an area measurement from one unit to another.

**Kind**: static method of [<code>Conversions</code>](#Conversions)  
**Returns**: <code>number</code> - - The numerical value of the converted area measurement in the toUnit.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | The numerical value of the area measurement in the fromUnit. |
| fromUnit | <code>AreaType</code> \| <code>string</code> | The unit to convert from. |
| toUnit | <code>AreaType</code> \| <code>string</code> | The unit to convert to. |

<a name="Conversions.convertVolume"></a>

### Conversions.convertVolume(value, fromUnit, toUnit) ⇒ <code>number</code>
Converts an volume measurement from one unit to another.

**Kind**: static method of [<code>Conversions</code>](#Conversions)  
**Returns**: <code>number</code> - - The numerical value of the converted volume measurement in the toUnit.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | The numerical value of the volume measurement in the fromUnit. |
| fromUnit | <code>VolumeType</code> \| <code>string</code> | The unit to convert from. |
| toUnit | <code>VolumeType</code> \| <code>string</code> | The unit to convert to. |

