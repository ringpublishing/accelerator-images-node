[@ringpublishing/accelerator-images](../README.md) / AcceleratorImageError

# Class: AcceleratorImageError

General AcceleratorImage error

## Hierarchy

- `Error`

  ↳ **`AcceleratorImageError`**

  ↳↳ [`UrlError`](UrlError.md)

  ↳↳ [`InvalidParameter`](InvalidParameter.md)

  ↳↳ [`InternalError`](InternalError.md)

## Table of contents

### Constructors

- [constructor](AcceleratorImageError.md#constructor)

### Properties

- [cause](AcceleratorImageError.md#cause)
- [message](AcceleratorImageError.md#message)
- [name](AcceleratorImageError.md#name)
- [stack](AcceleratorImageError.md#stack)
- [prepareStackTrace](AcceleratorImageError.md#preparestacktrace)
- [stackTraceLimit](AcceleratorImageError.md#stacktracelimit)

### Methods

- [captureStackTrace](AcceleratorImageError.md#capturestacktrace)

## Constructors

### constructor

• **new AcceleratorImageError**(`message`): [`AcceleratorImageError`](AcceleratorImageError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

[`AcceleratorImageError`](AcceleratorImageError.md)

#### Overrides

Error.constructor

#### Defined in

src/errors/index.ts:7

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

Error.cause

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:24

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1068

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1067

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

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

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:28

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

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

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:21
