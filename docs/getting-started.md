# Hướng dẫn làm website todo-app bằng nextjs

## Khởi tạo dự án

Mở terminal lên ngay thư mục bạn muốn tạo dự án.
Dùng `npx` tạo một dự án nextjs (version 13.4.1) bằng lệnh sau `npx create-next-app@^13.4.1`
Sau đó bổ sung thêm tên dự án và các thông tin khác như sau:

```
npx create-next-app@^13.4.1
√ What is your project named? ... todoapp
√ Would you like to use TypeScript with this project? ... No / Yes
√ Would you like to use ESLint with this project? ... No / Yes
√ Would you like to use Tailwind CSS with this project? ... No / Yes
√ Would you like to use `src/` directory with this project? ... No / Yes
√ Use App Router (recommended)? ... No / Yes
√ Would you like to customize the default import alias? ... No / Yes
```

Nếu thấy dòng chữ `Success! Created <tên dự án> at...` thì bạn đã cài đặt thành công rồi đó!

## Setup thư viện

Chúng ta sẽ cài đặt các thư viện hỗ trợ với npm như sau:

```dependency
npm install @flaticon/flaticon-uicons@latest axios@^1.6.2 react-hook-form@^7.48.2 sonner@^1.2.2 yup@^1.3.2 sharp@latest --save

```

Và sau đó, cài đặt các devDependencies bằng câu lệnh sau:

```devDependency
npm install axios-mock-adapter@^1.22.0 sass@^1.69.5 --save-dev

```

## Chạy app

Navigate tới thư mục của dự án bằng: `cd <tên dự án>` ví dụ `cd todoapp`
Nếu là development, chạy `npm run dev`
Để build dự án, chạy `npm run build`

## Setup cấu trúc thư mục

1. Tạo 1 thư mục assets trong public để chứa các file tĩnh như hình ảnh, font chữ, ...v.v...
2. src là thư mục chính của dự án để làm việc. Trong src có 1 folder con là src/app, router của nextjs sẽ phụ thuộc vào
   file system của thư mục này.
3. SSR: Tất cả file nằm trong app đều mặc định là SSR, nếu muốn nó là CSR để sử dụng những cái như hook, modules thì phải
   thêm tag 'use client' lên đầu file (trên import).
4. Trong `/src` tạo các thư mục như sau:
   - components: theo atom design, nhằm tạo các component riêng biệt và dễ tái sử dụng.
   - utils: Chứa các helper và validator. Trong validator có 1 thư mục là `/yup` là nơi cấu hình Yup cho việc validation.
5. Tạo 1 route mặc định (route '/') bằng group như sau: Tạo 1 folder `(default)` bên trong app, tạo 1 file `page.tsx` trong
   `(default)`. File `page.tsx` được xem như file `index.tsx`.
   Okay tạm thời là thế đã, giờ hãy dùng kiến thức HTML CSS (tailwind css) để tạo nên 1 UI cơ bản nào.
