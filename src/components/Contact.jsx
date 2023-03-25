import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const getIPAddressAndLocation = async () => {
    try {
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      const { ip, city, region, country } = data;
      return { ip, city, region, country };
    } catch (error) {
      console.error('Error fetching IP and location data:', error);
      return {};
    }
  };

  const getBrowserAndDeviceData = async () => {
    if ('userAgentData' in navigator) {
      try {
        const brands = await navigator.userAgentData.getHighEntropyValues(['platform', 'platformVersion', 'uaFullVersion']);
        const userAgent = navigator.userAgent;
        const platform = brands.platform;
        const platformVersion = brands.platformVersion;
        const browserVersion = brands.uaFullVersion;
        return { userAgent, platform, platformVersion, browserVersion };
      } catch (error) {
        console.error('Error fetching browser and device data:', error);
        return {};
      }
    } else {
      // Fallback to using navigator.userAgent and navigator.platform for older browsers
      const userAgent = navigator.userAgent;
      const platform = navigator.platform;
      return { userAgent, platform };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const locationData = await getIPAddressAndLocation();
    const browserAndDeviceData = await getBrowserAndDeviceData();

    emailjs
      .send(
        'service_661oi08',
        'template_r3tiykj',
        {
          from_name: form.name,
          to_name: "Daniel",
          from_email: form.email,
          to_email: "minqz2009@gmail.com",
          message: form.message,
          ip_address: locationData.ip || "Not available",
          city: locationData.city || "Not available",
          region: locationData.region || "Not available",
          country: locationData.country || "Not available",
          user_agent: browserAndDeviceData.userAgent || "Not available",
          platform: browserAndDeviceData.platform || "Not available",
          platform_version: browserAndDeviceData.platformVersion || "Not available",
          browser_version: browserAndDeviceData.browserVersion || "Not available",
        },
        'uyQyQyaoQ0qo9iSeo'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
