document.addEventListener("DOMContentLoaded", function () {
    


    console.log("JavaScript Loaded!"); // Debugging step
    
    const eventCards = document.querySelectorAll(".event-card");
    
    eventCards.forEach(card => {
        card.addEventListener("click", function () {
            console.log("Clicked on: ", this);
            
            // Check if the clicked card is already expanded
            const isExpanded = this.classList.contains("expanded");
            
            // Collapse all cards
            eventCards.forEach(c => {
                c.classList.remove("expanded");
                c.style.maxWidth = "300px"; // Reset size for all cards
                const details = c.querySelector(".event-details");
                if (details) details.remove();
            });
            
            // If it was not expanded, expand it with details
            if (!isExpanded) {
                this.classList.add("expanded");
                this.style.maxWidth = "90%"; // Make it more readable on mobile
                
                // Get event details from the dataset
                const aboutEvent = this.dataset.about || "About the Event";
                const eventDescription = this.dataset.description || "Event Description";
                
                const eventLink = this.dataset.link || "#";
                const rulebookLink = this.dataset.rulebook || "#";

                console.log("About:", aboutEvent);
                console.log("Description:", eventDescription);
                
                console.log("Link:", eventLink);
                console.log("Rulebook Link:", rulebookLink);

                // Create the details section inside the clicked event card
                const detailsDiv = document.createElement("div");
                detailsDiv.classList.add("event-details");
                detailsDiv.innerHTML = `
                    <h2>${aboutEvent}</h2>
                    <p>${eventDescription}</p>
                    
                    
                    <button onclick="window.open('${eventLink}', '_blank')">Register</button>
                     <button onclick="window.open('${rulebookLink}', '_blank')">Rulebook</button>
                `;
                
                this.appendChild(detailsDiv);
                console.log("Details added to:", this);
            }

        });
    });
    
    
});

