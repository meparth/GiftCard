import styles from "./home.module.css";
import PostCard from "@/components/postCard/postCard";

const Home = () => {
  return (
      <>
          <div className={styles.container} id="postcard-container">
              <PostCard />
          </div>
          <div className={styles.containerBackground}>
          </div>
      </>

  );
};

export default Home;
