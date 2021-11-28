import type { NextPage } from "next";
import { ButtonLink } from "../components/ButtonLink";

const Home: NextPage = () => {
  return (
    <>
      <section className="hero">
        <div className="hero__container">
          <h1 className="hero__title">
            <span>Great coffee</span> <span>made simple.</span>
          </h1>
          <p className="hero__paragraph">
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </p>
          <ButtonLink text={"Create your plan"} link={"#"} />
        </div>
      </section>
    </>
  );
};

export default Home;
