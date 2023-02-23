import React, { useState } from "react";
import Select from "react-select";

const Countrydata = () => {
  var countrylist = [
    {
      value: 1,
      label: "India",
      text: " Home to a fifth of the worlds population and the largest democracy in the world, India holds a prominent place in current events yet remains unknown or misunderstood by many people who seek a single, authoritative source for information on this political and economic dynamo. The Encyclopedia of India meets this need, encompassing the history, cultures, geography, and religions of India from ancient times to the present day. As Indias role in global politics and economics continues to grow, readers will find the wide range and depth of information contained within this work an indispensable tool to gaining a solid appreciation of India and its place in our modern world.India is the seventh-largest country by area, the second-most populous country (with over 1.2 billion people), and the most populous democracy in the world. This population is remarkably diverse; it has more than two thousand ethnic groups, and every major religion is represented, as are four major families of languages. Further complexity is lent by the great variation of income and education.India is home to four major world religions, Hinduism, Buddhism, Jainism and Sikhism, whose spiritual patrimony has largely shaped the cultures of Asia. India boasts one of the great world civilizations, a glorious history replete with empires, commercial and cultural wealth, exceptional achievements in the arts, music and architecture, a complex and distinctive cuisine, and superb textiles.",
    },
    {
      value: 2,
      label: "USA",
      text: " The United States was born as a nation with the Declaration of Independence made by the 13 colonies on July 4, 1776. It was recognized internationally by the Treaty of Paris (1783) after the defeat of British forces in the Revolutionary War. Its roots, however, begin in the seventeenth century, when British, Dutch, and German colonists began migrating to North America seeking freedom and economic opportunity. They included Puritans, Quakers, and others who wanted to freely practice their religion; many of these devout men and women thought of America as God's new Israel, a place to build a godly society that would become a beacon of hope to the world. This can be called America's Protestant root, one which has had a lasting impress on its identity. Equally important were the motives and hopes of people seeking economic freedom in a new land without the restrictions of European class society; they came, from the colonists of Jamestown (1609) to the later waves of immigrants in the nineteenth and twentieth centuries. The frontier would encourage this love of freedom and its endless possibilities; anyone, regardless of his or her background, could become wealthy by self-reliance and hard work under a system of free-market capitalism. America's identity is thus rooted in the power of these two universal ideas – the exemplary society and the land of freedom and opportunity. In this it is unique among nations, which by and large base their identity on ethnicity or tribe: Germany for Germans, Japan for Japanese, and so on. The idea of America transcending ethnicity made it a successful multi-ethnic society.",
    },
    {
      value: 3,
      label: "Australia",
      text: " The Commonwealth of Australia is a nation strategically located between the Indian and Pacific Oceans with strong cultural and political ties to North America and Europe. The world's sixth largest country and an island continent occupied by a single nation, its name is derived from the Latin Australis, meaning of the South. It is sometimes referred to as the land down under, a reference to its long distance from its mother country, Britain.Initially a site for English penal colonies in the eighteenth and nineteenth centuries as well as a base of British economic exploitation of the area, Australia grew to become a constitutional democracy whose people built a nation free of the limitations prevalent in crowded England. Australia has developed a robust economy and high living standard. Although arid throughout much of its surface, part of its prosperity came from its extensive mineral resources. Once considered geographically isolated, Australia today benefits from its proximity to both East Asia and South Asia, and overall plays an increasingly important role in the Asia-Pacific. Within Oceania itself, Australia exercises crucial leadership, both as a benefactor to island nations and through its ability to project military power.",
    },
  ];

  const [result, ddlvalue] = useState(countrylist.label);
  const ddlHandler = (e) => {
    ddlvalue(e.text);
  };

  return (
    <div>
      <div
        className="mt-4"
        style={{ paddingLeft: "20px", paddingRight: "20px", width: "200px" }}
      >
        <Select options={countrylist} onChange={ddlHandler} />
      </div>
      <div
        className="mt-4"
        style={{ paddingLeft: "30px", paddingRight: "30px" }}
      >
        <p>{result}</p>
      </div>
    </div>
  );
};

export default Countrydata;
