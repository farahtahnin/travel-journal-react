import Header from "/src/components/Header";
import Entry from "/src/components/Entry";
import data from "./data";
export default function App() {
  const entryElements = data.map((entry) => {
    return (
      <Entry
        id={entry.id}
        img={entry.img}
        title={entry.title}
        dates={entry.dates}
        country={entry.country}
        googleMapsLink={entry.googleMapsLink}
        text={entry.text}
      />
    );
  });
  return (
    <>
      <Header />
      {entryElements}
    </>
  );
}
