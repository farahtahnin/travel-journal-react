import Japan from "/src/assets/japan.png";
import Marker from "/src/assets/marker.png";
export default function Entry() {
  return (
    <main>
      <div className="entry-item">
        <div className="image-container">
          <img src={Japan} alt="Japan" />
        </div>
        <div className="location-container">
          <div className="location">
            <img className="location-marker" src={Marker} alt="marker" />
            <p className="location-country">JAPAN</p>
            <a
              className="location-googlemaplink"
              href="https://maps.app.goo.gl/6RLYZDuuuqJ7kNGZ9"
            >
              View on Google Maps
            </a>
          </div>
          <div className="location-details">
            <h2 className="entry-location-title">Mount Fuji</h2>
            <p className="entry-location-dates">12 Jan, 2023 - 24 Jan, 2023</p>
            <p className="entry-location-description">
              Mount Fuji is the tallest mountain in Japan, standing at 3,776
              meters (12,380 feet). Mount Fuji is the single most popular
              tourist site in Japan, for both Japanese and foreign tourists.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
