import React, { Component } from "react";
import { Form, Input, Select, DatePicker, Button } from "antd";
import moment from "moment";

const dateFormat = "YYYY-MM-DD";

class BookDetail extends Component {
  formRef = React.createRef();

  componentDidMount() {
    this.onReset();
  }

  componentDidUpdate(nextProps) {
    if (this.props.type !== nextProps.type) {
      this.onReset();
    }
  }

  onFinish = (values) => {
    console.log("BookDetail -> onFinish -> values", values);
  };
  onReset = () => {
    this.formRef.current.setFieldsValue({
      amount: 0,
      date: moment(new Date(), dateFormat),
      type: this.props.options[0].key,
      remarks: "",
    });
  };
  render() {
    const { Item } = Form;
    const { Option } = Select;
    const { options } = this.props;
    return (
      <div>
        <Form onFinish={this.onFinish} ref={this.formRef}>
          <Item name="amount" label="金额" style={{ width: '50%' }} >
            <Input prefix="￥" />
          </Item>
          <Item name="date" label="账户">
            <DatePicker />
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
          <Item name="remarks" label="备注" style={{ width: '50%' }} >
            <Input />
          </Item>
          <Item>
            <Button type="primary" htmlType="submit">
              保存
            </Button>
          </Item>
        </Form>
      </div>
    );
  }
}

export default BookDetail;
