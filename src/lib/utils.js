// This file contains utility functions for the application
import { clsx } from 'clsx';
// clsx is a utility for constructing className strings conditionally
import { twMerge } from 'tailwind-merge';
// This utility function merges class names and handles conflicts
export const cn = (...inputs) => {
    return twMerge(clsx(inputs))

};