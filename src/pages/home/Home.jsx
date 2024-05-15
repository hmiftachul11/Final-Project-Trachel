import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { getBanners, getCategories, getPromos } from "../../api/api";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";

const Home = () => {
  const [banners, setBanners] = useState([]);
  const [categories, setCategories] = useState([]);
  const [promos, setPromos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bannersResponse = await getBanners();
        setBanners(bannersResponse.data.data);
        console.log("banner", bannersResponse.data.data);

        const categoriesResponse = await getCategories();
        setCategories(categoriesResponse.data.data);
        console.log("category", categoriesResponse.data.data);

        const promosResponse = await getPromos();
        setPromos(promosResponse.data.data);
        console.log("promo", promosResponse.data.data);
      } catch (error) {
        console.log(error);
      }
      AOS.init();
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {/* Header */}
      <div className="body pb-5">
        <div
          className="container pt-5"
          style={{ paddingBottom: "100px", marginTop: "80px" }}
        >
          <div className="row">
            <div className="col-lg-6 text-left" style={{ marginTop: "100px" }}>
              <p className="" style={{ fontSize: "60px", fontWeight: "bold" }}>
                Explore the world
                <br />
                with <span style={{ color: "#195786" }}> TRACHEL</span>
                <br />
              </p>
              <p>From Southeast Asia to the World, All Yours.</p>
              <LinkContainer to="/activity">
                <button
                  className="btn btn-blue"
                  data-aos="fade-right"
                  data-aos-duration="1100"
                >
                  Explore
                </button>
              </LinkContainer>
            </div>
            <div className="col-lg-6">
              <Carousel interval={4000} wrap={true} data-aos="zoom-in">
                {banners.slice(0, 3).map((banner, index) => (
                  <Carousel.Item key={index}>
                    <div
                      className="container travel-layout"
                      style={{
                        backgroundImage: `url(${banner.imageUrl})`,
                        height: "400px",
                      }}
                    >
                      <div className="row" style={{ height: "100%" }}>
                        {banner.title}
                      </div>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </div>
        </div>

        {/* Category */}
        <div className="body-category" style={{ paddingBottom: "70px" }}>
          <h2 className="category-header"> Travel Categories</h2>
          <div className="category-container">
            {categories.length > 0 ? (
              categories.map((category, index) => (
                <div
                  className="box-card"
                  key={index}
                  style={{ backgroundColor: category.color }}
                  onClick={() =>
                    navigate(`/activities-by-category/${category.id}`)
                  }
                >
                  <div className="card">
                    <img
                      src={category.imageUrl}
                      className="card-img-top"
                      alt={`${category.name}`}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{category.name}</h5>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Loading categories...</p>
            )}
          </div>
        </div>

        {/* Promo */}
        <div className="offer-home container">
          {promos.length > 0 ? (
            <div className="row">
              <div className="offer-header col-6">
                <h1 className="offer-title-1">{promos[0].title}</h1>
                <div className="pricing-1">
                  <p>{promos[0].description}</p>
                  <p>
                    from{" "}
                    <span className="price-1">
                      Rp.{promos[0].promo_discount_price}{" "}
                    </span>
                    / person
                  </p>
                </div>
                <LinkContainer to="/offer">
                  <button className="explore-button-1">Explore Offer</button>
                </LinkContainer>
              </div>
              <div className="images-wrapper-1 col-6">
                <div className="images-1 row">
                  <div className="col-6">
                    <img
                      src="https://elenpradera.com/wp-content/uploads/2018/12/DSC05684_LR_Blog.jpg"
                      alt="imagePromo1"
                      className="landscape1"
                    />
                    <img
                      src="https://www.indonesia.travel/content/dam/indtravelrevamp/en/destinations/revision-2019/all-revision-destination/bromo22.jpg"
                      alt="imagePromo2"
                      className="coastline"
                    />
                  </div>
                  <div className="hot-offer-wrapper col-6">
                    <img
                      src={promos[0].imageUrl}
                      alt="imagePromo3"
                      className="landscape2"
                    />
                    <span className="hot-offer-tag">HOT OFFER</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p>Loading promos...</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
