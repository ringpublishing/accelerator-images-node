[@ringpublishing/accelerator-images](../README.md) / InternalError

# Class: InternalError

Thrown when an internal error occurs.

**`Rationale`**

This error indicates that something went wrong internally. This could be due to a bug in the code or an unexpected condition.

## Hierarchy

- [`AcceleratorImageError`](AcceleratorImageError.md)

  ↳ **`InternalError`**

## Table of contents

### Constructors

- [constructor](InternalError.md#constructor)

### Properties

- [cause](InternalError.md#cause)
- [message](InternalError.md#message)
- [name](InternalError.md#name)
- [stack](InternalError.md#stack)
- [prepareStackTrace](InternalError.md#preparestacktrace)
- [stackTraceLimit](InternalError.md#stacktracelimit)

### Methods

- [captureStackTrace](InternalError.md#capturestacktrace)

## Constructors

### constructor

• **new InternalError**(`message`): [`InternalError`](InternalError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

[`InternalError`](InternalError.md)

#### Overrides

[AcceleratorImageError](AcceleratorImageError.md).[constructor](AcceleratorImageError.md#constructor)

#### Defined in

src/errors/index.ts:42

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
