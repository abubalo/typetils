
/**
 * Filter items that satisfies
 * {@type} Filter
 */
export type Filter<T, U> = T extends U ? never : T;

export type Equal<T, U> = T extends U ? (U extends T ? true : false) : false;

export type Expect<Equal extends true> = Equal extends true ? true : never;

export type Not<T extends boolean> = T extends true ? false : true;

export type And<T extends boolean, U extends boolean> = T extends true
  ? U extends true
    ? true
    : false
  : false;

export type Or<T extends boolean, U extends boolean> = T extends true
  ? true
  : U extends true
  ? true
  : false;

export type If<
  Condition extends boolean,
  TrueType,
  FalseType
> = Condition extends true ? TrueType : FalseType;

export type UppercaseKeys<T> = {
  [K in keyof T as Uppercase<string & K>]: T[K];
};

export type LowercaseKeys<T> = {
  [K in keyof T as Lowercase<string & K>]: T[K];
};

export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

export type ValueOf<T> = T[keyof T];

export type Infer<T> = T extends (infer U)[] ? U : T;

export type TypeOf<T extends { [K in keyof T]: T[K] }> = T[keyof T];
export type ElementTypeAtIndex<
  T extends any[],
  Index extends number
> = T[Index];

export type Intersection<T extends any[]> = T extends [infer X, ...infer Rest]
  ? X & Intersection<Rest>
  : unknown;

export type UnionToIntersection<U> = (
  U extends any ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never;

export type DeepPick<T, Path extends string> = Path extends keyof T
  ? { [K in Path]: T[Path] }
  : Path extends `${infer K}.${infer R}`
  ? K extends keyof T
    ? { [Key in K]: DeepPick<T[K], R> }
    : never
  : never;

export type EnumToArray<T extends Record<string, any>> = T[keyof T][];

export type AppendToObjectValues<T, Suffix extends string> = {
  [K in keyof T]: `${T[K]}${Suffix}`;
};

export type UnionToTuple<T> = T extends infer U ? [U] : never;

export type Replace<
  S extends string,
  From extends string,
  To extends string
> = From extends ""
  ? S
  : S extends `${infer L}${From}${infer R}`
  ? `${L}${To}${R}`
  : S;

export type AsyncReturnType<T extends (...args: any[]) => Promise<any>> =
  T extends (...args: any[]) => Promise<infer R> ? R : never;

export type Flatten<T extends any[]> = T extends [infer X, ...infer Rest]
  ? X extends any[]
    ? [...Flatten<X>, ...Flatten<Rest>]
    : [X, ...Flatten<Rest>]
  : [];
export type Mutable<T> = {
  -readonly [K in keyof T]: T[K];
};

export type Trim<S extends string> = S extends
  | `${" " | "\n" | "\t"}${infer R}`
  | `${infer R}${" " | "\n" | "\t"}`
  ? Trim<R>
  : S;

export type PartialKeys<T, K extends keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>;
