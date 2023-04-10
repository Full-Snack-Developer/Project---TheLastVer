import React from "react";
import "../Footer/Footer.css";
import { BsFacebook, BsInstagram, BsTwitter, BsTelegram } from "react-icons/bs";

function Footer() {
  return (
    <footer>
      <div className="row">
        <div className="col">
          <h1 className="logo">PhimFly</h1>
          <p>
            PhimFly nơi tự tập những bộ phim hot và đang trending, có độ phân
            giải cao và được bảo trì liên tục đảm bảo phim chạy suông mượt hơn
            bồ cũ tán tỉnh bạn.{" "}
          </p>
        </div>
        <div className="col">
          <h2 className="underline">Hỗ trợ</h2>
          <p>Câu hỏi</p>
          <p>Chính sách</p>
          <p>Điều khoản sử dụng</p>
          <p>Liên lạc</p>
        </div>
        <div className="col">
          <h2 className="underline">Giới thiệu</h2>
          <p>Về tụi mình</p>
          <p>Dịch vụ</p>
          <p>Đặc trưng</p>
          <p>Giá thuê</p>
        </div>
        <div className="col">
          <h2 className="underline">Liên lạc</h2>
          <p>Địa chỉ: Trung Tâm Mindx, Nguyễn Xí, Bình Thạnh</p>
          <p>Email: admin@phimfly.com</p>
          <p>Số điện thoại:(+84) 1234567890</p>
          <div className="social_media">
            <h1 className="icon1" style={{ marginLeft: "-40px" }}>
              <BsFacebook />
            </h1>
            <h1 className="icon2" style={{ marginLeft: "10px" }}>
              <BsInstagram />
            </h1>
            <h1 className="icon3" style={{ marginLeft: "10px" }}>
              <BsTelegram />
            </h1>
            <h1 className="icon4" style={{ marginLeft: "10px" }}>
              <BsTwitter />
            </h1>
          </div>
        </div>
        <div className="copyrightText">Copyright © 2020</div>
      </div>
    </footer>
  );
}

export default Footer;
