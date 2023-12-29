# Typetils

Typetils is a versatile collection of TypeScript utility types created to streamline and enhance the development experience. This library contains meticulously crafted utilities specifically tailored to augment TypeScript's inherent capabilities. It's akin to Lodash, but exclusively for types.

Rather than spending excessive time navigating complex type gymnastics, Typetils provides readily available types, allowing you to focus on productivity. With its comprehensive range of types, this library allows developers to efficiently handle type-related tasks, enabling a more streamlined development process.


DeepPartial<T>: It helps create a new type that makes all properties of T optional, even if they're nested within other objects.

UppercaseKeys<T> and LowercaseKeys<T>: These types transform the keys of an object to either uppercase or lowercase, respectively. This can be useful when you need uniformity in the keys or want to ensure consistency.

ValueOf<T>: It extracts the union type of values in an object, which can be particularly useful when dealing with enums or objects with a fixed set of values.

DeepPick<T, Path>: It allows you to deeply pick nested properties within an object based on a given string path.

EnumToArray<T>: This type converts enum values into an array, which can be helpful for iteration or handling enum values more dynamically.

AppendToObjectValues<T, Suffix>: It appends a suffix to all values within an object, which might be helpful for certain data formatting tasks.

Replace<S, From, To>: It replaces occurrences of a substring in a string type.

Flatten<T>: It flattens nested arrays into a single array, which can be quite handy in various scenarios.

Mutable<T>: It removes the readonly modifier from all properties of an object type, allowing mutation of those properties.

Trim<S>: It trims leading and trailing spaces, tabs, and newlines from a string type.