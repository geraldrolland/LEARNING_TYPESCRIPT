/***
 * TypeScript Definitely Typed
 */

type CountryCode = `+${string}`

const phoneNum: CountryCode = "+09050894145"

/**
 * Index Signature Labels
Index Signature Labels allows us to label index signatures using computed property names.

It helps in providing more descriptive type information when working with dynamic objects.
 */

type DynamicObj = {[key: `dynamic_${string}`]: string}

const obj: DynamicObj = {
    "dynamic_key": "gerald"
}