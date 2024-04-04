[@ringpublishing/accelerator-images](../README.md) / InvalidParameter

# Class: InvalidParameter

Thrown when invalid parameters are provided.

**`Rationale`**

This error indicated that the user provided invalid data. Either the data does not match the expected format or the data is not valid for the operation.

## Hierarchy

- [`AcceleratorImageError`](AcceleratorImageError.md)

  ↳ **`InvalidParameter`**

## Table of contents

### Constructors

- [constructor](InvalidParameter.md#constructor)

### Properties

- [cause](InvalidParameter.md#cause)
- [message](InvalidParameter.md#message)
- [name](InvalidParameter.md#name)
- [stack](InvalidParameter.md#stack)
- [prepareStackTrace](InvalidParameter.md#preparestacktrace)
- [stackTraceLimit](InvalidParameter.md#stacktracelimit)

### Methods

- [captureStackTrace](InvalidParameter.md#capturestacktrace)

## Constructors

### constructor

• **new InvalidParameter**(`message`): [`InvalidParameter`](InvalidParameter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

[`InvalidParameter`](InvalidParameter.md)

#### Overrides

[AcceleratorImageError](AcceleratorImageError.md).[constructor](AcceleratorImageError.md#constructor)

#### Defined in

src/errors/index.ts:30

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

[AcceleratorImageError](AcceleratorImageError.md).[cause](AcceleratorImageError.md#cause)

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:24

___

### message

• **message**: `string`

#### Inherited from

[AcceleratorImageError](AcceleratorImageError.md).[message](AcceleratorImageError.md#message)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1068

___

### name

• **name**: `string`

#### Inherited from

[AcceleratorImageError](AcceleratorImageError.md).[name](AcceleratorImageError.md#name)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1067

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[AcceleratorImageError](AcceleratorImageError.md).[stack](AcceleratorImageError.md#stack)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1069

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Type declaration

▸ (`err`, `stackTraces`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

[AcceleratorImageError](AcceleratorImageError.md).[prepareStackTrace](AcceleratorImageError.md#preparestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:28

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[AcceleratorImageError](AcceleratorImageError.md).[stackTraceLimit](AcceleratorImageError.md#stacktracelimit)

#### Defined in

node_modules/@types/node/globals.d.ts:30

## Methods

### captureStackTrace

▸ **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

[AcceleratorImageError](AcceleratorImageError.md).[captureStackTrace](AcceleratorImageError.md#capturestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:21
