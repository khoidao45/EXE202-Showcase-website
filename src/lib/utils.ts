import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ==== Quiz Map constants ====
export type RiddleQuestion = {
  id: string;
  prompt: string; // câu đố hiển thị
  answer: string; // đáp án chuẩn hóa, không dấu, không khoảng trắng, upper-case
  label: string; // label hiển thị
  video: string; // video url
  heading1: string; // heading hiển thị
  heading2: string; // heading hiển thị
  heading3: string; // heading hiển thị
  heading4: string; // heading hiển thị
  heading5: string; // heading hiển thị
  heading6: string; // heading hiển thị
  heading7: string; // heading hiển thị
  heading8: string; // heading hiển thị
  image5: string; // image url
  description5: string; // description hiển thị
  image6: string; // image url
  description6: string; // description hiển thị
  image7: string; // image url
  description7: string; // description hiển thị
  image8: string; // image url
  description8: string; // description hiển thị
  image1: string; // image url
  description1: string; // description hiển thị
  image2: string; // icon url
  description2: string; 
  image3: string; // image url
  description3: string; // description hiển thị
  image4: string; // image url
  description4: string; // description hiển thị
};

export type MapLocation = {
  id: string;
  name: string;
  province: string;
  position: { x: number; y: number }; // Phần trăm trên bản đồ
  
  riddle: RiddleQuestion;
};

export const VIETNAM_LOCATIONS: MapLocation[] = [
   {
    id: "battrang",
    name: "Bát Tràng",
    province: "Gia Lâm, Hà Nội",
    position: { x: 52, y: 20 },
    riddle: {
      id: "battrang-riddle",
      prompt: "Tôi là 1 làng nghề ở miền bắc ......",
      answer: "BATTRANG",
      label: "Làng Gốm Bát Tràng",
      video: "https://www.youtube.com/embed/zigNy0K4juo?si=c7S-HaTX9KSlpvlo",
      image1: "/images/gombattrang1.png",
      description1: `Cách trung tâm Hà Nội khoảng mười cây số về phía đông nam, bên bờ sông Hồng đỏ nặng phù sa, làng Bát Tràng đã tồn tại hơn năm thế kỷ như một biểu tượng của nghề gốm Việt Nam.

Tên gọi “Bát Tràng” ghép từ “Bát” – đồ gốm, và “Tràng” – nơi sản xuất, phản ánh đúng linh hồn của vùng đất này: một ngôi làng được sinh ra để làm gốm, sống bằng gốm và kể chuyện bằng gốm.

Bát Tràng không chỉ nổi tiếng bởi những sản phẩm tinh xảo, mà còn là một không gian văn hóa sống động, nơi quá khứ và hiện tại vẫn song hành. Ở đây, ta có thể nghe thấy tiếng bàn xoay quay đều, mùi đất sét ẩm sau cơn mưa, và ánh lửa nung phản chiếu trong đôi mắt người thợ.`,
      image2: "/images/gombattrang2.png",
      description2: `Theo sử liệu, nghề gốm Bát Tràng ra đời vào khoảng thế kỷ XV, thời Lý. Khi ấy, một nhóm nghệ nhân gốm từ làng Bồ Bát (Ninh Bình ngày nay) di cư ra Bắc, nhận thấy vùng đất ven sông Hồng có nguồn đất sét trắng dẻo, thích hợp cho nghề gốm, họ lập làng và đặt tên là “Bát Tràng”.

Từ đó, ngọn lửa nghề được truyền qua nhiều thế hệ. Dưới triều Lê – Nguyễn, sản phẩm gốm Bát Tràng được dùng trong cung đình, xuất khẩu sang Trung Hoa, Nhật Bản và châu Âu. Mỗi triều đại đi qua đều để lại dấu ấn trên sắc men, hoa văn và kiểu dáng của gốm.

Chiến tranh và thời kỳ công nghiệp hóa từng khiến nghề gốm suy yếu, nhiều lò nung bị bỏ hoang. Nhưng cuối thế kỷ XX, khi phong trào phục hồi làng nghề lan rộng, Bát Tràng lại được “thắp lửa”, vừa gìn giữ kỹ thuật truyền thống, vừa đón nhận công nghệ và tư duy mới. Ngày nay, Bát Tràng không chỉ là nơi sản xuất gốm mà còn là điểm đến văn hóa – du lịch, một “trường học mở” về nghề thủ công Việt Nam.`,
      image3: "/images/gombattrang3.png",
      description3: `Nói về Bát Tràng, không thể không nhắc đến nghệ thuật men và bàn tay người thợ.

Đất ở đây được chọn từ những vùng ven sông Hồng, Sơn Tây, Phúc Yên. Sau khi khai thác, đất được ngâm ủ, lọc sạch tạp chất, rồi nhào kỹ đến khi đạt độ dẻo hoàn hảo.

Từ khối đất tưởng chừng vô tri, người thợ dùng bàn xoay tạo dáng, phơi khô, phủ men và nung ở nhiệt độ hơn 1.200 độ C.

Điều đặc biệt là mỗi nghệ nhân có “ngôn ngữ men” riêng: men lam, men ngọc, men rạn, men da lươn…

Men lam là màu xanh trầm tĩnh, như dòng sông mùa thu.
Men rạn là vết nứt của thời gian, tượng trưng cho sự cổ kính và nhẫn nại.
Men ngọc trong trẻo, ánh lên sắc xanh ngà, gợi vẻ sang trọng tinh khiết.

Những hoa văn quen thuộc như rồng phượng, sen, hạc, sóng nước, hay cảnh sinh hoạt thường ngày… đều được vẽ tay, khắc chạm hoặc dát vàng 24K, mang lại chiều sâu cho từng tác phẩm.

Có nghệ nhân nói: “Làm gốm là đối thoại với đất. Nếu hiểu được đất, ta sẽ hiểu chính mình.”`,
      image4: "/images/gombattrang4.png",
      description4: `Một sản phẩm gốm Bát Tràng được tạo thành qua nhiều công đoạn công phu:

- Chọn và xử lý đất sét – ngâm, lọc, phơi, nhào.
- Tạo hình – vuốt tay, đổ khuôn hoặc ép khuôn, tùy loại sản phẩm.
- Phơi và sơ nung – phơi khô tự nhiên hoặc sấy, sau đó nung lần đầu ở nhiệt độ thấp để định hình.
- Trang trí và phủ men – vẽ, chạm, đắp nổi, phủ men đặc trưng.
- Nung lần cuối – nhiệt độ trên 1.200°C trong lò củi hoặc lò gas.
- Hoàn thiện – kiểm tra, mài, lau, đóng gói.

Kỹ thuật men rạn và vẽ tay bằng bút lông là hai nét đặc trưng nhất của Bát Tràng. Chính sự thủ công tỉ mỉ này tạo nên giá trị bền lâu mà công nghệ hiện đại khó thay thế.`,
      image5: "/images/battrang.png",
      description5: `Từ đồ gia dụng truyền thống như bát, đĩa, bình, chum, đến gốm mỹ nghệ, tranh gốm, quà tặng phong thủy, sản phẩm Bát Tràng ngày nay đã mở rộng và mang tinh thần đương đại.

Nhiều nghệ nhân trẻ kết hợp gốm với thiết kế nội thất, ánh sáng, thậm chí âm nhạc – tạo ra những “tác phẩm sống” vừa mang giá trị thẩm mỹ, vừa ứng dụng được trong không gian hiện đại.

Những thương hiệu tiêu biểu như Gốm Mộc, Gốm Tâm Linh, Gốm Hoàng Gia vẫn trung thành với phương pháp thủ công, đồng thời thử nghiệm những dòng men mới thân thiện môi trường.

Bát Tràng hiện có hàng chục sản phẩm đạt chứng nhận OCOP và xuất khẩu sang Nhật, Hàn Quốc, châu Âu.`,
      image6: "/images/battrang.png",
      description6: `Ngày nay, Bát Tràng trở thành điểm đến giáo dục trải nghiệm quen thuộc của học sinh, sinh viên, du khách quốc tế.

Người đến đây không chỉ tham quan mà còn được “chạm” vào nghề:
- Tự tay nặn gốm, vẽ hoa văn, làm tranh gốm trong các lớp workshop ngắn.
- Tham quan Bảo tàng Gốm Bát Tràng – công trình xoắn ốc độc đáo trưng bày hàng trăm hiện vật cổ.
- Gặp gỡ nghệ nhân, nghe họ kể chuyện về nghề, về đất, về ngọn lửa chưa từng tắt.

Những chuyến đi ấy giúp người trẻ hiểu hơn về sự kiên nhẫn, tinh tế và lao động sáng tạo – những giá trị làm nên văn hóa Việt.`,
      image7: "/images/battrang.png",
      description7: `Bát Tràng hiện đối mặt với nhiều thách thức: ô nhiễm từ lò nung cũ, thiếu nhân lực trẻ, cạnh tranh từ gốm công nghiệp.

Tuy nhiên, nhiều chương trình đang được triển khai:
- Ứng dụng lò nung điện, công nghệ xanh để giảm phát thải.
- Đào tạo nghề cho thanh thiếu niên tại địa phương và trường mỹ thuật.
- Số hóa mẫu gốm cổ, quảng bá qua triển lãm ảo, website và mạng xã hội.
- Gắn làng nghề với du lịch bền vững, để mỗi chuyến đi trở thành một bài học văn hóa.

Bát Tràng hôm nay không chỉ bảo tồn di sản, mà đang tự đổi mới để tồn tại cùng thời đại. Ngọn lửa trong những lò gốm cũ vẫn cháy – nhưng không chỉ để nung đất, mà còn để giữ sáng ký ức về một nghề.`,
      image8: "/images/battrang.png",
      description8: `Từ đất và lửa, người thợ Bát Tràng đã tạo nên thứ bền vững hơn cả vật chất: một di sản sống.

Gốm Bát Tràng không chỉ là sản phẩm thủ công, mà là một minh chứng cho khả năng sáng tạo, cho sự kết nối giữa con người và thiên nhiên, giữa quá khứ và hiện tại.

Khi bàn tay con người chạm vào đất, đó không chỉ là nghề – mà là cách người Việt kể lại câu chuyện về chính mình.`,
      heading1: "Giới Thiệu",
      heading2: "Lịch sử hình thành và phát triển",
      heading3: "Nghệ thuật và kỹ thuật chế tác",
      heading4: "Sản phẩm và sáng tạo hiện nay",
      heading5: "Nghệ nhân và cộng đồng",
      heading6: "Giáo dục và trải nghiệm",
      heading7: "Bảo tồn và phát triển",
      heading8: "Kết luận",
    },
  },
  {
    id: "dongho",
    name: "Đông Hồ",
    province: "Tiên Du, Bắc Ninh",
    position: { x: 57, y: 17 },
    riddle: {
      id: "dongho-riddle",
      prompt: "Làng tranh cổ truyền ......",
      answer: "DONGHO",
      label: "Làng Tranh Đông Hồ",
      video: "https://www.youtube.com/embed/QrCEjzkljWI?si=w9iV3H4JnMQ-AGod",
      image1: "/images/tranhdongho1.png",
      description1: `Nằm bên dòng sông Đuống hiền hòa, thuộc xã Song Hồ, huyện Thuận Thành, tỉnh Bắc Ninh, làng tranh Đông Hồ đã tồn tại hơn 500 năm như một biểu tượng đặc sắc của mỹ thuật dân gian Việt Nam. Đây là nơi nghệ thuật hội họa bình dân được kết tinh từ chất liệu thiên nhiên, tâm hồn người nông dân và trí tuệ dân tộc, trở thành di sản văn hóa phi vật thể quý giá của vùng Kinh Bắc.`,
      image2: "/images/tranhdongho2.png",
      description2: `Theo các tư liệu cổ, nghề làm tranh tại Đông Hồ xuất hiện từ thời Lê sơ (thế kỷ XVI). Ban đầu, tranh được làm để trang trí trong dịp Tết Nguyên Đán, với mong ước mang lại may mắn, bình an, phú quý cho năm mới.

Vào thế kỷ XVII – XVIII, khi kỹ thuật in khắc gỗ phát triển, tranh Đông Hồ đạt đến thời kỳ hưng thịnh: hầu như mỗi gia đình trong làng đều tham gia vào công đoạn nào đó – từ khắc bản, in màu, đến phơi giấy. Từ “làng tranh” nhỏ bên sông Đuống, sản phẩm Đông Hồ đã theo chân người buôn đi khắp Bắc Bộ, trở thành hình ảnh quen thuộc trong đời sống người Việt cổ.`,
      image3: "/images/tranhdongho1.png",
      description3: `Tranh Đông Hồ được làm hoàn toàn thủ công. Giấy in là giấy dó, được quét một lớp điệp – bột vỏ sò nghiền mịn trộn với hồ nếp – tạo nên sắc nền trắng óng ánh như phủ sương. Màu tranh đều lấy từ thiên nhiên: đỏ từ sỏi son, vàng từ hoa hòe, xanh từ lá chàm, đen từ than lá tre.

Bản khắc gỗ thị được chạm thủ công, mỗi tấm là một khuôn in cho từng màu. Người thợ in lần lượt từng bản, canh đúng vị trí, để tạo thành bức tranh hoàn chỉnh. Tranh Đông Hồ đặc biệt ở chỗ vừa giản dị, vừa hàm chứa triết lý dân gian: nét khắc không cầu kỳ nhưng mạnh mẽ, màu sắc tươi sáng mà có chiều sâu.`,
      image4: "/images/tranhdongho1.png",
      description4: `Tranh Đông Hồ chia làm nhiều đề tài:
- Tranh Tết: “Gà đại cát”, “Lợn âm dương”, “Vinh hoa – Phú quý”.
- Tranh lịch sử – giáo dục: “Trạng Quỳnh”, “Thầy đồ cóc”.
- Tranh sinh hoạt – châm biếm: “Đánh ghen”, “Hứng dừa”, “Đấu vật”.

Mỗi bức tranh không chỉ là sản phẩm mỹ thuật, mà còn là bài học đạo lý và phản ánh xã hội – ca ngợi điều thiện, phê phán thói xấu, đề cao nhân nghĩa.`,
      image5: "/images/tranhdongho1.png",
      description5: `Người giữ nghề tiêu biểu là nghệ nhân Nguyễn Đăng Chế, Nguyễn Đăng Nghi, những người đã kiên trì khôi phục kỹ thuật in màu điệp, khắc gỗ, đồng thời mở xưởng truyền nghề cho học sinh và du khách. Họ không chỉ giữ lại kỹ thuật, mà còn gìn giữ tinh thần nhân văn của tranh dân gian – coi mỗi bức tranh là “lời nhắn gửi của tổ tiên”.`,
      image6: "/images/tranhdongho1.png",
      description6: `Đông Hồ là địa điểm học tập thực tế lý tưởng cho các môn Mỹ thuật – Lịch sử – Văn hóa dân gian. Học sinh, sinh viên có thể:
- Tham quan quy trình khắc bản, in màu, phơi tranh.
- Tự tay in một bức tranh dân gian làm kỷ niệm.
- Tìm hiểu ý nghĩa biểu tượng trong từng họa tiết, từng gam màu.
- Tham gia hoạt động “Một ngày làm nghệ nhân Đông Hồ”.`,
      image7: "/images/tranhdongho1.png",
      description7: `Đông Hồ hiện được Bộ Văn hóa – Thể thao và Du lịch công nhận là Di sản văn hóa phi vật thể quốc gia (2013). Làng đang triển khai nhiều dự án: lưu trữ bản khắc cổ và phục dựng tranh thất truyền, ứng dụng công nghệ số để bảo tồn mẫu tranh và quảng bá trực tuyến, kết hợp cùng các nhà thiết kế trẻ để tạo sản phẩm ứng dụng như bưu thiếp, túi vải, đồ lưu niệm.`,
      image8: "/images/tranhdongho1.png",
      description8: `Tranh Đông Hồ là minh chứng rằng nghệ thuật dân gian không bao giờ cũ. Dù trải qua bao biến động, những đường nét mộc mạc và màu sắc điệp vẫn giữ nguyên sức sống – bởi trong đó là tinh thần lạc quan, hóm hỉnh và nhân văn của người Việt. “Còn người Việt, còn Tết, thì tranh Đông Hồ vẫn còn treo trong nắng mới.”`,
      heading1: "Giới Thiệu",
      heading2: "Lịch sử hình thành và phát triển",
      heading3: "Nghệ thuật và kỹ thuật làm tranh",
      heading4: "Sản phẩm và sáng tạo hiện nay",
      heading5: "Nghệ nhân và cộng đồng",
      heading6: "Giáo dục và trải nghiệm",
      heading7: "Bảo tồn và phát triển",
      heading8: "Kết luận",
    },
  },
  {
    id: "vanphuc",
    name: "Vạn Phúc",
    province: "Hà Đông, Hà Nội",
    position: { x: 44, y: 19 },
    riddle: {
      id: "vanphuc-riddle",
      prompt: "Làng lụa truyền thống ......",
      answer: "VANPHUC",
      label: "Làng Lụa Vạn Phúc",
      video: "/videos/vanphuc.mp4",
      image1: "/images/vanphuc.png",
      description1: `Cách trung tâm Hà Nội chừng mười cây số về phía tây nam, bên bờ sông Nhuệ thơ mộng, làng lụa Vạn Phúc (phường Vạn Phúc, quận Hà Đông) là một trong những làng nghề lâu đời và nổi tiếng nhất Việt Nam. Nơi đây được mệnh danh là “xứ lụa nghìn năm” – cái nôi của nghề dệt tơ tằm, gắn liền với hình ảnh người phụ nữ Việt Nam dịu dàng trong tà áo dài mềm rũ.`,
      image2: "/images/vanphuc-artisan.png",
      description2: `Theo sử liệu, nghề dệt lụa ở Vạn Phúc có lịch sử hơn 1.200 năm. Truyền thuyết kể rằng, Bà A Nàng (hay còn gọi là Bà tổ nghề Trần Thị Hiền) – người con gái tài hoa của làng, đã học được nghề dệt tơ ở Trung Hoa rồi mang về truyền dạy cho dân làng. Từ đó, nghề dệt lụa lan rộng, trở thành kế sinh nhai của hầu hết các gia đình.`,
      image3: "/images/vanphuc-products.png",
      description3: `Lụa Vạn Phúc nổi tiếng bởi độ mịn, bóng, nhẹ và bền, đặc biệt là khả năng giữ nếp mềm mại tự nhiên. Nguyên liệu chính là tơ tằm tự nhiên, được lấy từ những kén tằm chọn lọc. Công đoạn se sợi, hồ sợi, mắc cửi, dệt vải đều được thực hiện tỉ mỉ bằng tay, kết hợp cùng khung dệt gỗ truyền thống.`,
      image4: "/images/vanphuc-village.png",
      description4: `Ngày nay, lụa Vạn Phúc không chỉ phục vụ may mặc truyền thống mà còn được ứng dụng trong thiết kế thời trang, nội thất và nghệ thuật đương đại. Các sản phẩm tiêu biểu gồm lụa trơn, lụa hoa, gấm dệt hoa văn cổ; khăn choàng, áo dài, cà vạt, túi vải, phụ kiện thủ công.`,
      image5: "/images/vanphuc-weaving.png",
      description5: `Người dân Vạn Phúc vẫn tự hào gọi mình là “con của cửi tơ thoi thoi”. Trong làng hiện có hơn 800 hộ làm nghề, với hàng chục nghệ nhân cao tuổi như bà Nguyễn Thị Tâm, ông Nguyễn Trọng Cảnh, ông Nguyễn Văn Bảy – những người vẫn dệt theo phương pháp cổ, lưu giữ khung gỗ truyền thống và truyền nghề cho lớp trẻ.`,
      image6: "/images/vanphuc-market.png",
      description6: `Vạn Phúc hiện là địa điểm học tập thực tế hấp dẫn dành cho học sinh, sinh viên và người yêu văn hóa truyền thống. Tại đây, người tham quan có thể: tìm hiểu quy trình trồng dâu, nuôi tằm, ươm tơ, dệt lụa; trực tiếp thử dệt trên khung cửi truyền thống; tham quan Bảo tàng Lụa và Nhà truyền thống Vạn Phúc; giao lưu cùng nghệ nhân.`,
      image7: "/images/vanphuc-festival.png",
      description7: `Làng lụa Vạn Phúc đang đối mặt với nhiều thách thức: nguồn tơ nguyên liệu giảm, cạnh tranh với hàng công nghiệp giá rẻ, và sự thiếu vắng thợ trẻ. Tuy vậy, các chương trình OCOP, “Mỗi làng một sản phẩm”, và “Du lịch làng nghề Hà Nội” đang giúp Vạn Phúc từng bước đổi mới.`,
      image8: "/images/vanphuc-modern.png",
      description8: `Lụa Vạn Phúc là hình ảnh thu nhỏ của người Việt: mềm mại mà bền bỉ, tinh tế mà giản dị. Mỗi tấm lụa là câu chuyện của những bàn tay không ngừng chuyển động, của những mái nhà vẫn còn vang tiếng cửi đều đặn qua thế kỷ.`,
      heading1: "Giới Thiệu",
      heading2: "Lịch sử hình thành và phát triển",
      heading3: "Nghệ thuật và kỹ thuật dệt lụa",
      heading4: "Sản phẩm và sáng tạo hiện nay",
      heading5: "Nghệ nhân và cộng đồng",
      heading6: "Giáo dục và trải nghiệm",
      heading7: "Bảo tồn và phát triển",
      heading8: "Kết luận",
    },
  },
  {
    id: "nonchuong",
    name: "Chuông",
    province: "Thanh Oai, Hà Nội",
    position: { x: 40, y: 23 },
    riddle: {
      id: "nonchuong-riddle",
      prompt: "Làng nón truyền thống ......",
      answer: "NONCHUONG",
      label: "Làng Nón Chuông",
      video: "/videos/nonchuong.mp4",
      image1: "/images/nonchuong.png",
      description1: "Làng Nón Chuông nổi tiếng với nghề làm nón lá truyền thống.",
      image2: "/images/nonchuong-artisan.png",
      description2: "Nghệ nhân làm nón lá tại làng Chuông.",
      image3: "/images/nonchuong-village.png",
      description3: "Khung cảnh làng mạc yên bình ở Chuông.",
      image4: "/images/nonchuong-products.png",
      description4: "Sản phẩm nón lá tinh xảo từ làng Chuông.",
      heading1: "Giới Thiệu",
      heading2: "Lịch sử hình thành và phát triển",
      heading3: "Nghệ thuật và kỹ thuật làm nón",
      heading4: "Sản phẩm và sáng tạo hiện nay",
      heading5: "Nghệ nhân và cộng đồng",
      heading6: "Giáo dục và trải nghiệm",
      heading7: "Bảo tồn và phát triển",
      heading8: "Kết luận",
      image5: "/images/nonchuong-making.png",
      description5: "Quá trình làm nón truyền thống tại làng Chuông.",
      image6: "/images/nonchuong-market.png",
      description6: "Chợ nón Chuông nhộn nhịp khách tham quan và mua sắm.",
      image7: "/images/nonchuong-festival.png",
      description7: "Lễ hội truyền thống tôn vinh nghề làm nón tại làng Chuông.",
      image8: "/images/nonchuong-modern.png",
      description8: "Sự kết hợp giữa truyền thống và hiện đại trong sản phẩm nón lá Chuông.",
    },
  },
 {
  id: "phuvinh",
  name: "Phú Vinh",
  province: "Chương Mỹ, Hà Nội",
  position: { x: 34, y: 20 },
  riddle: {
    id: "phuvinh-riddle",
    prompt: "Làng mây tre đan truyền thống ......",
    answer: "PHUVINH",
    label: "Làng Mây Tre Đan Phú Vinh",
    video: "https://www.youtube.com/embed/MW-88Rn9A_0?si=KDwWVivn-DVwXyA7",
    image1: "/images/langmay1.png",
    description1:
      "Nằm bên dòng sông Đáy, thuộc xã Phú Nghĩa, huyện Chương Mỹ, cách trung tâm Hà Nội khoảng 25 km, làng nghề mây tre đan Phú Vinh được xem là một trong những cái nôi thủ công mỹ nghệ lâu đời nhất Việt Nam.\n\n" +
      "Trải qua hơn 400 năm lịch sử, nơi đây vẫn vang lên tiếng lách cách của những sợi mây, tiếng cười hiền hòa của người thợ – minh chứng cho một nghề vừa dân dã, vừa tinh tế, vừa mang đậm hồn Việt.\n\n" +
      "Phú Vinh không chỉ là làng nghề, mà là biểu tượng của trí tuệ và sự sáng tạo của người nông dân đồng bằng Bắc Bộ, biến những nguyên liệu giản đơn từ thiên nhiên thành tác phẩm mang giá trị thẩm mỹ và văn hóa.",

    image2: "/images/langmay2.png",
    description2:
      "Theo sử sách, nghề đan lát ở Phú Vinh đã có từ thế kỷ XVII.\n" +
      "Ban đầu, người dân đan rổ rá, thúng, nong nia phục vụ đời sống hằng ngày. Dần dần, từ kỹ năng và óc sáng tạo, họ phát triển nghề thành nghề mỹ nghệ mây tre đan tinh xảo.\n" +
      "Đến đầu thế kỷ XX, sản phẩm của Phú Vinh đã nổi tiếng khắp miền Bắc, được xuất sang Pháp và các nước Đông Dương.\n\n" +
      "Sau năm 1954, làng nghề trở thành hợp tác xã thủ công mỹ nghệ, chuyên sản xuất hàng xuất khẩu. Dù trải qua thời kỳ suy giảm do cơ giới hóa, Phú Vinh vẫn giữ được nghề và danh tiếng.\n" +
      "Ngày nay, làng có hàng trăm hộ làm nghề, cung cấp sản phẩm cho thị trường trong nước và quốc tế.",

    image3: "/images/langmay3.png",
    description3:
      "Nguyên liệu chính của nghề là mây, tre, giang, nứa – được khai thác, ngâm, phơi, nhuộm kỹ lưỡng để đảm bảo độ bền và dẻo.\n" +
      "Các bước cơ bản gồm:\n" +
      "- Chọn nguyên liệu: Tre và mây phải đều, già vừa độ.\n" +
      "- Sơ chế: Chẻ, vót, ngâm, phơi khô, nhuộm màu tự nhiên.\n" +
      "- Đan: Uốn, lượn, đan theo mô hình.\n" +
      "- Hoàn thiện: Làm bóng, phủ sơn bảo vệ.\n\n" +
      "Điều đặc biệt của Phú Vinh là kỹ thuật đan tranh chân dung và phong cảnh bằng mây – sáng tạo bởi nghệ nhân Nguyễn Văn Tĩnh.",

    image4: "/images/langmay1.png",
    description4:
      "Sản phẩm mây tre đan Phú Vinh ngày nay rất đa dạng:\n" +
      "* Đồ gia dụng: rổ, khay, giỏ, đèn treo.\n" +
      "* Nội thất & trang trí: bàn ghế, tranh mây, rèm tre.\n" +
      "* Nghệ thuật: tranh chân dung, phong cảnh kết hợp sơn mài.\n\n" +
      "Các nghệ nhân trẻ đang kết hợp vật liệu truyền thống với thiết kế hiện đại, mở rộng thị trường xuất khẩu sang Nhật Bản, Pháp, Đức.",

    image5: "/images/langmay2.png",
    description5:
      "Phú Vinh có nhiều nghệ nhân tài hoa: Nguyễn Văn Tĩnh, Nguyễn Văn Trung, Nguyễn Văn Chúc.\n\n" +
      "Họ truyền dạy nghề cho thế hệ trẻ, mở lớp dạy đan tại nhà.\n" +
      "Nghề đan ở Phú Vinh không phân biệt tuổi tác – từ trẻ nhỏ đến người già đều có thể tham gia.",

    image6: "/images/langmay3.png",
    description6:
      "Làng nghề Phú Vinh hiện là điểm đến học tập và trải nghiệm nghề thủ công:\n" +
      "- Tìm hiểu lịch sử và kỹ thuật làm mây tre.\n" +
      "- Tự tay đan móc sản phẩm nhỏ.\n" +
      "- Tham quan xưởng và phòng trưng bày.\n" +
      "- Gặp gỡ nghệ nhân.\n\n" +
      "Những trải nghiệm này nuôi dưỡng sự kiên nhẫn, sáng tạo và tình yêu với nghề thủ công.",

    image7: "/images/langmay1.png",
    description7:
      "Phú Vinh đang đổi mới mạnh mẽ:\n" +
      "- Thành lập hợp tác xã, xúc tiến xuất khẩu.\n" +
      "- Đào tạo thiết kế cho thế hệ trẻ.\n" +
      "- Ứng dụng công nghệ số, mô hình 3D.\n" +
      "- Kết hợp du lịch làng nghề.\n\n" +
      "Nhờ vậy, Phú Vinh chuyển mình thành làng nghề sáng tạo hiện đại.",

    image8: "/images/langmay3.png",
    description8:
      "Mỗi sợi mây ở Phú Vinh là đường nối giữa quá khứ và hiện tại.\n" +
      "Từ đôi tay người thợ, vật liệu dân dã trở thành nghệ thuật.\n" +
      "“Từ bàn tay người, sợi mây hóa linh hồn.” — Nghệ nhân Nguyễn Văn Tĩnh",

    heading1: "Giới Thiệu",
    heading2: "Lịch sử hình thành và phát triển",
    heading3: "Nghệ thuật và kỹ thuật chế tác",
    heading4: "Sản phẩm và sáng tạo hiện nay",
    heading5: "Nghệ nhân và cộng đồng",
    heading6: "Giáo dục và trải nghiệm",
    heading7: "Bảo tồn và phát triển",
    heading8: "Kết luận",
  },
},

  {
    id: "phuoctich",
    name: "Phước Tích",
    province: "Phong Điền, Huế",
    position: { x: 61, y: 43 },
    riddle: {
      id: "phuoctich-riddle",
      prompt: "Làng gốm truyền thống nổi tiếng ở Huế là gì?",
      answer: "PHUOCTICH",
      label: "Gốm Phước Tích",
      video: "/videos/phuoctich.mp4",
      image1: "/images/phuoctich.png",
      description1: "Gốm Phước Tích nổi tiếng với sản phẩm gốm truyền thống.",
      image2: "/images/phuoctich-pottery.png",
      description2: "Nghệ nhân làm gốm tại Phước Tích.",
      image3: "/images/phuoctich-village.png",
      description3: "Làng gốm Phước Tích yên bình bên sông Hương.",
      image4: "/images/phuoctich-artisan.png",
      description4: "Quá trình tạo ra sản phẩm gốm tinh xảo.",
      image5: "/images/phuoctich-market.png",
      description5: "Chợ gốm Phước Tích nhộn nhịp khách tham quan và mua sắm.",
      heading1: "Giới Thiệu",
      heading2: "Lịch sử hình thành và phát triển",
      heading3: "Nghệ thuật và kỹ thuật làm gốm",
      heading4: "Sản phẩm và sáng tạo hiện nay",
      heading5: "Nghệ nhân và cộng đồng",
      heading6: "Giáo dục và trải nghiệm",
      heading7: "Bảo tồn và phát triển",
      heading8: "Kết luận",
      image6: "/images/phuoctich-festival.png",
      description6: "Lễ hội truyền thống tôn vinh nghề làm gốm tại Phước Tích.",
      image7: "/images/phuoctich-modern.png",
      description7: "Sự kết hợp giữa truyền thống và hiện đại trong sản phẩm gốm Phước Tích.",
      image8: "/images/phuoctich-making.png",
      description8: "Quá trình làm gốm truyền thống tại Phước Tích.",
    },
  },
  {
    id: "bentre",
    name: "Bến Tre",
    province: "Mỏ Cày Nam, Bến Tre",
    position: { x: 48, y: 80 },
    riddle: {
      id: "bentre-riddle",
      prompt: "Làng nghề kẹo dừa nổi tiếng ở miền Tây là gì?",
      answer: "BENTRE",
      label: "Làng Nghề Bến Tre",
      video: "/videos/bentre.mp4",
      image1: "/images/bentre.png",
      description1: "Bến Tre nổi tiếng với kẹo dừa truyền thống.",
      image2: "/images/bentre-coconut.png",
      description2: "Cây dừa là biểu tượng của Bến Tre.",
      image3: "/images/bentre-river.png",
      description3: "Sông nước miền Tây đặc trưng của Bến Tre.",
      image4: "/images/bentre-farm.png",
      description4: "Nông trại dừa xanh mướt ở Bến Tre.",
      heading1: "Giới Thiệu",
      heading2: "Lịch sử hình thành và phát triển",
      heading3: "Nghệ thuật và kỹ thuật làm kẹo dừa",
      heading4: "Sản phẩm và sáng tạo hiện nay",
      heading5: "Nghệ nhân và cộng đồng",
      heading6: "Giáo dục và trải nghiệm",
      heading7: "Bảo tồn và phát triển",
      heading8: "Kết luận",
      image5: "/images/bentre-making.png",
      description5: "Quá trình làm kẹo dừa truyền thống tại Bến Tre.",
      image6: "/images/bentre-market.png",
      description6: "Chợ kẹo dừa Bến Tre nhộn nhịp khách tham quan và mua sắm.",
      image7: "/images/bentre-festival.png",
      description7: "Lễ hội truyền thống tôn vinh nghề làm kẹo dừa tại Bến Tre.",
      image8: "/images/bentre-modern.png",
      description8: "Sự kết hợp giữa truyền thống và hiện đại trong sản phẩm kẹo dừa Bến Tre.",
    },
  },
  {
    id: "phuquoc",
    name: "Phú Quốc",
    province: "Kiên Giang",
    position: { x: 18, y: 89 },
    riddle: {
      id: "phuquoc-riddle",
      prompt: "Làng nghề nước mắm nổi tiếng ở đảo Phú Quốc là gì?",
      answer: "PHUQUOC",
      label: "Phú Quốc",
      video: "/videos/phuquoc.mp4",
      image1: "/images/phuquoc.png",
      description1: "Phú Quốc nổi tiếng với nước mắm truyền thống.",
      image2: "/images/phuquoc-fish.png",
      description2: "Phú Quốc cũng nổi tiếng với hải sản tươi ngon.",
      image3: "/images/phuquoc-beach.png",
      description3: "Bãi biển Phú Quốc tuyệt đẹp thu hút du khách.",
      image4: "/images/phuquoc-nightmarket.png",
      description4: "Chợ đêm Phú Quốc sầm uất với nhiều món ăn đặc sản.",
      heading1: "Giới Thiệu",
      heading2: "Lịch sử hình thành và phát triển",
      heading3: "Nghệ thuật và kỹ thuật làm nước mắm",
      heading4: "Sản phẩm và sáng tạo hiện nay",
      heading5: "Nghệ nhân và cộng đồng",
      heading6: "Giáo dục và trải nghiệm",
      heading7: "Bảo tồn và phát triển",
      heading8: "Kết luận",
      image5: "/images/phuquoc-making.png",
      description5: "Quá trình làm nước mắm truyền thống tại Phú Quốc.",
      image6: "/images/phuquoc-market.png",
      description6: "Chợ nước mắm Phú Quốc nhộn nhịp khách tham quan và mua sắm.",
      image7: "/images/phuquoc-festival.png",
      description7: "Lễ hội truyền thống tôn vinh nghề làm nước mắm tại Phú Quốc.",
      image8: "/images/phuquoc-modern.png",
      description8: "Sự kết hợp giữa truyền thống và hiện đại trong sản phẩm nước mắm Phú Quốc.",
    },
  },
];

export type UserQuizProgress = {
  // locationId -> { answeredQuestionIds, score }
  locations: Record<
    string,
    {
      answeredQuestionIds: string[];
      score: number;
      // Lưu đáp án đã chọn theo questionId (ví dụ riddle)
      answers?: Record<string, string>;
    }
  >;
  updatedAt: number;
};

export const emptyProgress = (): UserQuizProgress => ({
  locations: {},
  updatedAt: Date.now(),
});

// Utilities cho riddle: bỏ dấu + khoảng trắng và upper-case
export function normalizeAnswer(input: string): string {
  return input
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "")
    .toUpperCase();
}
