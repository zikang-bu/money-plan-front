import React, { Component } from 'react';
import { Menu, Table } from 'antd';
import { DollarCircleOutlined, AccountBookOutlined } from '@ant-design/icons';
import BookDetail from './BookDetail';
import BookEdit from './BookEdit';
import { ExpendList, IncomeList } from '../../lib/const';
import { getBookItems } from '@api';
class Book extends Component {
	state = {
		current: 'expend',
	};
	handleClick = (e) => {
		this.setState({
			current: e.key,
		});
	};
	showTotal = (total) => {
		return `Total ${total} items`;
	};
	async componentDidMount() {
		let res = await getBookItems();
		console.log('--------Book -> componentDidMount -> res', res);
	}
	render() {
		const columns = [
			{ title: '日期', dataIndex: 'date', key: 'date' },
			{ title: '分类', dataIndex: 'type', key: 'type' },
			{ title: '金额', dataIndex: 'amount', key: 'amount' },
			{ title: '说明', dataIndex: 'remarks', key: 'remarks' },
		];

		const data = [
			{
				key: 1,
				date: '2020-09-20',
				type: 'food',
				amount: 128,
				current: 'expend',
				remarks: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
			},
			{
				key: 2,
				date: '2020-09-20',
				type: 'bonus',
				amount: 55,
				current: 'income',
				remarks: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
			},
		];
		const { current } = this.state;
		return (
			<div>
				<Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" className="menu">
					<Menu.Item key="expend" icon={<DollarCircleOutlined />}>
						支出
					</Menu.Item>
					<Menu.Item key="income" icon={<AccountBookOutlined />}>
						收入
					</Menu.Item>
				</Menu>
				<BookDetail type={current} options={current === 'expend' ? ExpendList : IncomeList} />
				<div>账目清单</div>
				<div>
					<Table
						columns={columns}
						expandable={{
							expandedRowRender: (record) => (
								<BookEdit
									record={record}
									options={record.current === 'expend' ? ExpendList : IncomeList}
								/>
							),
						}}
						dataSource={data}
					/>
				</div>
			</div>
		);
	}
}

export default Book;
