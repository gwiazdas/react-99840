export const comps = [
  {
    id: 1,
    title: "Lenovo - 15 2. generacji (AMD)",
    description:
      "Wyświetlacz FHD 15,6' z opcjonalnym ekranem dotykowym Procesory do urządzeń mobilnych AMD Ryzen™ ",
    link: (
      <a
        href="https://www.lenovo.com/pl/pl/laptops/thinkbook/thinkbook-series/ThinkBook-15-Gen-2-AMD/p/XXTBXTMA500"
        target="_blank"
        rel="noopener noreferrer"
      >
        Zobacz w Sklepie
      </a>
    ),
  },
  {
    id: 2,
    title: "Lenovo - 14 Gen 2 (Intel)",
    description:
      "Laptop biznesowy 14 z procesorem Intel® Wytrzymały i bezpieczny Z technologią Dolby Audio™",
    link: (
      <a
        href="https://www.lenovo.com/pl/pl/laptops/thinkpad/edge-series/E14-G2/p/22TPE14E4N2"
        target="_blank"
        rel="noopener noreferrer"
      >
        Zobacz w Sklepie
      </a>
    ),
  },
  {
    id: 3,
    title: "Lenovo - ThinkBook Plus",
    description:
      "Dwa wyświetlacze: ekran na pokrywie 10,8” i wyświetlacz laptopa 13,3",
    link: (
      <a
        href="https://www.lenovo.com/pl/pl/laptops/thinkbook/thinkbook-series/Lenovo-ThinkBook-Plus/p/XXTBXTM8021"
        target="_blank"
        rel="noopener noreferrer"
      >
        Zobacz w Sklepie
      </a>
    ),
  },
  {
    id: 4,
    title: "DELL Inspiron 3501 15.6",
    description: "i3-1005G1 8GB 256GB SSD W10H 2YBWOS czarny",
    link: (
      <a
        href="https://dell24.pl/p/13232/Laptop-DELL-Inspiron-3501-15-6-FHD-i3-1005G1-8GB-256GB-SSD-W10H-2YBWOS-czarny"
        target="_blank"
        rel="noopener noreferrer"
      >
        Zobacz w Sklepie
      </a>
    ),
  },
  {
    id: 5,
    title: "DELL Inspiron 5400 2in1 14 FHD",
    description: "Touch i7-1065G7 12GB 512GB SSD FPR BK W10P 2YNBD szary",
    link: (
      <a
        href="https://dell24.pl/p/13150/Laptop-DELL-Inspiron-5400-2in1-14-FHD-Touch-i7-1065G7-12GB-512GB-SSD-FPR-BK-W10H-2YNBD-szary"
        target="_blank"
        rel="noopener noreferrer"
      >
        Zobacz w Sklepie
      </a>
    ),
  },
  {
    id: 6,
    title: "DELL Inspiron 5401 14 FHD",
    description: "i7-1065G7 16GB 512GB SSD BK W10P 2YBWOS srebrny.",
    link: (
      <a
        href="https://dell24.pl/p/12836/Laptop-DELL-Inspiron-5401-14-FHD-HS-i5-1035G1-8GB-512GB-SSD-MX330-BK-W10P-2YBWOS-srebrny"
        target="_blank"
        rel="noopener noreferrer"
      >
        Zobacz w Sklepie
      </a>
    ),
  },
  {
    id: 7,
    title: "Komputer HP 290 G1 typu mikrowieża",
    description: "Model HP 290 MT to wydajny komputer wyposażony w narzędzia potrzebne do realizacji codziennych zadań.",
    link: (
        <a
            href="https://sklephp.pl/komputery/komputer-hp-290-g1-typu-mikrowieza-9"
            target="_blank"
            rel="noopener noreferrer"
        >
          Zobacz w Sklepie
        </a>
    ),
  },
  {
    id: 8,
    title: "Komputer HP 280 G2 SFF",
    description: "Model HP 280 SFF to wydajny komputer wyposażony w narzędzia potrzebne do realizacji codziennych zadań.",
    link: (
        <a
            href="https://sklephp.pl/komputery/komputer-hp-280-g2-sff-4"
            target="_blank"
            rel="noopener noreferrer"
        >
          Zobacz w Sklepie
        </a>
    ),
  },
  {
    id: 9,
    title: "Komputer HP 290 G1 SFF",
    description: "Model HP 290 SFF to wydajny komputer wyposażony w funkcje potrzebne do realizacji codziennych zadań.",
    link: (
        <a
            href="https://sklephp.pl/komputery/komputer-hp-290-g1-sff-6"
            target="_blank"
            rel="noopener noreferrer"
        >
          Zobacz w Sklepie
        </a>
    ),
  },
];

export const getComps = (term) => {
  let result = [];
  comps.forEach((comp) => {
    if (comp.title.includes(term)) {
      result.push(comp);
    }
  });
  return result;
};
