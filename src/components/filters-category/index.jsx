import React from "react";
function Components(){
    return(
        <div className="category-filters filters">
        <h2>Category</h2>
    <div>
        <ul>
            <li><input className="category-checkbox" type="checkbox" id="monitors" name="monitors"></input>
                <label htmlFor="monitors">Monitors</label></li>
            <li><input className="category-checkbox" type="checkbox" id="laptops" name="laptops"></input>
                <label htmlFor="laptops">Laptops</label></li>
            <li><input className="category-checkbox" type="checkbox" id="video_cards" name="video-cards"></input>
                <label htmlFor="video_cards">Video cards</label></li>
            <li><input className="category-checkbox" type="checkbox" id="gaming_keyboards"
                       name="gaming-keyboards"></input>
                <label htmlFor="gaming_keyboards">Gaming keyboards</label></li>
            <li><input className="category-checkbox" type="checkbox" id="computer_mouse" name="computer mouse"></input>
                <label htmlFor="computer_mouse">Scales</label></li>
            <li><input className="category-checkbox" type="checkbox" id="ssd" name="ssd"></input>
                <label htmlFor="ssd">SSD</label></li>
            <li><input className="category-checkbox" type="checkbox" id="sound_cards" name="sound-cards"></input>
                <label htmlFor="sound_cards">Sound cards</label></li>
            <li><input className="category-checkbox" type="checkbox" id="ram" name="ram"></input>
                <label htmlFor="ram">RAM</label></li>
        </ul>
    </div>
        </div>
)
}
export default Components