import { MarsRoverProps } from "Assets/Intefaces/MarsRoverProps/MarsRoverProps";
import React, { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import styles from "./MarsRover.module.css";

export const MarsRover = () => {
  const [roverObject, setRoverObject] = useState<MarsRoverProps>();
  const [loading, setLoading] = useState<boolean>(false);

  const GetMarsRoverData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=NAVCAM&api_key=zTiB7szgM0dv0rHglSZh6GETLm5SnAfXaMCgE72N&page=1"
      );
      const jsonRes = await response.json();
      console.log(jsonRes);
      setRoverObject(jsonRes);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    GetMarsRoverData();
  }, []);
  return (
    <section className={styles.section}>
      <section className={styles.title_section}>
        <h2 className={styles.title}>NASA's Mars Rover</h2>
        <h4 className={styles.section_data_title}>{roverObject?.photos.length} pictures made by {roverObject?.photos[0].rover.name}</h4>
        </section>
        {loading == false ? (
          <section>

            {roverObject?.photos.map((object, index) => (
                  <section className={styles.layout}>
                  <img
                    className={styles.rover_img}
                    src={object.img_src}
                  ></img>
                  <section className={styles.img_data}>
                    <h4 className={styles.rover_name}>
                      Made By {object.rover.name}.
                    </h4>
                    <p className={styles.description}>
                      Has been launched on{" "}
                      {object.rover.launch_date} and has arrivered
                      on {object.rover.landing_date} and is
                      currently {object.rover.status}.
                    </p>
                    <p className={styles.description}>
                      This image has been taken with the{" "}
                      {object.camera.full_name}
                    </p>
                  </section>
                </section>
            ))}
          
            
          </section>
        ) : (
          <section className={styles.loader_container}>
            <TailSpin
              height="80"
              width="80"
              color="rgb(46 47 91 / 1)"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </section>
        )}
    </section>
  );
};
