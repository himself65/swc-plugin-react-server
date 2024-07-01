/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export interface ValidateResult {
  isClientEntry: boolean
  isServerAction: boolean
  error?: RSCError
  imports: Array<ModuleImports>
}
export const enum RSCError {
  CannotUseBothClientAndServer = 0,
  ServerActionMustBeAsync = 1
}
export interface ModuleImports {
  name: string
}
export function validate(filePath: string): Promise<ValidateResult>
export function reactServerAction(filePath: string, actionExportPrefix: string, isServerLayer: boolean): Promise<string>
export interface Comment {
  start: number
  end: number
  text: string
}
export function shit(): void
