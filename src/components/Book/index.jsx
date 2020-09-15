import React, { Component } from "react";
import { Menu } from "antd";
import { DollarCircleOutlined, AccountBookOutlined } from "@ant-design/icons";
import BookDetail from "./BookDetail";
import { ExpendList, IncomeList } from "../../lib/const";

class Book extends Component {
  state = {
    current: "expend",
  };
  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  };
  render() {
    const { current } = this.state;
    return (
      <div>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[current]}
          mode="horizontal"
          className="menu"
        >
          <Menu.Item key="expend" icon={<DollarCircleOutlined />}>
            支出
          </Menu.Item>
          <Menu.Item key="income" icon={<AccountBookOutlined />}>
            收入
          </Menu.Item>
        </Menu>
        <BookDetail
          type={current}
          options={current === "expend" ? ExpendList : IncomeList}
        />
      </div>
    );
  }
}

export default Book;
