/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * This file is licensed under the terms of the MIT License (see LICENSE.md).
 */

import React, { Component } from 'react';
import './configuration-dialog.css';

const LOCAL_STORAGE_KEY = 'CKEDITOR_CS_CONFIG';

const users = [
	{
		id: 'e1',
		name: 'Tom Rowling',
		avatar: 'https://randomuser.me/api/portraits/men/30.jpg'
	},
	{
		id: 'e2',
		name: 'Wei Hong',
		avatar: 'https://randomuser.me/api/portraits/women/51.jpg'
	},
	{
		id: 'e3',
		name: 'Rani Patel'
	},
	{
		id: 'e4',
		name: 'Henrik Jensen'
	},
	{
		id: randomString()
	}
];

export default class ConfigurationPage extends Component {
	state = {
		config: getStoredConfig(),
		documentId: handleDocIdInUrl(),
		selectedUser: null
	};

	handleConfigChange( value, property ) {
		const config = this.state.config;

		config[ property ] = value;

		this.setState( { config } );
	}

	selectUser( data ) {
		this.setState( { selectedUser: data.id } );

		const config = this.state.config;

		const tokenUrl = `${ getRawTokenUrl( config.tokenUrl ) }?` + Object.keys( data )
			.filter( key => data[ key ] )
			.map( key => `user.${ key }=${ data[ key ] }` )
			.join( '&' );

		config.tokenUrl = tokenUrl;
		this.setState( { config } );
	}

	handleSubmit( evt ) {
		evt.preventDefault();

		const { config, documentId } = this.state;
		const { onSubmit } = this.props;

		setStoredConfig( Object.assign( {}, config, { tokenUrl: getRawTokenUrl( config.tokenUrl ) } ) );
		updateDocIdInUrl( documentId );
		onSubmit( Object.assign( config, { documentId } ) );
	}

	render() {
		const { config, documentId, selectedUser } = this.state;

		return (
			<div id="overlay">
				<form className="body" onSubmit={ evt => this.handleSubmit( evt ) }>
					<h2>Connect CKEditor Cloud Services</h2>
					<p>
						If you do not have Cloud Services URLs yet,&nbsp;
						<a href="https://ckeditor.com/docs/cs/latest/guides/collaboration/quick-start.html"
							target="_blank" rel="noopener noreferrer">
							see the documentation
						</a>.
					</p>
					<div>
						<label htmlFor="upload-url">Upload URL</label>
						<input
							required
							name="upload-url"
							onChange={ evt => this.handleConfigChange( evt.target.value, 'uploadUrl' ) }
							value={ config.uploadUrl } />
					</div>
					<div>
						<label htmlFor="web-socket-url">WebSocket URL</label>
						<input
							required
							name="web-socket-url"
							onChange={ evt => this.handleConfigChange( evt.target.value, 'webSocketUrl' ) }
							value={ config.webSocketUrl } />
					</div>
					<div>
						<label htmlFor="token-url">Token URL</label>
						<input
							required
							name="token-url"
							onChange={ evt => this.handleConfigChange( evt.target.value, 'tokenUrl' ) }
							value={ config.tokenUrl } />
					</div>

					<div id="additional" className={ isCloudServicesTokenEndpoint( config.tokenUrl ) ? 'visible' : '' }>
						<p>
							CKEditor Cloud Services development token endpoint lets you&nbsp;
							<a href="https://ckeditor.com/docs/cs/latest/guides/collaboration/quick-start.html#simulating-random-users"
								target="_blank" rel="noopener noreferrer">
								simulate a random user
							</a>.
							<br />
							Use one of the following to define the user data.
						</p>
						<div id="user-container">
							{ users.map( data => {
								return (
									<div
										key={ data.id }
										onClick={ () => this.selectUser( data ) }
										className={ selectedUser == data.id ? 'active' : '' }
									>
										{ data.avatar && <img src={ data.avatar } /> }
										{ !data.avatar && data.name && <span className="pseudo-avatar">{ getUserInitials( data.name ) }</span> }
										{ !data.avatar && !data.name && <span className="pseudo-avatar anonymous"></span> }
										{ data.name || '(anonymous)' }
									</div>
								);
							} ) }
						</div>
					</div>

					<div>
						<label htmlFor="document-id">Document ID</label>
						<input name="document-id" required defaultValue={ documentId } />
					</div>

					<button id="start">Start</button>
				</form>
			</div>
		);
	}
}

function getUserInitials( name ) {
	return name.split( ' ', 2 ).map( part => part.charAt( 0 ) ).join( '' ).toUpperCase();
}

function handleDocIdInUrl() {
	let id = getDocIdFromUrl();

	if ( !id ) {
		id = randomString();
		updateDocIdInUrl( id );
	}

	return id;
}

function updateDocIdInUrl( id ) {
	window.history.replaceState( {}, document.title, generateUrlWithDocId( id ) );
}

function generateUrlWithDocId( id ) {
	return `${ window.location.href.split( '?' )[ 0 ] }?docId=${ id }`;
}

function getDocIdFromUrl() {
	const docIdMatch = location.search.match( /docId=(.+)$/ );

	return docIdMatch ? decodeURIComponent( docIdMatch[ 1 ] ) : null;
}

function isCloudServicesTokenEndpoint( tokenUrl ) {
	return /cke-cs[\w-]*\.com\/token\/dev/.test( tokenUrl );
}

function getRawTokenUrl( url ) {
	if ( isCloudServicesTokenEndpoint( url ) ) {
		return url.split( '?' )[ 0 ];
	}

	return url;
}

function randomString() {
	return Math.floor( Math.random() * Math.pow( 2, 52 ) ).toString( 32 );
}

function setStoredConfig( csConfig ) {
	localStorage.setItem( LOCAL_STORAGE_KEY, JSON.stringify( csConfig ) );
}

function getStoredConfig() {
	const config = JSON.parse( localStorage.getItem( LOCAL_STORAGE_KEY ) || '{}' );

	return {
		tokenUrl: config.tokenUrl || '',
		uploadUrl: config.uploadUrl || '',
		webSocketUrl: config.webSocketUrl || ''
	};
}
