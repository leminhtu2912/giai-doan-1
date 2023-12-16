1. Định nghĩa về HTML và CSS
HTML (HyperText Markup Language) : là một ngôn ngữ đánh dấu được thiết kế ra để tạo nên các trang web, nghĩa là các mẩu thông tin được trình bày trên World Wide Web.
CSS (Cascading Style Sheets) : định nghĩa về cách hiển thị của một tài liệu HTML. CSS đặc biệt hữu ích trong việc thiết kế Web. Nó giúp cho người thiết kế dễ dàng áp đặt các phong cách đã được thiết kế lên bất kì page nào của website một cách nhanh chóng, đồng bộ.
2.Cấu trúc cơ bản của HTML
Có thể dùng notepad hoặc text editor để soạn thảo 1 tài liệu HTML. Ta cùng làm 1 ví dụ nhỏ về HTML nhé:
B1: Mở notepad hoặc text editor
B2: Nhập đoạn HTML sau:
<!DOCTYPE html>
<html>
<head>
    <title>Page Title</title>
</head>
<body>
    <h1>My First Heading</h1>
    <p>My first paragraph</p>
</body>
</html>
B3: Save file với định dạng .html hoặc .htm
B4: Thử xem kết quả ra là gì nhé. Bằng cách mở file bằng 1 trình duyệt bất kỳ. Ví dụ: Chrome, IE, Firefox, Safari.
Page sẽ hiển thị như sau:
 
Cấu trúc cơ bản của HTML:
•	Một tài liệu HTML luôn được gói trong cặp tag <html> và </html>
•	Cặp tag <body> và </body> sẽ là nơi mô tả những gì có thể nhìn thấy của trang.
Như vậy, một trang web viết bằng html sẽ có cấu trúc cơ bản như sau:
<html>
   <body>
         Phần trình bày nội dung
   </body>
</html>
Ngoài phần body còn có phần head, được viết bởi cặp tag <head></head>. Nếu bạn sử dụng cặp tag này, bạn bắt buộc phải viết thêm một cặp tag nữa, đó là <title></title>. Giữa <title> và </title> là tên của trang web được hiển thị phía trên cùng của menubar. Như vậy một trang web với lúc này sẽ có cấu trúc như sau:
<head>
    <title>Tiêu đề của trang web</title>
</head>
<body>
    Phần trình bày nội dung
</body>
</html>
3.Các thẻ cơ bản trong HTML
Một tài liệu HTML được tạo nên từ các cặp thẻ html
•	Thẻ được bắt đầu bằng dấu < và kết thúc bằng dấu >
•	Tên thẻ nằm giữa cặp dấu <>
Ví dụ: <a> tức là đang khai báo thẻ a
•	Cặp thẻ được tạo nên từ thẻ mở và thẻ đóng
Ví dụ: <a></a> trong đó <a> là thẻ mở, </a> là thẻ đóng
•	Nội dung của thẻ sẽ được nằm giữa thẻ đóng và thẻ mở
•	Cũng có một số thẻ chỉ có thẻ mở mà không có thẻ đóng.
Ví dụ:<img />, <br />, <hr />
A.Các thẻ tiêu đề (HTML Headings):
•	Thường được sử dụng để thế hiện cho tiêu đề của bài viết, bản tin hay các mục nhấn mạnh
•	Bao gồm các thẻ từ <h1> đến <h6>
•	Font chữ của nội dung trong các thẻ giảm từ <h1> đến <h6>
Ví dụ: nhập đoạn lệnh bên dưới vào trong cặp thẻ <body></body>
`
<h1>Content of tag h1</h1>
<h2>Content of tag h2</h2>
<h3>Content of tag h3</h3>
<h4>Content of tag h4</h4>
<h5>Content of tag h5</h5>
<h6>Content of tag h6</h6>
`
B. Đoạn văn bản trong html (HTML Paragraphs):
•	Nội dung văn bản được thể hiện trong cặp thẻ <p></p>
Ví dụ: nhập đoạn lệnh bên dưới vào trong cặp thẻ <body></body>
<p> Hello, every body !</p>
<p> My name is Ha. Nice to meet you.</p>
Và kết quả là:
 
C. Liên kết (HTML Links):
•	Ta dùng cặp thẻ <a></a> để làm công việc liên kết các trang web với nhau
•	Thuộc tính của thẻ <a> gồm:
•	href: qui định địa chỉ mà url trỏ tới
•	target: qui định liên kết sẽ được mở ra ở đâu
•	 _blank: cửa sổ mới
•	
•	 _self: trang hiện tại
Ví dụ: nhập đoạn lệnh bên dưới vào trong cặp thẻ <body></body>
<a href="https://google.com.vn" target="_blank">Go to google page</a>
Và kết quả là : trang google được mở ra trên 1 cửa sổ mới
D. Xuống dòng (HTML Line Breaks):
•	Ta dùng thẻ <br /> để xuống dòng trong một đoạn văn bản
Ví dụ: nhập đoạn lệnh bên dưới vào trong cặp thẻ <body></body>
<p>Break line <br />in <br />paragraph</p>
E. HTML Lines (<hr />):
•	Ta dùng thẻ <hr /> để tạo một đường kẻ ngang trong trang HTML
Ví dụ: nhập lệnh bên dưới vào trong cặp thẻ <body></body>
</hr>
 F. HTML images (Hình ảnh):
•	Ta dùng thẻ <img> để chèn ảnh vào trang web
•	Thuộc tính của thẻ <img> gồm:
o	src: chỉ ra đường dẫn file ảnh
o	alt: để mô tả nội dung sẽ hiển thị khi đường dẫn tới file ảnh không tồn tại
o	title=”Tiêu đề”: nội dung hiển thị khi đưa trỏ chuột lên hình.
o	width, height: độ rộng và độ cao của file được tính bằng excel, nếu không có width và height thì mặc định sẽ lấy kích thước gốc của file
Ví dụ: nhập đoạn lệnh bên dưới vào trong cặp thẻ <body> </body>
<img src="Exist.jpg" alt=”image ton tai” title=”hello” width="300px" height="150px" />
<img src="NotExist.jpg" alt=”image khong ton tai” width="200px" height="100px" />

G. Các thẻ định dạng text (HTML Text Formatting):
•	<b> (bold): Chữ In đậm
•	<u> (Underline): Chữ gạch chân
•	<i> (italic): Chữ in nghiêng
•	<big> (Big): Chữ lớn hơn
•	<sub> (Subscrip) Chỉ số dưới, ví dụ: H2O
•	<sup> (Superscript): Chỉ số trên, ví dụ: x2y
•	<strong> In đậm (nhấn mạnh <b>)
•	<em>(emphasized): Chữ in nghiêng, Nhấn mạnh hơn <i>
Ví dụ:
<b> This text is bold </b>
<u> This text is underline </u>
<i> This text is italic </i>
<big> This text is big text </big>
<p> H <sub> 2 </sub> O </p>
<p> x<sup> 2</sup> y</p>
<strong> This text is strong </strong>
<em> This text is emphasized </em>

