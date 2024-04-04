[@ringpublishing/accelerator-images](../README.md) / UrlError

# Class: UrlError

Thrown when an incorrect URL is provided.

## Hierarchy

- [`AcceleratorImageError`](AcceleratorImageError.md)

  ↳ **`UrlError`**

## Table of contents

### Constructors

- [constructor](UrlError.md#constructor)

### Properties

- [cause](UrlError.md#cause)
- [message](UrlError.md#message)
- [name](UrlError.md#name)
- [stack](UrlError.md#stack)
- [prepareStackTrace](UrlError.md#preparestacktrace)
- [stackTraceLimit](UrlError.md#stacktracelimit)

### Methods

- [captureStackTrace](UrlError.md#capturestacktrace)

## Constructors

### constructor

• **new UrlError**(`message`): [`UrlError`](UrlError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

[`UrlError`](UrlError.md)

#### Overrides

[AcceleratorImageError](AcceleratorImageError.md).[constructor](AcceleratorImageError.md#constructor)

#### Defined in

src/errors/index.ts:17

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
