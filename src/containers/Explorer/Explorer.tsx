import React, { useContext } from 'react';

import { Action } from 'context/actions/activity';
import { ActivityContext } from 'context/providers/activity';

import NewPage from './Activities/NewPage';
import NewComponent from './Activities/NewComponent';
import ModifyComponent from './Activities/ModifyComponent';
import ModifyPage from './Activities/ModifyPage';

import Sidebar from 'hoc/Sidebar/Sidebar';

const Explorer: React.FC = () => {
	const { state, dispatch } = useContext(ActivityContext);

	const isVisible = state.newPage || state.activePage != null;

	const establishActivity = () => {
		if (state.newComponent) {
			return <NewComponent />;
		} else if (state.newPage) {
			return <NewPage onDismiss={onDismiss} />;
		} else if (state.activeComponent) {
			return <ModifyComponent />;
		} else if (state.activePage) {
			return <ModifyPage pageId={state.activePage} onDismiss={onDismiss} />;
		}
	};

	const onDismiss = () => {
		if (state.newComponent) {
			dispatch({ type: Action.SET_NEW_COMPONENT, payload: { newComponent: false } });
		} else if (state.newPage) {
			dispatch({ type: Action.SET_NEW_PAGE, payload: { newPage: false } });
		} else if (state.activeComponent) {
			dispatch({ type: Action.DELETE_ACTIVE_COMPONENT });
		} else {
			dispatch({ type: Action.DELETE_ACTIVE_PAGE });
		}
	};

	return (
		<Sidebar visible={isVisible} reverse>
			{establishActivity()}
		</Sidebar>
	);
};

export default Explorer;