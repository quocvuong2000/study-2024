/*
  ### Bài 6. Filter array theo điều kiện

  Sửa hàm **queryCars** sao cho từ danh sách xe hơi (cars) chuyền vào kết quả trả về là một array chứa những xe hơi thỏa điều kiện và có giới hạn theo pageIndex.

  **Inputs:**

  - cars: một array các object, mỗi object có nhiều thuộc tính, id, brandId, name, price, vd:[{id: 1, brandId, 2, name: 'Innova', price: 5200},{id: 2, brandId, 2, name: 'Civic', price: 7000},{id: 3, brandId, 3, name: 'Fortuner', price: 9000},{id: 4, brandId, 4, name: 'City', price: 6500}]

  - brandId: một số nguyên, có thể null, dùng để lọc từ input cars có brandId bằng với input này. Nếu input này khác null, kết quả trả về chỉ bao gồm những xe hơi (car) có brandId bằng với giá trị này

  - name: một chuỗi string, có thể null, vd "Toyo", "tuner". Dùng để lọc từ input cars những car có name chứa parameter này (không phân biệt hoa thường), vd giá trị là "in" thì kết quả trả về có car tên là Innova, giá trị này là "ci" thì kết quả có hai cars là Civic và City.

  - minPrice: một số nguyên, nếu parameter này khác null, kết quả trả về chỉ bao gồm những car có giá (price) lớn hơn hoặc bằng parameter này.

  - maxPrice: nếu paramater này khác null, kết quả trả về chỉ bao gồm những car có giá (price) nhỏ hơn hoặc bằng parameter này.

  - pageIndex: Phân trang kết quả sau khi lọc theo các điều kiện trên, mỗi trang gồm 5 cars. Trong đó, pageIndex là số trangLưu ý:pageIndex bắt đầu từ 0.Nếu pageIndex NULL, trả về tất cả kết quả.vd1: pageIndex = 0 nghĩa là trả về 5 phần tử đầu tiên.vd2: pageIndex = 2 nghĩa là nghĩa là trả về 5 phần tử sau 10 phần tử đầu tiên.vd3: pageIndex NULL trả về tất cả các kết quả.

  - Nếu có nhiều hơn 1 điều kiện, phải lọc theo đủ các điều kiện

  **Kết quả mong muốn:** array của các objects car giống với các object trong array cars input nhưng thỏa các điều kiện lọc và phân trang trên.
*/