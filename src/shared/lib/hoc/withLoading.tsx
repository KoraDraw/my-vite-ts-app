import type { ComponentType } from "react";

interface WithLoadingProps {
  isLoading?: boolean;
}

type WithoutIsLoading<P> = Omit<P, "isLoading">;

export function withLoading<P extends object>(
  WrappedComponent: ComponentType<P>
): ComponentType<WithoutIsLoading<P> & WithLoadingProps> {
  return ({ isLoading, ...props }: WithLoadingProps & WithoutIsLoading<P>) => {
    if (isLoading) {
      return <div>Загрузка...</div>;
    }
    return <WrappedComponent {...(props as P)} />;
  };
}
