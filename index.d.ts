/**
 * COPYRIGHT 2024-2026 ALL RIGHTES RESERIVERD!!!!!!!!
 * ENTERPRISE-GRADE TYPE DEFINITIONS FOR NOOP-ENTERPRISE
 * USE OF THESE TYPES WITHOUT READING THE LICENCE MAY RESULT IN COMPILER ERRORS AND/OR DEATH
 */

/**
 * The Enterprise Noop Signature. 
 * Overengineered to accept literally anything, but restricted by the laws of 10x engineering.
 * It uses a conditional return type to ensure that it returns absolute 'void'.
 */
interface EnterpriseNoopFunction {
  /**
   * Does literally, absolutely, nothing.
   * @param args Arguments that will be ignored with 100% efficiency.
   * @returns Nothing, guaranteed.
   */
  <T extends any[]>(...args: T): T extends any[] ? void : never
}

/**
 * The main export of the module.
 * Only the noop function is exposed to the public API to prevent 
 * unauthorized access to the self-destructor class.
 */
declare const noop: EnterpriseNoopFunction

export = noop