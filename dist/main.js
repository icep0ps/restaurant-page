/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules.js":
/*!************************!*\
  !*** ./src/modules.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contact": () => (/* binding */ contact),
/* harmony export */   "home": () => (/* binding */ home),
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });


const body = document.querySelector('.content')

const home = (() =>{

    const homepage = document.createElement('div')
    homepage.classList.add('home')
    body.append(homepage)

    const pageHeader = document.createElement('div');
    pageHeader.classList.add('text')
    homepage.append(pageHeader)

    const title = document.createElement('h1')
    pageHeader.append(title)
    title.textContent = 'We are a coffee shop'

    const subTitle = document.createElement('p')
    pageHeader.append(subTitle)
    subTitle.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aliquid laudantium corporis quam officia corrupti, voluptates laborum deleniti perferendis quisquam, doloremque eveniet. Suscipit, quia natus et ipsa vitae autem commodi!'

    const button = document.createElement('button')
    pageHeader.append(button)
    button.textContent = 'Order now!'


})


const menu = (() => {

    const menuPage = document.createElement('div')
    menuPage.classList.add('info')
    body.append(menuPage)

    const title = document.createElement('h1')
    menuPage.append(title)
    title.textContent = 'Available meals!'

    const subTitle = document.createElement('p')
    menuPage.append(subTitle)
    subTitle.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea alias quasi quas illo ab tenetur, veniam id at totam rem fuga asperiores autem debitis quam ipsa earum. Rerum, consequuntur voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fuga laborum eligendi reprehenderit quasi libero doloribus, nostrum sunt dicta sint ipsam! Quod placeat animi voluptatum, dolorum dolor autem inventore tempora?'

    const food = document.createElement('div')
    food.classList.add('food')
    menuPage.append(food)

    for(let x =0;x < 6; x++){
    const item = document.createElement('div')
    item.classList.add('item')
    const itemName = document.createElement('h1')
    itemName.textContent = 'Chicken sandwich'
    item.append(itemName)
    const itemInfo = document.createElement('p')
    itemInfo.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsum sit neque animi! Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    item.append(itemInfo)
    const itemPrice = document.createElement('h2')
    itemPrice.textContent = '$ 8.90'
    item.append(itemPrice)

    food.append(item)
    }

})

const contact = (()=>{

const contactPage = document.createElement('div')
contactPage.classList.add('info')
body.append(contactPage)

const title = document.createElement('h1')
contactPage.append(title)
title.textContent = 'Contact Us!'

const subTitle = document.createElement('p')
contactPage.append(subTitle)
subTitle.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea alias quasi quas illo ab tenetur, veniam id at totam rem fuga asperiores autem debitis quam ipsa earum. Rerum, consequuntur voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fuga'

const contacts = document.createElement('div')
contacts.classList.add('con')
contactPage.append(contacts)

const telephoneNumber = document.createElement('p')
contacts.append(telephoneNumber)
telephoneNumber.textContent ='Telephone : +12 012313223'


const email = document.createElement('p')
contacts.append(email)
email.textContent ='Email: coffeeshop@email.com'

const locations = document.createElement('p')
contacts.append(locations)
locations.textContent ='Location: Harare'

const country = document.createElement('p')
contacts.append(country)
country.textContent ='Country: Zimbabwe, South Africa'


})



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules */ "./src/modules.js");


(0,_modules__WEBPACK_IMPORTED_MODULE_0__.home)()

function clearDOM(button) {

    const content = document.querySelector('.content')
    const divs = content.querySelectorAll('div')
    for (let i = 0; i < divs.length; i++) {
        let classNames = divs[i].getAttribute('class')
        if (classNames != 'nav') {
            divs[i].remove()
        }
    }
    switch (button) {
        case 'home': (0,_modules__WEBPACK_IMPORTED_MODULE_0__.home)()
            break;
        case 'menu': (0,_modules__WEBPACK_IMPORTED_MODULE_0__.menu)()
            break;
        case 'contact': (0,_modules__WEBPACK_IMPORTED_MODULE_0__.contact)()
            break;
    }


}

const next = document.querySelectorAll('.buttons')
const buttons = Array.from(next)

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', e=>{
        clearDOM(buttons[i].getAttribute('id'))
    })

}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7VUN2R0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05nRDtBQUNoRDtBQUNBLDhDQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpQkFBaUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDhDQUFJO0FBQ3pCO0FBQ0EscUJBQXFCLDhDQUFJO0FBQ3pCO0FBQ0Esd0JBQXdCLGlEQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0JBQW9CO0FBQ25DO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXHJcblxyXG5jb25zdCBob21lID0gKCgpID0+e1xyXG5cclxuICAgIGNvbnN0IGhvbWVwYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGhvbWVwYWdlLmNsYXNzTGlzdC5hZGQoJ2hvbWUnKVxyXG4gICAgYm9keS5hcHBlbmQoaG9tZXBhZ2UpXHJcblxyXG4gICAgY29uc3QgcGFnZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcGFnZUhlYWRlci5jbGFzc0xpc3QuYWRkKCd0ZXh0JylcclxuICAgIGhvbWVwYWdlLmFwcGVuZChwYWdlSGVhZGVyKVxyXG5cclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxyXG4gICAgcGFnZUhlYWRlci5hcHBlbmQodGl0bGUpXHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdXZSBhcmUgYSBjb2ZmZWUgc2hvcCdcclxuXHJcbiAgICBjb25zdCBzdWJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgcGFnZUhlYWRlci5hcHBlbmQoc3ViVGl0bGUpXHJcbiAgICBzdWJUaXRsZS50ZXh0Q29udGVudCA9ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBdXRlbSBhbGlxdWlkIGxhdWRhbnRpdW0gY29ycG9yaXMgcXVhbSBvZmZpY2lhIGNvcnJ1cHRpLCB2b2x1cHRhdGVzIGxhYm9ydW0gZGVsZW5pdGkgcGVyZmVyZW5kaXMgcXVpc3F1YW0sIGRvbG9yZW1xdWUgZXZlbmlldC4gU3VzY2lwaXQsIHF1aWEgbmF0dXMgZXQgaXBzYSB2aXRhZSBhdXRlbSBjb21tb2RpISdcclxuXHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgcGFnZUhlYWRlci5hcHBlbmQoYnV0dG9uKVxyXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ09yZGVyIG5vdyEnXHJcblxyXG5cclxufSlcclxuXHJcblxyXG5jb25zdCBtZW51ID0gKCgpID0+IHtcclxuXHJcbiAgICBjb25zdCBtZW51UGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBtZW51UGFnZS5jbGFzc0xpc3QuYWRkKCdpbmZvJylcclxuICAgIGJvZHkuYXBwZW5kKG1lbnVQYWdlKVxyXG5cclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxyXG4gICAgbWVudVBhZ2UuYXBwZW5kKHRpdGxlKVxyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnQXZhaWxhYmxlIG1lYWxzISdcclxuXHJcbiAgICBjb25zdCBzdWJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgbWVudVBhZ2UuYXBwZW5kKHN1YlRpdGxlKVxyXG4gICAgc3ViVGl0bGUudGV4dENvbnRlbnQgPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIsIGFkaXBpc2ljaW5nIGVsaXQuIEVhIGFsaWFzIHF1YXNpIHF1YXMgaWxsbyBhYiB0ZW5ldHVyLCB2ZW5pYW0gaWQgYXQgdG90YW0gcmVtIGZ1Z2EgYXNwZXJpb3JlcyBhdXRlbSBkZWJpdGlzIHF1YW0gaXBzYSBlYXJ1bS4gUmVydW0sIGNvbnNlcXV1bnR1ciB2b2x1cHRhdGVtLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBOZXNjaXVudCBmdWdhIGxhYm9ydW0gZWxpZ2VuZGkgcmVwcmVoZW5kZXJpdCBxdWFzaSBsaWJlcm8gZG9sb3JpYnVzLCBub3N0cnVtIHN1bnQgZGljdGEgc2ludCBpcHNhbSEgUXVvZCBwbGFjZWF0IGFuaW1pIHZvbHVwdGF0dW0sIGRvbG9ydW0gZG9sb3IgYXV0ZW0gaW52ZW50b3JlIHRlbXBvcmE/J1xyXG5cclxuICAgIGNvbnN0IGZvb2QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgZm9vZC5jbGFzc0xpc3QuYWRkKCdmb29kJylcclxuICAgIG1lbnVQYWdlLmFwcGVuZChmb29kKVxyXG5cclxuICAgIGZvcihsZXQgeCA9MDt4IDwgNjsgeCsrKXtcclxuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdpdGVtJylcclxuICAgIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxyXG4gICAgaXRlbU5hbWUudGV4dENvbnRlbnQgPSAnQ2hpY2tlbiBzYW5kd2ljaCdcclxuICAgIGl0ZW0uYXBwZW5kKGl0ZW1OYW1lKVxyXG4gICAgY29uc3QgaXRlbUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIGl0ZW1JbmZvLnRleHRDb250ZW50ID0gJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFV0IGlwc3VtIHNpdCBuZXF1ZSBhbmltaSEgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4nXHJcbiAgICBpdGVtLmFwcGVuZChpdGVtSW5mbylcclxuICAgIGNvbnN0IGl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcclxuICAgIGl0ZW1QcmljZS50ZXh0Q29udGVudCA9ICckIDguOTAnXHJcbiAgICBpdGVtLmFwcGVuZChpdGVtUHJpY2UpXHJcblxyXG4gICAgZm9vZC5hcHBlbmQoaXRlbSlcclxuICAgIH1cclxuXHJcbn0pXHJcblxyXG5jb25zdCBjb250YWN0ID0gKCgpPT57XHJcblxyXG5jb25zdCBjb250YWN0UGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbmNvbnRhY3RQYWdlLmNsYXNzTGlzdC5hZGQoJ2luZm8nKVxyXG5ib2R5LmFwcGVuZChjb250YWN0UGFnZSlcclxuXHJcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxyXG5jb250YWN0UGFnZS5hcHBlbmQodGl0bGUpXHJcbnRpdGxlLnRleHRDb250ZW50ID0gJ0NvbnRhY3QgVXMhJ1xyXG5cclxuY29uc3Qgc3ViVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuY29udGFjdFBhZ2UuYXBwZW5kKHN1YlRpdGxlKVxyXG5zdWJUaXRsZS50ZXh0Q29udGVudCA9ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciwgYWRpcGlzaWNpbmcgZWxpdC4gRWEgYWxpYXMgcXVhc2kgcXVhcyBpbGxvIGFiIHRlbmV0dXIsIHZlbmlhbSBpZCBhdCB0b3RhbSByZW0gZnVnYSBhc3BlcmlvcmVzIGF1dGVtIGRlYml0aXMgcXVhbSBpcHNhIGVhcnVtLiBSZXJ1bSwgY29uc2VxdXVudHVyIHZvbHVwdGF0ZW0uIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE5lc2NpdW50IGZ1Z2EnXHJcblxyXG5jb25zdCBjb250YWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbmNvbnRhY3RzLmNsYXNzTGlzdC5hZGQoJ2NvbicpXHJcbmNvbnRhY3RQYWdlLmFwcGVuZChjb250YWN0cylcclxuXHJcbmNvbnN0IHRlbGVwaG9uZU51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG5jb250YWN0cy5hcHBlbmQodGVsZXBob25lTnVtYmVyKVxyXG50ZWxlcGhvbmVOdW1iZXIudGV4dENvbnRlbnQgPSdUZWxlcGhvbmUgOiArMTIgMDEyMzEzMjIzJ1xyXG5cclxuXHJcbmNvbnN0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbmNvbnRhY3RzLmFwcGVuZChlbWFpbClcclxuZW1haWwudGV4dENvbnRlbnQgPSdFbWFpbDogY29mZmVlc2hvcEBlbWFpbC5jb20nXHJcblxyXG5jb25zdCBsb2NhdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuY29udGFjdHMuYXBwZW5kKGxvY2F0aW9ucylcclxubG9jYXRpb25zLnRleHRDb250ZW50ID0nTG9jYXRpb246IEhhcmFyZSdcclxuXHJcbmNvbnN0IGNvdW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuY29udGFjdHMuYXBwZW5kKGNvdW50cnkpXHJcbmNvdW50cnkudGV4dENvbnRlbnQgPSdDb3VudHJ5OiBaaW1iYWJ3ZSwgU291dGggQWZyaWNhJ1xyXG5cclxuXHJcbn0pXHJcblxyXG5leHBvcnQge2hvbWUsIG1lbnUsIGNvbnRhY3R9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBob21lLCBtZW51LCBjb250YWN0IH0gZnJvbSBcIi4vbW9kdWxlc1wiO1xyXG5cclxuaG9tZSgpXHJcblxyXG5mdW5jdGlvbiBjbGVhckRPTShidXR0b24pIHtcclxuXHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxyXG4gICAgY29uc3QgZGl2cyA9IGNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2JylcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGl2cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBjbGFzc05hbWVzID0gZGl2c1tpXS5nZXRBdHRyaWJ1dGUoJ2NsYXNzJylcclxuICAgICAgICBpZiAoY2xhc3NOYW1lcyAhPSAnbmF2Jykge1xyXG4gICAgICAgICAgICBkaXZzW2ldLnJlbW92ZSgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3dpdGNoIChidXR0b24pIHtcclxuICAgICAgICBjYXNlICdob21lJzogaG9tZSgpXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ21lbnUnOiBtZW51KClcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnY29udGFjdCc6IGNvbnRhY3QoKVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5jb25zdCBuZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1dHRvbnMnKVxyXG5jb25zdCBidXR0b25zID0gQXJyYXkuZnJvbShuZXh0KVxyXG5cclxuZm9yKGxldCBpID0gMDsgaSA8IGJ1dHRvbnMubGVuZ3RoOyBpKyspe1xyXG4gICAgYnV0dG9uc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGU9PntcclxuICAgICAgICBjbGVhckRPTShidXR0b25zW2ldLmdldEF0dHJpYnV0ZSgnaWQnKSlcclxuICAgIH0pXHJcblxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==