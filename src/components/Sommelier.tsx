import { Beer } from "../types/types";

type SommelierProps = {
  beers: Beer[];
};

const Sommelier = ({ beers }: SommelierProps) => {
  return <div>Sommelier</div>;
};

export default Sommelier;
