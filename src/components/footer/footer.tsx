import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../style/components/footer.scss';

interface ListItem {
	name: string;
	pathName: string;
	url: string;
	urled: string;
}
interface FooterState {
	list: ListItem[];
}

interface FooterProps {
	pathName: string;
}

class Footer extends Component<FooterProps, FooterState> {
	public constructor(props: FooterProps) {
		super(props);
		this.state = {
			list: [
				{
					name: '首页',
					pathName: '/',
					url: './images/home.svg',
					urled: './images/home_ed.svg'
				},
				{
					name: '发表',
					pathName: '/publish',
					url: './images/publish.svg',
					urled: './images/publish_ed.svg'
				},
				{
					name: '我的',
					pathName: '/center/my',
					url: './images/my.svg',
					urled: './images/my_ed.svg'
				}
			]
		};
	}
	public render() {
		return (
			<footer className="nav-footer">
				{this.state.list.map((i) => {
					return (
						<NavLink
							to={i.pathName}
							key={i.pathName}
							className={
								i.pathName === this.props.pathName
									? 'current'
									: 'no-current'
							}
						>
							<img
								src={
									i.pathName === this.props.pathName
										? require(`${i.url}`)
										: require(`${i.urled}`)
								}
								alt="icon"
							/>
							<div>{i.name}</div>
						</NavLink>
					);
				})}
			</footer>
		);
	}
}

export default Footer;
