// Jsdom
import { jsdom } from 'jsdom';

// Setup jsdom browser environment
global.document = jsdom('<body></body>');
global.window = document.defaultView;
global.navigator = window.navigator;
