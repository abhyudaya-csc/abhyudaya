import currentSpons from "../Sponsors/CurrSpons";

const currentSponsors = currentSpons.map((sponsor) => ({
  name: sponsor.name,
  image: sponsor["spon-link"],
}));

export default currentSponsors;