import React from "react";
import { motion } from "motion/react";

export const About = () => {
  return (
    <div className="w-full max-w-7xl h-screen flex p-8 py-32 justify-between items-center gap-14 m-auto">
      <motion.div
        className="flex h-full items-center"
        initial={{opacity:0, x: -20}}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="outline-8 h-fit w-fit outline-fuchsia-600 rounded-xl">
          <img
            src={`/suzain`}
            alt="jordans"
            height="300"
            width="300"
            className="object-contain"
          />
        </div>
      </motion.div>
      <motion.div
        className="flex-col space-y-4 w-3xl"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="space-y-3">
          <h1 className="text-3xl bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            About Me
          </h1>

          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident a
            cupiditate tempora voluptas assumenda laudantium, voluptatibus,
            quas, iusto harum beatae molestiae culpa? Earum, laborum, doloremque
            reiciendis eaque mollitia quae hic, molestiae eius fugit nisi ea
            deleniti exercitationem explicabo totam quod dolorem autem in magnam
            incidunt! Facilis voluptas dolore veritatis consequuntur temporibus
            esse, assumenda voluptatem natus aliquam laborum inventore ipsum
            soluta aut est atque expedita sunt quam sit optio placeat, quos et
            explicabo consequatur! Dolorem obcaecati magnam, doloremque quos
            eligendi error labore laboriosam quibusdam dolore recusandae nulla
            debitis explicabo numquam quaerat perferendis, enim commodi aut
            repellat veritatis! Reiciendis cum voluptate debitis.
          </p>
        </div>
        {/* <div>
          <h1 className="text-3xl bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            My Interest
          </h1>
          <div className="flex gap-4 flex-wrap ">
              
          </div>
        </div> */}
      </motion.div>
    </div>
  );
};
