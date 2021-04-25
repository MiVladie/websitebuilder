import React, { useContext, useEffect, useState } from 'react';

import { ActivityContext } from 'context/providers/activity';
import { WebsiteContext } from 'context/providers/website';

import { Action as ActivityAction } from 'context/actions/activity';
import { Action as WebsiteAction } from 'context/actions/website';

import { Helmet } from 'react-helmet';

import Sitemap from 'containers/Sitemap/Sitemap';
import Explorer from 'containers/Explorer/Explorer';

import classes from './Project.module.scss';
import { IStructure } from 'interfaces/blueprint';

const Project: React.FC = () => {
	const [loading, setLoading] = useState<boolean>(true);

	const { dispatch: dispatchActivity } = useContext(ActivityContext);
	const { state: stateWebsite, dispatch: dispatchWebsite } = useContext(WebsiteContext);

	useEffect(() => {
		resetState();

		fetchData();
	}, []);

	const resetState = () => {
		dispatchActivity({ type: ActivityAction.DELETE_ACTIVE_PAGE });
		dispatchActivity({ type: ActivityAction.SET_NEW_PAGE, payload: { newPage: false } });
	};

	const fetchData = () => {
		const website: IStructure = {
			id: 1,
			name: 'Ashk Aesthetics',
			category: 'Beauty Salon',
			pages: [
				{
					id: Math.random(),
					name: 'Home',
					url: '/',
					components: [
						{
							id: 1,
							name: 'Banner',
							content: {
								title: 'hey'
							}
						}
					]
				}
			],
			styles: []
		};

		dispatchWebsite({ type: WebsiteAction.SET_WEBSITE, payload: website });

		setLoading(false);
	};

	if (loading) {
		return null;
	}

	return (
		<div className={classes.Project}>
			<Helmet>
				<title>{stateWebsite?.name || 'Loading'} | Bellespace</title>
			</Helmet>

			<Sitemap />
			<Explorer />
		</div>
	);
};

export default Project;
