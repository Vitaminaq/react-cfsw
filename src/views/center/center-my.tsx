import React, { Component } from 'react';
import LogoHeader from '../../components/header/logo-header';
import Footer from '../../components/footer/footer';

class CenterMy extends Component<any, any> {
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

export default CenterMy;
