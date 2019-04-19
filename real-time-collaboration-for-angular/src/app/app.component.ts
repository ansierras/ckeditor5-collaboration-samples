import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CloudServicesConfig } from './editor/common-interfaces';

const LOCAL_STORAGE_KEY = 'CKEDITOR_CS_CONFIG';

@Component( {
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
} )
export class AppComponent {
	@ViewChild( 'form' ) public form?: NgForm;

	public configurationSet = false;
	public users = getUsers();
	public documentId = handleDocIdInUrl();
	public config = getStoredConfig();

	public selectedUser?: string;

	public handleSubmit() {
		if ( !this.form || !this.form.valid ) {
			return;
		}

		setStoredConfig( {
			tokenUrl: getRawTokenUrl( this.config.tokenUrl ),
			uploadUrl: this.config.uploadUrl,
			webSocketUrl: this.config.webSocketUrl
		} );

		updateDocIdInUrl( this.documentId );

		this.configurationSet = true;

	}

	public resetSelectedUser() {
		this.selectedUser = undefined;
	}

	public selectUser( user: User ) {
		this.selectedUser = user.id;

		const keys = Object.keys( user ) as ( keyof User )[];

		const tokenUrl = `${ getRawTokenUrl( this.config.tokenUrl ) }?` + keys
			.filter( key => user[ key ] )
			.map( key => `user.${ key }=${ user[ key ] }` )
			.join( '&' );

		this.config.tokenUrl = tokenUrl;
	}

	public isCloudServicesTokenEndpoint() {
		return isCloudServicesTokenEndpoint( this.config.tokenUrl );
	}

	public getUserInitials( name: string ) {
		return name.split( ' ', 2 ).map( part => part.charAt( 0 ) ).join( '' ).toUpperCase();
	}
}

function getUsers(): User[] {
	return [
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
}

interface User {
	id: string;
	name?: string;
	avatar?: string;
}

function handleDocIdInUrl() {
	let id = getDocIdFromUrl();

	if ( !id ) {
		id = randomString();
		updateDocIdInUrl( id );
	}

	return id;
}

function getDocIdFromUrl() {
	const docIdMatch = location.search.match( /docId=(.+)$/ );

	return docIdMatch ? decodeURIComponent( docIdMatch[ 1 ] ) : null;
}

function randomString() {
	return Math.floor( Math.random() * Math.pow( 2, 52 ) ).toString( 32 );
}

function setStoredConfig( csConfig: CloudServicesConfig ) {
	localStorage.setItem( LOCAL_STORAGE_KEY, JSON.stringify( csConfig ) );
}

function updateDocIdInUrl( id: string ) {
	window.history.replaceState( {}, document.title, generateUrlWithDocId( id ) );
}

function generateUrlWithDocId( id: string ) {
	return `${ window.location.href.split( '?' )[ 0 ] }?docId=${ id }`;
}

function getRawTokenUrl( url: string ) {
	if ( isCloudServicesTokenEndpoint( url ) ) {
		return url.split( '?' )[ 0 ];
	}

	return url;
}

function isCloudServicesTokenEndpoint( tokenUrl: string ) {
	return /cke-cs[\w-]*\.com\/token\/dev/.test( tokenUrl );
}

function getStoredConfig(): CloudServicesConfig {
	const config = JSON.parse( localStorage.getItem( LOCAL_STORAGE_KEY ) || '{}' );

	return {
		tokenUrl: config.tokenUrl || '',
		uploadUrl: config.uploadUrl || '',
		webSocketUrl: config.webSocketUrl || ''
	};
}
