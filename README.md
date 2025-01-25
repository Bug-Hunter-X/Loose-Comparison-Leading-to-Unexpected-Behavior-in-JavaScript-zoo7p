# Loose Comparison Bug in JavaScript

This repository demonstrates a common yet subtle bug in JavaScript related to loose comparison (==) within conditional statements. The bug arises when attempting to distinguish between null, undefined, and other falsy values.

## The Bug
The `foo` function aims to return specific strings for null and undefined inputs, and the input otherwise. However, loose comparison can lead to unexpected results when values such as 0 or false are passed in.  These values are falsy and will be mistakenly treated as null or undefined due to loose comparison.

## The Solution
The solution involves using strict equality (===) instead of loose equality (==) to ensure accurate type checking. This prevents unintended behavior caused by the falsy values.