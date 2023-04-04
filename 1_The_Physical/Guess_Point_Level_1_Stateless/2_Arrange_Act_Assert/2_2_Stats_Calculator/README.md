# Stats Calculator (#statsCalculator)

> Your task is to process a sequence of integer numbers to determine the following statistics:

> Without using system Math library functions, process a sequence of integers to determine the following statistics:

minimum value
maximum value
number of elements in the sequence
average value

> For example: [2, 4, 21, -8, 53, 40]

minimum value = -8
maximum value = 53
number of elements in the sequence = 6
average value = 18.666666666667

## Getting started

To set up the project, run the following command:

```bash
npm run install
```

## To run the tests in development mode

To run the tests and have them reload when you save, run the following command:

```bash
npm run test:dev
```

## Facts
Should determine minimum value for a sequence of integers
  - Works for sequences that contain zeros
  - Works for sequences that contain negative numbers
  - Works for sequences that contain positive numbers
  - Works for sequences that contain both positive and negative numbers
  - Works for sequences that contain zero and negative numbers
  - Works for sequences that contain zero and positive numbers
  - Works for sequences that contain zero, positive and negative numbers
  - Works for sequences that contain one element
Should determine maximum value
  - Works for sequences that contain zeros
  - Works for sequences that contain negative numbers
  - Works for sequences that contain positive numbers
  - Works for sequences that contain both positive and negative numbers
  - Works for sequences that contain zero and negative numbers
  - Works for sequences that contain zero and positive numbers
  - Works for sequences that contain zero, positive and negative numbers
  - Works for sequences that contain one element
Should determine number of elements in the sequence
Should determine average value
Should throw an error if the sequence is empty