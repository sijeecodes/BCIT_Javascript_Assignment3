"use strict";

// You have 2 options:
// a. Work on the "scripts.js" file inside the "scripts" folder
// b. Create your own "scripts.js" file and replace the file inside the "scripts" folder

// Predefine base variables for key DOM elements
let mainImage = document.getElementById("main-image");
let imageDescription = document.getElementById("image-description");
let thumbnailsContainer = document.getElementById("thumbnails-container");
let currentIndex = 0;

/**
 * Get currently visible thumbnails by filtering based on CSS display style
 */
function getVisibleThumbnails() {
  // Convert NodeList to array for easier handling
  // Return only thumbnails that are not hidden
}

/**
 * Setup the gallery:
 * - Add event listeners for thumbnail clicks
 * - Select first visible thumbnail to initialize
 * - Update gallery stats
 */

  // Add click listener to select thumbnail on click
    

  // Select the first visible thumbnail
  

  // Update gallery statistics
  


/**
 * Select a thumbnail programmatically:
 * - Remove active class from all thumbnails
 * - Add active class to selected thumbnail
 * - Update main image src, alt text, and description
 * - Track current selected index
 */


/**
 * Previous button: navigate to previous visible thumbnail (wrap around)
 */


/**
 * Next button: navigate to next visible thumbnail (wrap around)
 */


/**
 * Category filter buttons:
 * - Show/hide thumbnails based on category class
 * - Highlight active filter
 * - Select first visible thumbnail post-filter
 * - Update stats
 */

    // Remove active class from all buttons
    
    // Add active class to clicked button
    

/**
 * Delete button:
 * - Remove currently selected thumbnail
 * - Select next visible thumbnail or show fallback message
 * - Update stats
 */

/**
 * Shuffle button:
 * - Randomly rearrange thumbnails in the DOM
 * - Select first visible thumbnail after shuffle
 * - Update stats
 */


/**
 * Add Image button:
 * - Prompt user to enter image URL, description, and category
 * - Validate inputs and create thumbnail element with category class
 * - Add thumbnail to the gallery and set up click listener
 */


  // Validate category is one of the existing ones...
  

/**
 * Update gallery stats:
 * - Total thumbnails count
 * - Visible thumbnails count
 */


/**
 * Initialize gallery when DOM is fully loaded
 */

