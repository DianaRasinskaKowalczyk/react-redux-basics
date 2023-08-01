import React from 'react';
import ResetStyle from "./components/styles/Reset";
import GlobalStyle from "./components/styles/Global";
import Calendar from "./components/calendar/Calendar";

class App extends React.Component {
	render() {
		return (
			<>
				<ResetStyle />
				<GlobalStyle />
				<Calendar />
			</>
		);
	}
}

export default App;