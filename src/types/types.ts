/**
 * This file contains types.
 * Any types that are unclear where to place can be added here.
 */

import {Languages} from '~/common/constants/language.constants';

// export the language types
export type LanguageKey = keyof typeof Languages;

//validation error (400)
export type ApiValidationError = {
  message: string;
  error?: {
    location: string;
    msg: string;
    path: string;
    type: string;
    value: string;
  }[];
  statusCode?: string;
};
