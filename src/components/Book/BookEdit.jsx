import React, { Componen, PureComponent } from "react";
import { Form, Input, Select, DatePicker, Button } from "antd";
import moment from "moment";

const dateFormat = "YYYY-MM-DD";

class BookDetail extends PureComponent {
  formRef = React.createRef();

  componentDidMount() {
    this.onReset();
  }

  componentDidUpdate() {
    this.onReset();
  }

  onFinish = (values) => {
    console.log("BookDetail -> onFinish -> values", values);
  };
  onReset = () => {
    const {amount,date,type,remarks}  = this.props.record
    this.formRef.current.setFieldsValue({
      amount,
      date: moment(new Date(date), dateFormat),
      type,
      remarks,
    });
  };
  render() {
    const { Item } = Form;
    const { Option } = Select;
    const { options } = this.props;
    return (
      <div>
        <Form onFinish={this.onFinish} ref={this.formRef}>
          <Item name="amount" label="金额" style={{ width: "50%" }}>
            <Input prefix="￥" />
          </Item>
          <Item name="type" label="用途">
            <Select style={{ width: 120 }}>
              {options.map((o) => (
                <Option value={o.key} key={o.key}>
                  {o.val}
                </Option>
              ))}
            </Select>
          </Item>
          <Item name="remarks" label="备注" style={{ width: "50%" }}>
            <Input />
          </Item>
          <Item name="date" label="时间">
            <DatePicker />
          </Item>
          <Item>
            <Button type="primary" htmlType="submit">
              保存
            </Button>
            <Button type="primary">删除</Button>
          </Item>
        </Form>
      </div>
    );
  }
}

export default BookDetail;
