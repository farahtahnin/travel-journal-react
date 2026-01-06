import Japan from "/src/assets/japan.png";
import Marker from "/src/assets/marker.png";
export default function Entry(props) {
  return (
    <main>
      <div className="entry-item">
        <div className="image-container">
          <img src={props.img.src} alt={props.img.alt} />
        </div>
        <div className="location-container">
          <div className="location">
            <img className="location-marker" src={Marker} alt="marker" />
            <p className="location-country">{props.country}</p>
            <a className="location-googlemaplink" href={props.googleMapsLink}>
              View on Google Maps
            </a>
          </div>
          <div className="location-details">
            <h2 className="entry-location-title">{props.title}</h2>
            <p className="entry-location-dates">{props.dates}</p>
            <p className="entry-location-description">{props.text}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
