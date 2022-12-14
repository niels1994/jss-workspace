[@sitecore-jss/sitecore-jss-angular](../README.md) / GenericLinkDirective

# Class: GenericLinkDirective

## Hierarchy

- [`LinkDirective`](LinkDirective.md)

  ↳ **`GenericLinkDirective`**

## Table of contents

### Constructors

- [constructor](GenericLinkDirective.md#constructor)

### Properties

- [attrs](GenericLinkDirective.md#attrs)
- [editable](GenericLinkDirective.md#editable)
- [extras](GenericLinkDirective.md#extras)
- [field](GenericLinkDirective.md#field)
- [renderer](GenericLinkDirective.md#renderer)
- [templateRef](GenericLinkDirective.md#templateref)
- [viewContainer](GenericLinkDirective.md#viewcontainer)

### Methods

- [isAbsoluteUrl](GenericLinkDirective.md#isabsoluteurl)
- [ngOnChanges](GenericLinkDirective.md#ngonchanges)
- [renderTemplate](GenericLinkDirective.md#rendertemplate)

## Constructors

### constructor

• **new GenericLinkDirective**(`viewContainer`, `templateRef`, `renderer`, `elementRef`, `router`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `viewContainer` | `ViewContainerRef` |
| `templateRef` | `TemplateRef`<`unknown`\> |
| `renderer` | `Renderer2` |
| `elementRef` | `ElementRef`<`any`\> |
| `router` | `Router` |

#### Overrides

[LinkDirective](LinkDirective.md).[constructor](LinkDirective.md#constructor)

#### Defined in

[sitecore-jss-angular/src/components/generic-link.directive.ts:23](https://github.com/Sitecore/jss/blob/4cefcb5a/packages/sitecore-jss-angular/src/components/generic-link.directive.ts#L23)

## Properties

### attrs

• **attrs**: `Object` = `{}`

#### Index signature

▪ [key: `string`]: `string`

#### Overrides

[LinkDirective](LinkDirective.md).[attrs](LinkDirective.md#attrs)

#### Defined in

[sitecore-jss-angular/src/components/generic-link.directive.ts:17](https://github.com/Sitecore/jss/blob/4cefcb5a/packages/sitecore-jss-angular/src/components/generic-link.directive.ts#L17)

___

### editable

• **editable**: `boolean` = `true`

#### Overrides

[LinkDirective](LinkDirective.md).[editable](LinkDirective.md#editable)

#### Defined in

[sitecore-jss-angular/src/components/generic-link.directive.ts:15](https://github.com/Sitecore/jss/blob/4cefcb5a/packages/sitecore-jss-angular/src/components/generic-link.directive.ts#L15)

___

### extras

• `Optional` **extras**: `NavigationExtras`

#### Defined in

[sitecore-jss-angular/src/components/generic-link.directive.ts:21](https://github.com/Sitecore/jss/blob/4cefcb5a/packages/sitecore-jss-angular/src/components/generic-link.directive.ts#L21)

___

### field

• **field**: [`LinkField`](../interfaces/LinkField.md)

#### Overrides

[LinkDirective](LinkDirective.md).[field](LinkDirective.md#field)

#### Defined in

[sitecore-jss-angular/src/components/generic-link.directive.ts:19](https://github.com/Sitecore/jss/blob/4cefcb5a/packages/sitecore-jss-angular/src/components/generic-link.directive.ts#L19)

___

### renderer

• `Protected` **renderer**: `Renderer2`

#### Inherited from

[LinkDirective](LinkDirective.md).[renderer](LinkDirective.md#renderer)

___

### templateRef

• `Protected` **templateRef**: `TemplateRef`<`unknown`\>

#### Inherited from

[LinkDirective](LinkDirective.md).[templateRef](LinkDirective.md#templateref)

___

### viewContainer

• `Protected` **viewContainer**: `ViewContainerRef`

#### Inherited from

[LinkDirective](LinkDirective.md).[viewContainer](LinkDirective.md#viewcontainer)

## Methods

### isAbsoluteUrl

▸ `Private` **isAbsoluteUrl**(`url?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url?` | `unknown` |

#### Returns

`boolean`

#### Defined in

[sitecore-jss-angular/src/components/generic-link.directive.ts:56](https://github.com/Sitecore/jss/blob/4cefcb5a/packages/sitecore-jss-angular/src/components/generic-link.directive.ts#L56)

___

### ngOnChanges

▸ **ngOnChanges**(`changes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `changes` | `SimpleChanges` |

#### Returns

`void`

#### Inherited from

[LinkDirective](LinkDirective.md).[ngOnChanges](LinkDirective.md#ngonchanges)

#### Defined in

[sitecore-jss-angular/src/components/link.directive.ts:30](https://github.com/Sitecore/jss/blob/4cefcb5a/packages/sitecore-jss-angular/src/components/link.directive.ts#L30)

___

### renderTemplate

▸ `Protected` **renderTemplate**(`props`, `linkText`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `linkText` | `string` |

#### Returns

`void`

#### Overrides

[LinkDirective](LinkDirective.md).[renderTemplate](LinkDirective.md#rendertemplate)

#### Defined in

[sitecore-jss-angular/src/components/generic-link.directive.ts:33](https://github.com/Sitecore/jss/blob/4cefcb5a/packages/sitecore-jss-angular/src/components/generic-link.directive.ts#L33)
