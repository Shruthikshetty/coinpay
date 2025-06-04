/**
 * File contains all teh constants used in screens
 */
import OnboardingImg1 from '~/components/svgs/OnboardingImg1';
import OnboardingImg2 from '~/components/svgs/OnboardingImg2';
import OnboardingImg3 from '~/components/svgs/OnboardingImg3';

// symbol for indian rupee
export const RUPEE_SYMBOL = '\u20B9';

export const DEFAULT_TRANSACTION_IMAGE_URI =
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

// image and text to be shown in onboarding screen
export const ONBOARDING_CAROUSAL_CONTENT = [
  {
    img: OnboardingImg1,
    message: 'Trusted by millions of people , part of one',
  },
  {
    img: OnboardingImg2,
    message: 'Spend money abroad , and track your expense',
  },
  {
    img: OnboardingImg3,
    message: 'Receive money from anywhere in the world',
  },
];

// date formats used in the app
export const DATE_FORMAT = {
  YYYY_MM_DD: 'YYYY-MM-DD', // expected stored default
};

// initial data in account setup screen
export const ACCOUNT_SETUP_INITIAL_PROGRESS_DATA = [
  {
    index: 1,
    text: 'Phone Verified',
    loading: false,
  },
  {
    index: 2,
    text: 'Checking up document ID',
    loading: true,
  },
  {
    index: 3,
    text: 'Verifying Photo',
    loading: true,
  },
];
