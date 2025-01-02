# Unexpected Route Matching in React Router Dom v6

This repository demonstrates a common issue encountered when using React Router Dom v6: unexpected route matching.  The problem arises when a URL path segment is missing, resulting in incorrect route rendering.  The solution involves using the `useSearchParams` hook to gracefully handle missing parameters or using the `*` wildcard to match any remaining path segments.

## Issue
When navigating to a path that contains extra segments beyond those defined in your `Routes`, React Router might not behave as expected. In this example, navigating to `/about/extra` when only `/about` is defined will incorrectly render the `/about` component instead of showing a 404 or handling the invalid route in another manner. 

## Solution
The provided solution uses the `useSearchParams` hook to gracefully handle missing parameters. This allows the `/about` component to render correctly even if extra parameters are present in the URL.