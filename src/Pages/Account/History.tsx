import React from "react";
import styles from "./styles.module.scss";
import className from "classNames/bind";

const cx = className.bind(styles);
const History = () => {
  return (
    <div className={cx("order-list")}>
      <h2>Lịch sử đặt hàng của bạn</h2>
      <table border={1} className="">
        <thead>
          <th>#</th>
          <th>Ngày đặt</th>
          <th>Tên sản phẩm</th>
          <th>Phiên bản</th>
          <th>Màu sắc</th>
          <th>SL</th>
          <th>Giá tiền</th>
          <th>Tổng(SLxG)</th>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Đang chờ xét duyệt</td>
            <td className={cx("name")}>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Đang chờ xét duyệt</td>

            <td className={cx("name")}>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Đang chờ xét duyệt</td>

            <td className={cx("name")}>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Đang chờ xét duyệt</td>
            <td className={cx("name")}>
              KM Giảm thêm 200.000đ cho tất các sản phẩm màn hình khi mua kèm
              laptop, MacBook, máy tính bảng và điện thoại.
            </td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default History;
