import 'item-quantity-dropdown/lib/item-quantity-dropdown.min.js';
import 'item-quantity-dropdown/lib/item-quantity-dropdown.min.css';
$(document).ready(() => {
    $('.iqdropdown').iqDropdown({ 


        seletionText: "2 спальни, 2 кровати...", 
        textPlural: "2 спальни, 2 кровати...",
        setSelectionText: (itemCount, totalItems) => {  },
        // fires when an item quantity changes
        onChange: (id, count, totalItems) => {},
        // return false to prevent an item decrement
        beforeDecrement: (id, itemCount) => {},
        // return false to prevent an item increment
        beforeIncrement: (id, itemCount) => {}
      

     });
  });