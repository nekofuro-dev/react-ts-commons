import {
  ComponentPropsWithRef,
  ElementType,
  FC,
  PropsWithChildren,
} from 'react';

export type FCWithChild<T = Record<string, unknown>> = FC<
  T & PropsWithChildren
>;

export type FCWithProps<
  T extends ElementType,
  K = Record<string, unknown>,
> = FC<ComponentPropsWithRef<T> & K>;
