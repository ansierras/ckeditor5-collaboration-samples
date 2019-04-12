/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * This file is licensed under the terms of the MIT License (see LICENSE.md).
 */

/* eslint-disable max-len */

( function() {
	const LOCAL_STORAGE_KEY = 'CKEDITOR_CS_CONFIG';

	function createDialog() {
		const overlay = document.createElement( 'div' );

		overlay.id = 'overlay';
		overlay.innerHTML = `
			<div class="body">
				<h2>Connect CKEditor Cloud Services</h2>
				<p>If you do not have Cloud Services URLs yet, <a href="https://ckeditor.com/docs/cs/latest/guides/collaboration/quick-start.html" target="_blank">see documentation</a>.</p>
				<div><label for="upload-url">Upload URL</label><input id="upload-url"></input></div>
				<div><label for="web-socket-url">WebSocket URL</label><input id="web-socket-url"></input></div>
				<div><label for="token-url">Token URL</label><input id="token-url"></input></div>
				<div id="additional">
					<p>CKEditor Cloud Services development token endpoint lets you <a href="https://ckeditor.com/docs/cs/latest/guides/collaboration/quick-start.html#simulating-random-users" target="_blank">simulate a random user</a>. <br>Use one of the following to define the user data.</p>
					<div id="user-container"></div>
				</div>
				<div><label for="document-id">Document ID</label><input id="document-id"></input></div>
				<button id="start">Start</button>
			</div>`;

		document.body.appendChild( overlay );

		const tokenUrlInput = document.getElementById( 'token-url' );
		const uploadUrlInput = document.getElementById( 'upload-url' );
		const webSocketUrlInput = document.getElementById( 'web-socket-url' );
		const documentIdInput = document.getElementById( 'document-id' );
		const additional = document.getElementById( 'additional' );
		const startButton = document.getElementById( 'start' );
		const userContainer = document.getElementById( 'user-container' );

		const csConfig = getStoredConfig();

		tokenUrlInput.value = csConfig.tokenUrl || '';
		uploadUrlInput.value = csConfig.uploadUrl || '';
		webSocketUrlInput.value = csConfig.webSocketUrl || '';
		documentIdInput.value = handleDocIdInUrl();

		if ( isCloudServicesTokenEndpoint( csConfig.tokenUrl ) ) {
			additional.classList.add( 'visible' );
		}

		tokenUrlInput.addEventListener( 'input', () => {
			userContainer.querySelectorAll( 'div' ).forEach( div => div.classList.remove( 'active' ) );

			if ( isCloudServicesTokenEndpoint( tokenUrlInput.value ) ) {
				additional.classList.add( 'visible' );
			} else {
				additional.classList.remove( 'visible' );
			}
		} );

		// Create two random users with avatars.
		addUser( {
			id: 'e1',
			name: 'Tom Rowling',
			avatar: 'https://randomuser.me/api/portraits/men/30.jpg'
		} );

		addUser( {
			id: 'e2',
			name: 'Wei Hong',
			avatar: 'https://randomuser.me/api/portraits/women/51.jpg'
		} );

		// Create two random users without avatars.
		addUser( { id: 'e3', name: 'Rani Patel' } );
		addUser( { id: 'e4', name: 'Henrik Jensen' } );

		// Create one anonymous user.
		addUser( { id: randomString() } );

		return new Promise( resolve => {
			startButton.addEventListener( 'click', () => {
				storeConfig( {
					tokenUrl: getRawTokenUrl( tokenUrlInput.value ),
					uploadUrl: uploadUrlInput.value,
					webSocketUrl: webSocketUrlInput.value,
				} );

				overlay.remove();

				resolve( {
					tokenUrl: tokenUrlInput.value,
					uploadUrl: uploadUrlInput.value,
					webSocketUrl: webSocketUrlInput.value,
					documentId: documentIdInput.value
				} );
			} );
		} );
	}

	function addUser( options ) {
		const userContainer = document.getElementById( 'user-container' );
		const tokenUrlInput = document.getElementById( 'token-url' );

		const userDiv = document.createElement( 'div' );
		userDiv.innerText = options.name || '(anonymous)';

		if ( options.avatar ) {
			const img = document.createElement( 'img' );

			img.src = options.avatar;
			userDiv.prepend( img );
		} else {
			// Handle cases without avatar to display them properly in the users list.
			const pseudoAvatar = document.createElement( 'span' );
			pseudoAvatar.classList.add( 'pseudo-avatar' );

			if ( !options.name ) {
				pseudoAvatar.classList.add( 'anonymous' );
			} else {
				pseudoAvatar.textContent = getUserInitials( options.name );
			}

			userDiv.prepend( pseudoAvatar );
		}

		userDiv.addEventListener( 'click', () => {
			const tokenUrl = `${ getRawTokenUrl( tokenUrlInput.value ) }?` + Object.keys( options )
				.filter( key => options[ key ] )
				.map( key => `user.${ key }=${ options[ key ] }` )
				.join( '&' );

			tokenUrlInput.value = tokenUrl;

			userContainer.querySelectorAll( 'div' ).forEach( div => div.classList.remove( 'active' ) );

			userDiv.classList.add( 'active' );
		} );

		userContainer.appendChild( userDiv );
	}

	function handleDocIdInUrl() {
		let id = getDocIdFromUrl();

		if ( !id ) {
			id = randomString();
			updateDocIdInUrl( id );
		}

		return id;
	}

	function getUserInitials( name ) {
		return name.split( ' ', 2 ).map( part => part.charAt( 0 ) ).join( '' ).toUpperCase();
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

	function getStoredConfig() {
		return JSON.parse( localStorage.getItem( LOCAL_STORAGE_KEY ) || '{}' );
	}

	function storeConfig( csConfig ) {
		localStorage.setItem( LOCAL_STORAGE_KEY, JSON.stringify( csConfig ) );
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

	window.createDialog = createDialog;
}() );
