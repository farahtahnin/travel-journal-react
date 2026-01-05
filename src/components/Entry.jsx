import Japan from "/src/assets/japan.png";
export default function Entry() {
  return (
    <main>
      <div className="entry-item">
        <div className="image-container">
          <img src={Japan} alt="Japan" />
        </div>
        <div className="location-container">
          <div className="location">
            <p>JAPAN</p>
            <a href="https://maps.app.goo.gl/6RLYZDuuuqJ7kNGZ9">
              View on Google Maps
            </a>
          </div>
          <div className="location-details">
            <h2>Mount Fuji</h2>
            <h3>12 Jan, 2023 - 24 Jan, 2023</h3>
            <p>
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
