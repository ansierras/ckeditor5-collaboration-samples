<!--
    Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
    This file is licensed under the terms of the MIT License (see LICENSE.md).
-->
<template>
	<div class="App">
		<sample-header />
		<main>
			<div class="message">
				<div class="centered">
					<h2>CKEditor 5 Vue integration of classic editor with real-time collaboration</h2>
					<p>
						Open this sample in another browser tab to start collaborative editing.
					</p>
				</div>
			</div>
			<div class="centered">
				<div class="row row-editor">
					<ckeditor
						v-if="isLayoutReady"
						v-model="initialData"
						@change="( event, editor ) => console.log( { event, editor } )"
						:editor="classicEditor"
						:config="config"
					/>
					<div class="sidebar-container">
						<div ref="presenceListElement" class="presence"></div>
						<div ref="sidebarElement" class="sidebar"></div>
					</div>
				</div>
			</div>
		</main>
		<sample-footer />
	</div>
</template>

<script>
import SampleFooter from './sample-footer';
import SampleHeader from './sample-header';

import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import PresenceList from '@ckeditor/ckeditor5-real-time-collaboration/src/presencelist';
import RealTimeCollaborativeComments from '@ckeditor/ckeditor5-real-time-collaboration/src/realtimecollaborativecomments';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';

export default {
	name: 'sample',
	components: { SampleHeader, SampleFooter },
	props: [ 'configuration' ],
	data() {
		return {
			isLayoutReady: false,
			classicEditor: ClassicEditor,
			initialData: `
                	<h2>Bilingual Personality Disorder</h2>

	            	<figure class="image image-style-side">
		            	<img alt="" src="https://c.cksource.com/a/1/img/docs/sample-image-bilingual-personality-disorder.jpg">
		            	<figcaption>
			            	One language, one person.
		            	</figcaption>
	            	</figure>

	            	<p>
		            	This may be the first time you hear about this made-up disorder but it actually isn’t so far from the truth. Even the studies
		            	that were conducted almost half a century show that <strong>the language you speak has more effects on you then you realise</strong>.
	            	</p>
	            	<p>
		            	One of the very first experiments conducted on this topic dates back to 1964.
		            	<a href="https://www.researchgate.net/publication/9440038_Language_and_TAT_content_in_bilinguals">In the experiment</a>
		            	designed by linguist Ervin-Tripp who is an expert in psycholinguistic and sociolinguistic studies, adults who are bilungual
		            	in English in French were showed series of pictures and were asked to create 3-minute stories. In the end participants emphasized
		            drastically different dynamics for stories in English and French.
                	</p>
                	<p>
                    	Another ground-breaking experiment which included bilingual Japanese women married to American men in San Francisco were asked
                    	to complete sentences. The goal of the experiment was to investigate whether or not human feelings and thoughts are expressed
                    	differently in <strong>different language mindsets</strong>.
                	</p>
                	<p>Here is a sample from the the experiment:</p>

                	<table>
                    	<thead>
                        	<tr>
                            	<th></th>
                            	<th>English</th>
                            	<th>Japanese</th>
                        	</tr>
                    	</thead>
                    	<tbody>
                        	<tr>
                            	<td>Real friends should</td>
                            	<td>Be very frank</td>
                            	<td>Help each other</td>
                        	</tr>
                        	<tr>
                            	<td>I will probably become</td>
                            	<td>A teacher</td>
                            	<td>A housewife</td>
                        	</tr>
                        	<tr>
                            	<td>When there is a conflict with family</td>
                            	<td>I do what I want</td>
                            	<td>It's a time of great unhappiness</td>
                        	</tr>
                    	</tbody>
                	</table>

                	<p>
                    	More recent <a href="https://books.google.pl/books?id=1LMhWGHGkRUC">studies</a> show, the language a person speaks affects
                    	their cognition, behaviour, emotions and hence <strong>their personality</strong>. This shouldn’t come as a surprise
                    	<a href="https://en.wikipedia.org/wiki/Lateralization_of_brain_function">since wealready know</a> that different regions
                    	of the brain become more active depending on the person’s activity at hand. Since structure, information and especially
                    	<strong>the culture</strong> of languages varies substantially and the language a person speaks is an essential element of daily life.
                	</p>
            	`,
			config: {
				plugins: [
					Alignment,
					Autoformat,
					BlockQuote,
					Bold,
					CKFinder,
					EasyImage,
					Essentials,
					FontFamily,
					FontSize,
					Heading,
					Highlight,
					Image,
					ImageCaption,
					ImageStyle,
					ImageToolbar,
					ImageUpload,
					Italic,
					Link,
					List,
					MediaEmbed,
					Paragraph,
					PasteFromOffice,
					PresenceList,
					RealTimeCollaborativeComments,
					RemoveFormat,
					Strikethrough,
					Table,
					TableToolbar,
					Underline,
					UploadAdapter
				],
				toolbar: [
					'heading',
					'|',
					'fontsize',
					'fontfamily',
					'|',
					'bold',
					'italic',
					'underline',
					'strikethrough',
					'removeFormat',
					'highlight',
					'|',
					'alignment',
					'|',
					'numberedList',
					'bulletedList',
					'|',
					'link',
					'blockquote',
					'imageUpload',
					'insertTable',
					'mediaEmbed',
					'|',
					'undo',
					'redo',
					'|',
					'comment'
				],
				cloudServices: {
					tokenUrl: this.configuration.tokenUrl,
					uploadUrl: this.configuration.uploadUrl,
					webSocketUrl: this.configuration.webSocketUrl,
					documentId: this.configuration.documentId
				},
				image: {
					toolbar: [
						'imageStyle:full',
						'imageStyle:side',
						'|',
						'imageTextAlternative',
						'|',
						'comment'
					]
				},
				table: {
					contentToolbar: [
						'tableColumn',
						'tableRow',
						'mergeTableCells'
					],
					tableToolbar: [ 'comment' ]
				},
				mediaEmbed: {
					toolbar: [ 'comment' ]
				},
				sidebar: {
					container: null
				},
				presenceList: {
					container: null
				}
			}
		};
	},
	mounted() {
		// You need this to render the <ckeditor /> component after the layout is ready.
		// <ckeditor /> needs HTML elements of `Sidebar` and `PresenceList` plugins provided through
		// the `config` property and you have to ensure that both are already rendered.
		this.config.presenceList.container = this.$refs.presenceListElement;
		this.config.sidebar.container = this.$refs.sidebarElement;

		// Do not render the <ckeditor /> component before the layout is ready.
		this.isLayoutReady = true;
	}
};
</script>
