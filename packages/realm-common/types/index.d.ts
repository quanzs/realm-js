interface Console {
  error(message?: unknown, ...optionalParams: unknown[]): void;
  log(message?: unknown, ...optionalParams: unknown[]): void;
  warn(message?: unknown, ...optionalParams: unknown[]): void;
}

declare const console: Console;

interface Process {
  env: { NODE_ENV: string | undefined };
}

declare const process: Process;

interface Window {}

declare const window: Window | undefined;

interface Global {
  __DEV__: boolean | undefined;
}

declare const global: Global;

type Require = (id: string) => { app?: { isPackaged: boolean } };

declare const require: Require;
