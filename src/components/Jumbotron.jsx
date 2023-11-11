import PropTypes from "prop-types";

Jumbotron.propTypes = {
  children: PropTypes.node,
};

function Jumbotron() {
  return (
    <section
      id="jumbotron"
      className="h-screen w-screen bg-[url('./images/food-delivery-2.jpg')] bg-cover bg-bottom"
    >
      <div className="h-full w-full bg-gradient-to-t from-black/[35%] from-10% via-black/20 via-50% to-black/[35%] to-90% lg:via-black/30 lg:via-50% lg:to-black/[35%] lg:to-90%">
        <h1 className="absolute bottom-[10%] right-9 font-sans text-3xl font-bold leading-snug text-slate-50 sm:text-5xl sm:leading-snug lg:text-6xl lg:leading-snug xl:text-7xl xl:leading-snug">
          99 countries. <br />
          100+ products. <br />
          1 leading <br />
          on-demand app.
        </h1>
      </div>
    </section>
  );
}

export default Jumbotron;
