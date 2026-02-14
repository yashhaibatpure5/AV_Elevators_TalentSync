
// this is for search-box suggestios for products
const products = [
    { name: "Gearless Elevators", link: "passenger-elevators.html#gearless" },
    { name: "Cargo Lifts", link: "hydraulic-lifts.html#cargo" },
    { name: "Villa Elevators", link: "home-lifts.html#villa" },
    { name: "Hospital Elevators", link: "hospital-service-lifts.html#hospital" },

    { name: "MRL Elevators", link: "passenger-elevators.html#mrl" },
    { name: "High-Speed Elevators", link: "passenger-elevators.html#highspeed" },
    { name: "Residential Elevators", link: "passenger-elevators.html#residential" },
    { name: "Commercial Elevators", link: "passenger-elevators.html#commercial" },
    { name: "Glass Elevators", link: "passenger-elevators.html#glass" },
    { name: "Capsule Elevators", link: "passenger-elevators.html#capsule" },
    { name: "Machine Room Elevators", link: "passenger-elevators.html#machine-room" },
    { name: "Observation Elevators", link: "passenger-elevators.html#observation" },
    { name: "Panoramic Elevators", link: "passenger-elevators.html#panoramic" },
    
    { name: "Vehicle Lifts", link: "hydraulic-lifts.html#vehicle" },
    { name: "Industrial Lifts", link: "hydraulic-lifts.html#industrial" },
    { name: "Goods Lifts", link: "hydraulic-lifts.html#goods" },
    { name: "Platform Lifts", link: "hydraulic-lifts.html#platform" },
    { name: "Scissor Lifts", link: "hydraulic-lifts.html#scissor" },
    { name: "Dock Levelers", link: "hydraulic-lifts.html#dock" },
    { name: "Warehouse Lifts", link: "hydraulic-lifts.html#warehouse" },
    { name: "Automobile Lifts", link: "hydraulic-lifts.html#automobile" },
    { name: "Freight Elevators", link: "hydraulic-lifts.html#freight" },
    
    { name: "Compact Home Lifts", link: "home-lifts.html#compact" },
    { name: "Luxury Home Lifts", link: "home-lifts.html#luxury" },
    { name: "Wheelchair Lifts", link: "home-lifts.html#wheelchair" },
    { name: "Stair Lifts", link: "home-lifts.html#stair" },
    { name: "Dumbwaiter Lifts", link: "home-lifts.html#dumbwaiter" },
    { name: "Outdoor Lifts", link: "home-lifts.html#outdoor" },
    { name: "Duplex Lifts", link: "home-lifts.html#duplex" },
    { name: "Bungalow Lifts", link: "home-lifts.html#bungalow" },
    { name: "Custom Home Lifts", link: "home-lifts.html#custom-home" },
    
{ name: "Bed Elevators", link: "hospital-service-lifts.html#bed" },
{ name: "Service Elevators", link: "hospital-service-lifts.html#service" },
{ name: "Stretcher Lifts", link: "hospital-service-lifts.html#stretcher" },
{ name: "Medical Elevators", link: "hospital-service-lifts.html#medical" },
{ name: "Firefighter Elevators", link: "hospital-service-lifts.html#firefighter" },
{ name: "Emergency Lifts", link: "hospital-service-lifts.html#emergency" },
{ name: "Hotel Elevators", link: "hospital-service-lifts.html#hotel" },
{ name: "Shopping Mall Lifts", link: "hospital-service-lifts.html#mall" },
{ name: "Office Building Lifts", link: "hospital-service-lifts.html#office" },
];

// Hide Suggestions When Clicking Outside
if (!searchBox.contains(e.target)) {
    searchBox.classList.remove("active");
    searchInput.value = "";
    suggestions.style.display = "none";
}

