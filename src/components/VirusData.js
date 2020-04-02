const data = [
  {
    state: "New York",
    cases: 92381,
    todayCases: 8480,
    deaths: 2373,
    todayDeaths: 154,
    active: 82574
  },
  {
    state: "New Jersey",
    cases: 25590,
    todayCases: 3335,
    deaths: 537,
    todayDeaths: 182,
    active: 25053
  },
  {
    state: "California",
    cases: 10018,
    todayCases: 211,
    deaths: 215,
    todayDeaths: 5,
    active: 8953
  },
  {
    state: "Michigan",
    cases: 9334,
    todayCases: 0,
    deaths: 337,
    todayDeaths: 0,
    active: 8992
  },
  {
    state: "Louisiana",
    cases: 9150,
    todayCases: 2726,
    deaths: 310,
    todayDeaths: 37,
    active: 8820
  },
  {
    state: "Florida",
    cases: 8010,
    todayCases: 237,
    deaths: 128,
    todayDeaths: 27,
    active: 7882
  },
  {
    state: "Massachusetts",
    cases: 7738,
    todayCases: 0,
    deaths: 122,
    todayDeaths: 0,
    active: 7606
  },
  {
    state: "Illinois",
    cases: 7016,
    todayCases: 36,
    deaths: 146,
    todayDeaths: 5,
    active: 6868
  },
  {
    state: "Pennsylvania",
    cases: 7016,
    todayCases: 1014,
    deaths: 90,
    todayDeaths: 16,
    active: 6888
  },
  {
    state: "Washington",
    cases: 5991,
    todayCases: 147,
    deaths: 254,
    todayDeaths: 4,
    active: 5174
  },
  {
    state: "Georgia",
    cases: 5348,
    todayCases: 600,
    deaths: 163,
    todayDeaths: 9,
    active: 5185
  },
  {
    state: "Texas",
    cases: 4720,
    todayCases: 652,
    deaths: 72,
    todayDeaths: 12,
    active: 4541
  },
  {
    state: "Connecticut",
    cases: 3557,
    todayCases: 0,
    deaths: 85,
    todayDeaths: 0,
    active: 3472
  },
  {
    state: "Colorado",
    cases: 3342,
    todayCases: 0,
    deaths: 80,
    todayDeaths: 0,
    active: 3262
  },
  {
    state: "Tennessee",
    cases: 3194,
    todayCases: 511,
    deaths: 29,
    todayDeaths: 4,
    active: 2981
  },
  {
    state: "Indiana",
    cases: 3039,
    todayCases: 474,
    deaths: 78,
    todayDeaths: 13,
    active: 2961
  },
  {
    state: "Ohio",
    cases: 2902,
    todayCases: 355,
    deaths: 81,
    todayDeaths: 16,
    active: 2821
  },
  {
    state: "Maryland",
    cases: 2331,
    todayCases: 346,
    deaths: 36,
    todayDeaths: 5,
    active: 2214
  },
  {
    state: "North Carolina",
    cases: 1890,
    todayCases: 173,
    deaths: 16,
    todayDeaths: 1,
    active: 1854
  },
  {
    state: "Virginia",
    cases: 1706,
    todayCases: 222,
    deaths: 41,
    todayDeaths: 7,
    active: 1663
  },
  {
    state: "Arizona",
    cases: 1598,
    todayCases: 185,
    deaths: 32,
    todayDeaths: 3,
    active: 1563
  },
  {
    state: "Missouri",
    cases: 1581,
    todayCases: 0,
    deaths: 18,
    todayDeaths: 0,
    active: 1561
  },
  {
    state: "Wisconsin",
    cases: 1550,
    todayCases: 0,
    deaths: 25,
    todayDeaths: 0,
    active: 1523
  },
  {
    state: "Nevada",
    cases: 1458,
    todayCases: 179,
    deaths: 26,
    todayDeaths: 0,
    active: 1432
  },
  {
    state: "South Carolina",
    cases: 1293,
    todayCases: 0,
    deaths: 26,
    todayDeaths: 0,
    active: 1267
  },
  {
    state: "Alabama",
    cases: 1179,
    todayCases: 71,
    deaths: 32,
    todayDeaths: 4,
    active: 1147
  },
  {
    state: "Mississippi",
    cases: 1177,
    todayCases: 104,
    deaths: 26,
    todayDeaths: 4,
    active: 1151
  },
  {
    state: "Utah",
    cases: 1012,
    todayCases: 0,
    deaths: 7,
    todayDeaths: 0,
    active: 1005
  },
  {
    state: "Oklahoma",
    cases: 879,
    todayCases: 160,
    deaths: 34,
    todayDeaths: 4,
    active: 844
  },
  {
    state: "Minnesota",
    cases: 742,
    todayCases: 53,
    deaths: 18,
    todayDeaths: 1,
    active: 436
  },
  {
    state: "Oregon",
    cases: 736,
    todayCases: 0,
    deaths: 19,
    todayDeaths: 0,
    active: 717
  },
  {
    state: "Kentucky",
    cases: 680,
    todayCases: 0,
    deaths: 20,
    todayDeaths: 0,
    active: 596
  },
  {
    state: "Idaho",
    cases: 673,
    todayCases: 0,
    deaths: 9,
    todayDeaths: 0,
    active: 664
  },
  {
    state: "Rhode Island",
    cases: 657,
    todayCases: 91,
    deaths: 12,
    todayDeaths: 2,
    active: 645
  },
  {
    state: "District Of Columbia",
    cases: 653,
    todayCases: 67,
    deaths: 12,
    todayDeaths: 1,
    active: 468
  },
  {
    state: "Arkansas",
    cases: 624,
    todayCases: 40,
    deaths: 10,
    todayDeaths: 0,
    active: 572
  },
  {
    state: "Iowa",
    cases: 613,
    todayCases: 64,
    deaths: 11,
    todayDeaths: 2,
    active: 584
  },
  {
    state: "Kansas",
    cases: 487,
    todayCases: 5,
    deaths: 11,
    todayDeaths: 1,
    active: 476
  },
  {
    state: "New Hampshire",
    cases: 415,
    todayCases: 0,
    deaths: 4,
    todayDeaths: 0,
    active: 355
  },
  {
    state: "Maine",
    cases: 376,
    todayCases: 32,
    deaths: 7,
    todayDeaths: 0,
    active: 275
  },
  {
    state: "Delaware",
    cases: 368,
    todayCases: 0,
    deaths: 11,
    todayDeaths: 0,
    active: 308
  },
  {
    state: "New Mexico",
    cases: 363,
    todayCases: 0,
    deaths: 6,
    todayDeaths: 0,
    active: 357
  },
  {
    state: "Vermont",
    cases: 338,
    todayCases: 17,
    deaths: 17,
    todayDeaths: 1,
    active: 321
  },
  {
    state: "Hawaii",
    cases: 258,
    todayCases: 0,
    deaths: 1,
    todayDeaths: 0,
    active: 199
  },
  {
    state: "Nebraska",
    cases: 246,
    todayCases: 36,
    deaths: 5,
    todayDeaths: 1,
    active: 241
  },
  {
    state: "Montana",
    cases: 227,
    todayCases: 10,
    deaths: 6,
    todayDeaths: 0,
    active: 221
  },
  {
    state: "West Virginia",
    cases: 191,
    todayCases: 0,
    deaths: 2,
    todayDeaths: 0,
    active: 189
  },
  {
    state: "South Dakota",
    cases: 165,
    todayCases: 36,
    deaths: 2,
    todayDeaths: 0,
    active: 106
  },
  {
    state: "North Dakota",
    cases: 159,
    todayCases: 17,
    deaths: 3,
    todayDeaths: 0,
    active: 113
  },
  {
    state: "Wyoming",
    cases: 150,
    todayCases: 13,
    deaths: 0,
    todayDeaths: 0,
    active: 124
  },
  {
    state: "Alaska",
    cases: 143,
    todayCases: 10,
    deaths: 3,
    todayDeaths: 0,
    active: 140
  },
  {
    state: "Guam",
    cases: 82,
    todayCases: 5,
    deaths: 3,
    todayDeaths: 0,
    active: 72
  },
  {
    state: "Northern Mariana Islands",
    cases: 6,
    todayCases: 0,
    deaths: 1,
    todayDeaths: 0,
    active: 5
  },
  {
    state: "Puerto Rico",
    cases: 316,
    todayCases: 30,
    deaths: 12,
    todayDeaths: 1,
    active: 300
  },
  {
    state: "United States Virgin Islands",
    cases: 30,
    todayCases: 0,
    deaths: 0,
    todayDeaths: 0,
    active: 9
  },
  {
    state: "Wuhan Repatriated",
    cases: 3,
    todayCases: 0,
    deaths: 0,
    todayDeaths: 0,
    active: 3
  },
  {
    state: "Diamond Princess Cruise",
    cases: 46,
    todayCases: 0,
    deaths: 0,
    todayDeaths: 0,
    active: 46
  }
];

export default data;
