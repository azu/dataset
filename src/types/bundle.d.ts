/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type BundleProposals = (IndividualProposal & {
  url?: string;
  pushed_at?: string;
})[];

export interface IndividualProposal {
  /**
   * The tags of proposal
   */
  tags: ("ECMA-262" | "ECMA-402" | "inactive" | "withdrawn" | "archived")[];
  /**
   * The stage number of proposal
   */
  stage: number;
  /**
   * The display name of proposal
   */
  name: string;
  /**
   * The description of proposal
   */
  description?: string;
  /**
   * The codename of proposal
   */
  id?: string;
  /**
   * List of Authour
   */
  authors: string[];
  /**
   * List of Champion
   */
  champions: string[];
  /**
   * List of tc39 notes
   */
  notes?: {
    date: string;
    url: string;
  }[];
  /**
   * List of tc39 tests
   */
  tests?: string[];
  /**
   * Has specification (spec.emu available)
   */
  "has-specification"?: boolean;
  /**
   * Provide example code of tc39.es show code
   */
  snippets?: {
    name: string;
    description?: string;
    "file-path": string;
  }[];
  /**
   * List of polyfill urls
   */
  polyfills?: string[];
  /**
   * List of implementations
   */
  implementations?: unknown[];
  /**
   * inactive proposal rationale (inactive only)
   */
  rationale?: string;
  /**
   * available edition of ECMAScript (stage 4 only)
   */
  edition?: number;
}
