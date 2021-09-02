import * as React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ProTip from "../src/ProTip";
import Link from "../src/Link";
import Copyright from "../src/Copyright";
import Slider from "react-slick";
import Image from "next/image";
import { withStyles } from "@material-ui/styles";
import dbConnect from "../src/dbConnect";
import Xinhua from '../src/xinhua.model'

// const images = [
//   "http://www.xinhuanet.com/titlepic/112777/127775681_1629345352511_title0h.png", 
//   "http://news.xinhuanet.com/titlepic/112777/1127774489_1629333749644_title0h.jpg", 
//   "http://www.xinhuanet.com/titlepic/112777/1127776734_1629365700034_title0h.gif", 
//   "http://www.xinhuanet.com/titlepic/112777/1127777298_1629370161145_title0h.jpg", 
//   "http://news.xinhuanet.com/titlepic/112776/1127763370_1629032189446_title0h.JPG", 
//   "http://www.xinhuanet.com/titlepic/112777/1127777621_1629378221714_title0h.png", 
//   "http://news.xinhuanet.com/titlepic/112775/1127758255_1628836279961_title0h.jpg", 
//   "http://news.xinhuanet.com/titlepic/112777/1127773752_1629340819107_title0h.jpg", 
//   "http://www.xinhuanet.com/titlepic/112777/1127776716_1629361243289_title0h.jpg", 
//   "http://www.xinhuanet.com/titlepic/112777/1127776013_1629351332492_title0h.jpg", 
//   "http://news.xinhuanet.com/titlepic/112777/1127775943_1629348310853_title0h.png", 
//   "http://www.xinhuanet.com/titlepic/112777/1127775391_1629340550338_title0h.jpg", 
//   "http://news.xinhuanet.com/titlepic/112777/1127776005_1629351357749_title0h.png", 
//   "http://news.xinhuanet.com/titlepic/112776/1127761870_1628988947055_title0h.jpg", 
//   "http://www.xinhuanet.com/titlepic/112777/1127776848_1629362825888_title0h.gif", 
//   "http://news.xinhuanet.com/titlepic/112777/1127777278_1629369402733_title0h.jpg", 
//   "http://news.xinhuanet.com/titlepic/112777/1127771698_1629254475283_title0h.jpg", 
//   "http://news.xinhuanet.com/titlepic/112776/1127763089_1629075092382_title0h.jpg"
// ]

const styles = (theme) => ({
  container: {
    color: "white",
  },
});

class Index extends React.Component {
 
  renderSlide = (index) => {
    const i = index + 1;
    const imageUrl = `http://via.placeholder.com/350x150?text=${i}`;
    return (
      <div key={i}>
        <Image
          src={imageUrl}
          layout="fill"
          height="150"
          width="250"
          alt="log"
        />
      </div>
    );
  };

  renderSlides = () => {
    const { xinhuaList } = this.props;
    const images = xinhuaList.filter(news => news.type === "grid" && news.title).map(news => news.thumbnail_url)
    // console.log('images: ', images)
    return images.map((image, index) => {
      const i = index + 1;
      const imageUrl = `https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0,176,3008,1654&wid=2000&hei=1100&scl=1.504`;
      return (
        <div key={i}>
          <figure>
            <img src={image} />
            <figcaption>
              <p>Legend of item {i}</p>
            </figcaption>
          </figure>
        </div>
      );
    });
  };

  render() {
    const { classes, theme } = this.props;
    return (
      <Container maxWidth="sm" className={classes.container}>
        <Box sx={{ my: 4 }}>
          <Typography
            variant="h4"
            component="h1"
            style={{ color: "white" }}
            gutterBottom
          >
            Next.js v5-beta example
          </Typography>
          <Link href="/about" color="secondary">
            Go to the about page
          </Link>
          <ProTip />
          <Copyright />
        </Box>
        <h2 style={{ color: "white" }}>This is react-slider X next.js</h2>
        <p style={{ color: "white" }}>
          There is a bug when using responsive settings: look at image src
          attribute when screen is smaller that 768px
        </p>
        <Slider
          autoplay={true}
          initialSlide={1}
          slidesToShow={1}
          slidesToScroll={1}
          infinite={true}
          dots={true}
          arrows={true}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ]}
        >
          {this.renderSlides()}
        </Slider>
      </Container>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Index);

export async function getServerSideProps() {
  let xinhuaList = []
  try {
    const db = await dbConnect();
    xinhuaList = await Xinhua.find();
  } catch (error) {
    console.log("Xinhua page getServerSideProps error: ", error);
  }
  // console.log('xinhuaList: ', xinhuaList)
  return {
    props: {
      xinhuaList: JSON.parse(JSON.stringify(xinhuaList)) || [],
    },
  };
}

