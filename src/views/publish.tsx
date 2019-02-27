import React, { Component } from 'react';
import LogoHeader from '../components/header/logo-header';
import Footer from '../components/footer/footer';

class Publish extends Component<any, any> {
	public constructor(props: any) {
		super(props);
	}
	public render() {
		const { location } = this.props;
		return (
			<div>
				<LogoHeader />
				<Footer pathName={location.pathname || ''} />
			</div>
		);
	}
}

export default Publish;
