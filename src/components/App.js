import React from 'react';

import FruitBasket from './FruitBasket';
import Filter from './Filter'

class App extends React.Component {
	constructor() {
		super()

		this.state = {
			fruit: [],
			filters: [],
			currentFilter: null
		}
	}

	render() {
		return <Filter filters={this.state.filters} />
	}
}

export default App;
