import { MarsRoverProps } from 'Assets/Intefaces/MarsRoverProps/MarsRoverProps'
import React, { useEffect, useState } from 'react'
import { TailSpin } from  'react-loader-spinner'
import styles from './NasaPOD.module.css'

interface NasaObjectProps {
    copyright: string,
    date: string,
    explanation: string
    hdurl: string
    media_type: string
    service_version:string
    title: string
    url: string

}

export const NasaPod = () => {

    const [nasaPOD, setNasaPOD] = useState<NasaObjectProps>();
    const [roverObject, setRoverObject] = useState<MarsRoverProps>();
    const [loading, setLoading] = useState<boolean>(false);

    const GetPOD = async() => {
        setLoading(true)
        try{
            const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=zTiB7szgM0dv0rHglSZh6GETLm5SnAfXaMCgE72N");
            const jsonRes = await response.json();
            console.log(jsonRes);
            setNasaPOD(jsonRes);
        }catch(err){
            console.log(err)
        }
        setLoading(false)
    }
    useEffect(() => {
        GetPOD();
    },[])
  return (
    <section  className={styles.section}>
        <section className={styles.title_section}>
        <h2 className={styles.POD_title}>NASA's Picture of the day.</h2>
        <h4 className={styles.section_data_title}>{nasaPOD?.title}</h4>
        </section>
        {loading == false ?
        <div>
            <section className={styles.section_POD}>
            <section  className={styles.section_img}>
                <p className={styles.hover_me}>Hover Me</p>
                <img className={styles.POD_img} src={nasaPOD?.url}></img>
            </section>
            <aside className={styles.section_data}> 
                        <p className={styles.section_data_date}>{nasaPOD?.date}</p>
                        <p className={styles.section_data_expl}>{nasaPOD?.explanation}</p>
                        <a className={styles.section_data_url} href={nasaPOD?.hdurl} target="_blank">{nasaPOD?.hdurl}</a>
                        <p className={styles.section_data_copy}> - {nasaPOD?.copyright} - </p>
            </aside>
        </section>
        <section  className={styles.section_rover}>
           {roverObject?.photos.map((object, index) => (
            <img src={object.img_src}></img>
           ))}
        </section>
        </div>
         :
         <section  className={styles.loader_container}>
         <TailSpin
         height="80"
         width="80"
         color="rgb(46 47 91 / 1)"
         ariaLabel="tail-spin-loading"
         radius="1"
         wrapperStyle={{}}
         wrapperClass="styles.loader"
         visible={true}
       />
       </section>
        }
    </section>
  )
}
