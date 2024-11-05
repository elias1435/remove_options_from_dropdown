// parent category is "parent-ctg" and the select class is "select-wrapper"
document.addEventListener("DOMContentLoaded", function() {
    // Select all dropdowns within the parent class "product_cat-2-ml-only"
    const dropdowns = document.querySelectorAll(".parent-ctg .select-wrapper");

    // Loop through each dropdown and filter options
    dropdowns.forEach(dropdown => {
        // Get all options in each dropdown
        const options = dropdown.querySelectorAll("option");

        // Loop through each option and remove those that do not contain "2 ml"
        options.forEach(option => {
            if (!option.textContent.includes("2 ml")) {
                option.remove();
            }
        });
    });
});
