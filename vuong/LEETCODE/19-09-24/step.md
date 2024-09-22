compute("2*3-4*5")
|
|- Split at index 1 ('*'):
   Left: "2"
   Right: "3-4*5"
   |
   |- compute("2") -> [2]
   |- compute("3-4*5")
      |
      |- Split at index 1 ('-'):
         Left: "3"
         Right: "4*5"
         |
         |- compute("3") -> [3]
         |- compute("4*5")
            |
            |- Split at index 1 ('*'):
               Left: "4"
               Right: "5"
               |
               |- compute("4") -> [4]
               |- compute("5") -> [5]
            |- Combine [4] * [5] -> [20]
         |- Combine [3] - [20] -> [-17]
      |- Split at index 3 ('*'):
         Left: "3-4"
         Right: "5"
         |
         |- compute("3-4")
            |
            |- Split at index 1 ('-'):
               Left: "3"
               Right: "4"
               |
               |- compute("3") -> [3]
               |- compute("4") -> [4]
            |- Combine [3] - [4] -> [-1]
         |- compute("5") -> [5]
         |- Combine [-1] * [5] -> [-5]
      |- Combine results: [-17, -5]
   |- Combine [2] * [-17, -5] -> [-34, -10]

|- Split at index 3 ('-'):
   Left: "2*3"
   Right: "4*5"
   |
   |- compute("2*3")
      |
      |- Split at index 1 ('*'):
         Left: "2"
         Right: "3"
         |
         |- compute("2") -> [2]
         |- compute("3") -> [3]
      |- Combine [2] * [3] -> [6]
   |- compute("4*5") -> [20] (already computed)
   |- Combine [6] - [20] -> [-14]

|- Split at index 5 ('*'):
   Left: "2*3-4"
   Right: "5"
   |
   |- compute("2*3-4")
      |
      |- Split at index 1 ('*'):
         Left: "2"
         Right: "3-4"
         |
         |- compute("2") -> [2]
         |- compute("3-4") -> [-1] (already computed)
         |- Combine [2] * [-1] -> [-2]
      |- Split at index 3 ('-'):
         Left: "2*3"
         Right: "4"
         |
         |- compute("2*3") -> [6] (already computed)
         |- compute("4") -> [4]
         |- Combine [6] - [4] -> [2]
      |- Combine results: [-2, 2]
   |- compute("5") -> [5]
   |- Combine [-2, 2] * [5] -> [-10, 10]

|- Combine all results: [-34, -10, -14, -10, 10]
