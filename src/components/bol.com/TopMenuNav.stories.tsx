import React from "react";
import TopMenuNav from "./TopMenuNav";
import { ComponentStory } from "@storybook/react";

export default {
  title: "components/Bol.com/TopMenuNav",
  component: TopMenuNav,
};

export const Desktop: ComponentStory<typeof TopMenuNav> = (args) => (
  <div>
    <header className={"p-4 bg-[#0000a4] text-white"}>
      <img src="bol-logo.png" alt="bol logo" className={"w-32"} />
    </header>
    <TopMenuNav {...args} />
    <article className={"p-4 space-y-4"}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
        dolores eligendi enim ipsum laudantium, minus nostrum nulla saepe sed
        voluptate! Alias aut ex fugiat impedit, inventore nisi quod temporibus
        tenetur.
      </p>
      <p>
        Eius iusto nemo pariatur quae reiciendis. Alias earum iure sapiente. Ab
        excepturi facere fuga, mollitia qui sunt. Atque dolorem doloremque esse
        ex fugiat itaque pariatur tempore? Doloribus eligendi minus sed.
      </p>
      <p>
        Adipisci aliquid aspernatur dicta dolorem eius harum id impedit incidunt
        inventore itaque iusto magnam maxime mollitia necessitatibus nisi odit
        officia pariatur, perspiciatis qui quis quos rem sapiente unde vitae
        voluptates.
      </p>
      <p>
        Ad amet delectus dicta, dignissimos dolorum eum exercitationem numquam
        obcaecati odio quaerat recusandae reiciendis rem sequi, soluta totam
        ullam veritatis. Culpa dolores eaque nulla pariatur recusandae sunt
        tenetur totam ut.
      </p>
      <p>
        Accusantium adipisci alias asperiores aspernatur blanditiis commodi
        distinctio earum excepturi fugit id illo in incidunt laborum libero
        maiores, officia quo sequi sint soluta suscipit totam unde velit vero
        voluptas voluptatem.
      </p>
      <p>
        Alias asperiores beatae, commodi corporis cumque delectus eligendi est,
        et exercitationem ipsa neque numquam placeat porro, possimus qui
        similique unde voluptatem? Alias atque aut deleniti error impedit nemo,
        neque quae?
      </p>
      <p>
        Atque blanditiis distinctio dolor excepturi necessitatibus nesciunt
        porro quam saepe, sint? Amet consectetur corporis cupiditate earum
        eligendi facilis hic illo incidunt ipsum libero natus, numquam odio quam
        ratione sed, voluptates?
      </p>
      <p>
        Animi architecto consequatur corporis dicta dolorum ducimus eum impedit
        in iste laboriosam laudantium maxime molestiae mollitia nemo quod
        ratione rem repellat reprehenderit repudiandae, sapiente temporibus unde
        vitae voluptatem. Ab, vitae!
      </p>
      <p>
        Architecto cupiditate dolor ea eligendi illo maiores officiis quas
        reiciendis! Accusantium architecto atque consequatur debitis eaque earum
        eius expedita hic laborum maxime modi, nam possimus provident quae quam
        reiciendis veniam?
      </p>
      <p>
        Adipisci animi aperiam aspernatur commodi consectetur ducimus enim eos
        esse, et exercitationem fugiat incidunt ipsa iure laborum laudantium
        natus neque nostrum perferendis possimus quia quidem quisquam saepe
        sunt, temporibus veritatis?
      </p>
    </article>
  </div>
);
Desktop.parameters = {
  layout: "fullscreen",
};
Desktop.args = {
  menuItems: [
    {
      title: "Met subitems",
      subMenuItems: [
        {
          title: "Boeken",
          categories: [
            {
              title: "Categorieën",
              items: [
                {
                  title: "Literatuur & Romans",
                },
                {
                  title: "Thrillers & Spanning",
                },
              ],
            },
            {
              title: "Taal",
              items: [
                {
                  title: "Nederlandstalige boeken",
                },
                {
                  title: "Engelstalige boeken",
                },
              ],
            },
            {
              title: "Taal",
              items: [
                {
                  title: "Nederlandstalige boeken",
                },
                {
                  title: "Engelstalige boeken",
                },
              ],
            },
            {
              title: "Taal",
              items: [
                {
                  title: "Nederlandstalige boeken",
                },
                {
                  title: "Engelstalige boeken",
                },
              ],
            },
            {
              title: "Taal",
              items: [
                {
                  title: "Nederlandstalige boeken",
                },
                {
                  title: "Engelstalige boeken",
                },
              ],
            },
            {
              title: "Taal",
              items: [
                {
                  title: "Nederlandstalige boeken",
                },
                {
                  title: "Engelstalige boeken",
                },
              ],
            },
          ],
        },
        {
          title: "Muziek, Film & Games",
          categories: [
            {
              title: "Muziek",
              items: [
                {
                  title: "Cd's",
                },
                {
                  title: "Lp's",
                },
              ],
            },
          ],
        },
      ],
      categories: [],
    },
    {
      title: "Zonder subitems",
      subMenuItems: [],
      categories: [
        {
          title: "Categorieën",
          items: [
            {
              title: "Literatuur & Romans",
            },
            {
              title: "Thrillers & Spanning",
            },
          ],
        },
        {
          title: "Taal",
          items: [
            {
              title: "Nederlandstalige boeken",
            },
            {
              title: "Engelstalige boeken",
            },
          ],
        },
        {
          title: "Taal",
          items: [
            {
              title: "Nederlandstalige boeken",
            },
            {
              title: "Engelstalige boeken",
            },
          ],
        },
        {
          title: "Taal",
          items: [
            {
              title: "Nederlandstalige boeken",
            },
            {
              title: "Engelstalige boeken",
            },
          ],
        },
        {
          title: "Taal",
          items: [
            {
              title: "Nederlandstalige boeken",
            },
            {
              title: "Engelstalige boeken",
            },
          ],
        },
        {
          title: "Taal",
          items: [
            {
              title: "Nederlandstalige boeken",
            },
            {
              title: "Engelstalige boeken",
            },
          ],
        },
      ],
    },
  ],
};
