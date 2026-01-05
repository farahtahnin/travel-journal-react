import Japan from "/src/assets/japan.png";
export default function Entry() {
  return (
    <main>
      <div className="country-details">
        <div className="image-container">
          <img className="image" src={Japan} alt="Japan" />
        </div>
        <div className="country-desc-container">
          <div className="small-country-desc">
            <p>Japan</p>
            <p>View Google Maps Link</p>
          </div>
          <div className="country-about">
            <h1>Mount Fuji</h1>
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
