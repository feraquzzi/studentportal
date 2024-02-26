// array of objects to be queried
const array = [
  {
    //MAKE-UP DEPARTMENT
    id: 'mup/c23/001',
    image: "https://i.postimg.cc/Fsp5yZZc/5781046584053078692-base64-49-1702295458.jpg",
    name: 'Omotolani Johnson',
    dept: 'Make-up',
    weeklyAttendance: 5.75,
    softSkillAttendance: 0,
    test: 0,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }

  },

  {
    id: 'mup/c23/105',
    image: "https://i.postimg.cc/FHvN5v9Z/Vivian_Chukwu.jpg",
    name: 'Vivian Chukwu',
    dept: 'Make-up',
    weeklyAttendance: 4.5,
    softSkillAttendance: 0,
    test: 0,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }

  },

  {
    id: 'mup/c23/109',
    image: "https://i.postimg.cc/jS5BDVVH/Elizabeth_Agailu.jpg",
    name: 'Elizabeth Agailu',
    dept: 'Make-up',
    weeklyAttendance: 0,
    softSkillAttendance: 0,
    test: 0,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }

  },

  {
    id: 'mup/c23/111',
    image: "https://i.postimg.cc/13GFgr2s/Rukayat_Adefila.jpg",
    name: 'Rukayat Adefila',
    dept: 'Make-up',
    weeklyAttendance: 1.5,
    softSkillAttendance: 0,
    test: 0,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }

  },

  {
    id: 'mup/c23/115',
    image: "https://i.postimg.cc/hv0qX0Nz/Ngozi_Ifepeh.jpg",
    name: 'Ngozi Ifepeh',
    dept: 'Make-up',
    weeklyAttendance: 4.5,
    softSkillAttendance: 0,
    test: 0,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }

  },

  {
    id: 'mup/c23/117',
    image: "https://i.postimg.cc/c4FwGG6Y/Elizabeth_Adeyemi.jpg",
    name: 'Elizabeth Adeyemi',
    dept: 'Make-up',
    weeklyAttendance: 0,
    softSkillAttendance: 0,
    test: 0,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'mup/c23/118',
    image: "https://i.postimg.cc/6p9G2w5j/Favour_Aniekwe.jpg",
    name: 'Favour Aniekwe',
    dept: 'Make-up',
    weeklyAttendance: 2.75,
    softSkillAttendance: 0,
    test: 0,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'mup/c23/034',
    image: "https://i.postimg.cc/9F0R4XBX/omolola-fadeyi.jpg",
    name: 'Omolola Fadeyi',
    dept: 'Make-up',
    weeklyAttendance: 5.5,
    softSkillAttendance: 0,
    test: 0,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'mup/c23/119',
    image: "https://i.postimg.cc/KjYFt9wM/Chineye_Ibeh.jpg",
    name: 'Chineye Ibeh',
    dept: 'Make-up',
    weeklyAttendance: 3.5,
    softSkillAttendance: 0,
    test: 0,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },


  {
    id: 'mup/c23/036',
    image: "https://i.postimg.cc/T1NVsfmR/hannah-fafiolu.jpg",
    name: 'Hannah Fafiolu',
    dept: 'Make-up',
    weeklyAttendance: 5.5,
    softSkillAttendance: 0,
    test: 0,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'mup/c23/038',
    image: "https://i.postimg.cc/LXWxwVqP/oluwaseun-oshikomaya.jpg",
    name: 'Oluwaseun Oshikomaya',
    dept: 'Make-up',
    weeklyAttendance: 2.5,
    softSkillAttendance: 0,
    test: 0,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'mup/c23/067',
    image: "https://i.postimg.cc/QM11kG5v/esther-fadebi.jpg",
    name: 'Esther Fadebi',
    dept: 'Make-up',
    weeklyAttendance: 5.75,
    softSkillAttendance: 0,
    test: 0,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'mup/c23/068',
    image: "https://i.postimg.cc/g22HbkQp/kafilat-tiamiyu.jpg",
    name: 'Kafilat Tiamiyu',
    dept: 'Make-up',
    weeklyAttendance: 5.75,
    softSkillAttendance: 0,
    test: 0,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'mup/c23/069',
    image: "https://i.postimg.cc/YCFYHGRJ/olajumoke-akanbi.jpg",
    name: 'Olajumoke Akanbi',
    dept: 'Make-up',
    weeklyAttendance: 5.5,
    softSkillAttendance: 0,
    test: 0,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }

  },

  {
    id: 'mup/c23/070',
    image: "https://i.postimg.cc/Y0hKGwym/chioma-akwarande.jpgg",
    name: 'Chioma Akwarande',
    dept: 'Make-up',
    weeklyAttendance: 4.75,
    softSkillAttendance: 0,
    test: 0,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'mup/c23/072',
    image: "https://i.postimg.cc/8cySCmdw/teniola-albert.jpg",
    name: 'Teniola Albert',
    dept: 'Make-up',
    weeklyAttendance: 5.25,
    softSkillAttendance: 0,
    test: 0,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },


  {
    id: 'mup/c23/096',
    image: "https://i.postimg.cc/90Cth6db/eniola_muhammed.jpg",
    name: 'Eniola Muhammed',
    dept: 'Make-up',
    weeklyAttendance: 5.75,
    softSkillAttendance: 0,
    test: 0,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'mup/c23/026',
    image: "https://i.postimg.cc/Bb2mc72h/shade-owolabi.jpg",
    name: 'Shade Owolabi',
    dept: 'Make-up',
    weeklyAttendance: 5.75,
    softSkillAttendance: 0,
    test: 0,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'mup/c23/030',
    image: "https://i.postimg.cc/KYKQbXbH/kikelomo-olanrewaju.jpg",
    name: 'Kike Olanrewaju',
    dept: 'Make-up',
    weeklyAttendance: 4.25,
    softSkillAttendance: 0,
    test: 0,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'mup/c23/006',
    image: "https://i.postimg.cc/pTqGgmhc/adenike-bolaji.jpg",
    name: 'Oluwaseyi Ajiga',
    dept: 'Make-up',
    weeklyAttendance: 1.5,
    softSkillAttendance: 0,
    test: 0,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'mup/c23/091',
    image: "https://i.postimg.cc/c4RhLr1W/gift_peters.jpg",
    name: 'Gift Peters',
    dept: 'Make-up',
    weeklyAttendance: 5.25,
    softSkillAttendance: 0,
    test: 0,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }

  },
  
  {
    id: 'mup/c23/007',
    image: "https://i.postimg.cc/9MpHFGBs/Aminat-ibrahim-makeup.jpg",
    name: 'Aminat Ibrahim',
    dept: 'Make-up',
    weeklyAttendance: 4.25,
    softSkillAttendance: 0,
    test: 0,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'mup/c23/008',
    image: "https://i.postimg.cc/6qKq8xtW/aishat-usman.jpg",
    name: 'Aishat Usman',
    dept: 'Make-up',
    weeklyAttendance: 0.75,
    softSkillAttendance: 0,
    test: 0,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'mup/c23/011',
    image: "https://i.postimg.cc/G2nKC8CS/abosede-Gninegan.jpg",
    name: 'Abosede Gninegan',
    dept: 'Make-up',
    weeklyAttendance: 5.5,
    softSkillAttendance: 0,
    test: 0,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'mup/c23/012',
    image: "https://i.postimg.cc/jS9fGf1n/shukurah-jimoh.jpg",
    name: 'Shukurah Jimoh',
    dept: 'Make-up',
    weeklyAttendance: 5.25,
    softSkillAttendance: 0,
    test: 0,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'mup/c23/013',
    image: "https://i.postimg.cc/5y6FQf7T/precious-okoroji.jpg",
    name: 'Precious Okoroji',
    dept: 'Make-up',
    weeklyAttendance: 2.75,
    softSkillAttendance: 0,
    test: 0,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }

  },

  {
    id: 'mup/c23/022',
    image: "https://i.postimg.cc/D06dNZQ9/kadijat-balogun.jpg",
    name: 'Kadijat Balogun',
    dept: 'Make-up',
    weeklyAttendance: 4.75,
    softSkillAttendance: 0,
    test: 0,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'mup/c23/023',
    image: "https://i.postimg.cc/7ZkxxnzM/aina-suliamon.jpg",
    name: 'Aina Sulaimon',
    dept: 'Make-up',
    weeklyAttendance: 5.25,
    softSkillAttendance: 0,
    test: 0,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'mup/c23/084',
    image: "https://i.postimg.cc/Gp5SPvDM/zainab_ogundokun.jpg",
    name: 'Zainab Ogundokun',
    dept: 'Make-up',
    weeklyAttendance: 5.25,
    softSkillAttendance: 0,
    test: 0,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  { 
    id: 'mup/c23/085',
    image: "https://i.postimg.cc/nh6BBtGQ/balikis_yusuf.jpg",
    name: 'Balikis Yusuf',
    dept: 'Make-up',
    weeklyAttendance: 2.75,
    softSkillAttendance: 0,
    test: 0,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }

  },

  {
    id: 'mup/c23/087',
    image: "https://i.postimg.cc/ZRWNw1G6/happines_anthony.jpg",
    name: 'Happiness Anthony',
    dept: 'Make-up',
    weeklyAttendance: 4,
    softSkillAttendance: 0,
    test: 0,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  ///////////////////////////////////////FASHION DESIGN DEPARTMENT////////////////////////////////////////////////
  {
    id: 'tai/c23/004',
    image: "https://i.postimg.cc/pTqGgmhc/adenike-bolaji.jpg",
    name: 'Adenike Bolaji',
    dept: 'Fashion Design',
    weeklyAttendance: 5.75,
    softSkillAttendance: 0,
    test: 16,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'tai/c23/106',
    image: "https://i.postimg.cc/Hs72fJzq/taiwo_olatunji.jpg",
    name: 'Taiwo Olatunji',
    dept: 'Fashion Design',
    weeklyAttendance: 4.5,
    softSkillAttendance: 0,
    test: 14,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'tai/c23/107',
    image: "https://i.postimg.cc/25zjsZQT/Arigbabuwo_Oriyomi.jpg",
    name: 'Arigbabuwo Oriyomi',
    dept: 'Fashion Design',
    weeklyAttendance: 4.5,
    softSkillAttendance: 0,
    test: 11,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'tai/c23/110',
    image: "https://i.postimg.cc/qv5GBqdT/Lauretta_Idioh.jpg",
    name: 'Lauretta Idioh',
    dept: 'Fashion Design',
    weeklyAttendance: 5.25,
    softSkillAttendance: 0,
    test: 9,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'tai/c23/114',
    image: "https://i.postimg.cc/6Q9FFwvR/Great_Abiodun_Gbenro.jpg",
    name: 'Great Abiodun Gbenro',
    dept: 'Fashion Design',
    weeklyAttendance: 3.75,
    softSkillAttendance: 0,
    test: 12,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },


  {
    id: 'tai/c23/079',
    image: "https://i.postimg.cc/Nj7tj3tB/kehinde_shoyombo.jpg",
    name: 'Kehinde Shoyombo',
    dept: 'Fashion Designing',
    weeklyAttendance: 5.75,
    softSkillAttendance: 0,
    test: 9,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }

  },

  {
    id: 'tai/c23/095',
    image: "https://i.postimg.cc/52GJGnx6/olabimpe_kazim.jpg",
    name: 'Olabimpe Kazim',
    dept: 'Fashion Designing',
    weeklyAttendance: 6,
    softSkillAttendance: 0,
    test: 12.5,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'tai/c23/097',
    image: "https://i.postimg.cc/JnF2x4Zg/Amarachi_Onwubiko.jpg",
    name: 'Amarachi Onwubiko',
    dept: 'Fashion Designing',
    weeklyAttendance: 5.25,
    softSkillAttendance: 0,
    test: 11,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }

  },

  {
    id: 'tai/c23/080',
    image: "https://i.postimg.cc/907zMcCJ/abisoye_majule.jpg",
    name: 'Abisoye Majule',
    dept: 'Fashion Designing',
    weeklyAttendance: 5.5,
    softSkillAttendance: 0,
    test: 10,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'tai/c23/082',
    image: "https://i.postimg.cc/PfRsd03v/olamide_saka.jpg",
    name: 'Olamide Saka',
    dept: 'Fashion Designing',
    weeklyAttendance: 5.75,
    softSkillAttendance: 0,
    test: 5,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'tai/c23/081',
    image: "https://i.postimg.cc/W4QCyprw/afusat_umar.jpg",
    name: 'Afusat Umar',
    dept: 'Fashion Designing',
    weeklyAttendance: 6,
    softSkillAttendance: 0,
    test: 12,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'tai/c23/083',
    image: "https://i.postimg.cc/s2DdZPZQ/rasheedah_abdulrahman.jpg",
    name: 'Rasheedah Abdulrahman',
    dept: 'Fashion Designing',
    weeklyAttendance: 6,
    softSkillAttendance: 0,
    test: 11,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }

  },

  {
    id: 'tai/c23/084',
    image: "https://i.postimg.cc/85rFRjyh/abosede_beke.jpg",
    name: 'Abosede Beke',
    dept: 'Fashion Designing',
    weeklyAttendance: 6,
    softSkillAttendance: 0,
    test: 7,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'tai/c23/085',
    image: "https://i.postimg.cc/mZpm8q2V/olubunmi_azeez.jpg",
    name: 'Olubunmi Azeez',
    dept: 'Fashion Designing',
    weeklyAttendance: 4.5,
    softSkillAttendance: 0,
    test: 9.5,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'tai/c23/009',
    image: "https://i.postimg.cc/prHsdCrN/morufat-lamidi.jpg",
    name: 'Morufat Lamidi',
    dept: 'Fashion Designing',
    weeklyAttendance: 5.75,
    softSkillAttendance: 0,
    test: 12,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }

  },

  {
    id: 'tai/c23/010',
    image: "https://i.postimg.cc/pLR4X27G/omotoke-sholabi.jpg",
    name: 'Omotoke Sholabi',
    dept: 'Fashion Designing',
    weeklyAttendance: 5.25,
    softSkillAttendance: 0,
    test: 12,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'tai/c23/016',
    image: "https://i.postimg.cc/nLQPNsRk/amaka-onyema.jpg",
    name: 'Amaka Onyema',
    dept: 'Fashion Designing',
    weeklyAttendance: 3.75,
    softSkillAttendance: 0,
    test: 7,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'tai/c23/017',
    image: "https://i.postimg.cc/fWHQQbrT/omolola-adio.jpg",
    name: 'Ayomide Akinola',
    dept: 'Fashion Designing',
    weeklyAttendance: 5.75,
    softSkillAttendance: 0,
    test: 14,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }

  },

  {
    id: 'tai/c23/019',
    image: "https://i.postimg.cc/fWHQQbrT/omolola-adio.jpg",
    name: 'Omolola Adio',
    dept: 'Fashion Designing',
    weeklyAttendance: 6,
    softSkillAttendance: 0,
    test: 16,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'tai/c23/014',
    image: "https://i.postimg.cc/zv5NRhpG/ganiu-aliyat.jpg",
    name: 'Aliyah Ganiu',
    dept: 'Fashion Designing',
    weeklyAttendance: 6,
    softSkillAttendance: 0,
    test: 10.5,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'tai/c23/024',
    image: "https://i.postimg.cc/hjdH7jwq/tolulope-shoyombo.jpg",
    name: 'Tolulope Shoyombo',
    dept: 'Fashion Designing',
    weeklyAttendance: 5.75,
    softSkillAttendance: 0,
    test: 12.5,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'tai/c23/027',
    image: "https://i.postimg.cc/N0BhSTdC/blessing-godwin.jpg",
    name: 'Blessing Godwin',
    dept: 'Fashion Designing',
    weeklyAttendance: 6,
    softSkillAttendance: 0,
    test: 10,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'tai/c23/073',
    image: "https://i.postimg.cc/bvxnGZZ4/boluwatife-anthony.jpg",
    name: 'Boluwatife Anthony',
    dept: 'Fashion Designing',
    weeklyAttendance: 5.75,
    softSkillAttendance: 0,
    test: 16,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'tai/c23/031',
    image: "https://i.postimg.cc/q7KdPpRJ/hazeezah-olaniyan.jpg",
    name: 'Hazeezah Olaniyan',
    dept: 'Fashion Designing',
    weeklyAttendance: 6,
    softSkillAttendance: 0,
    test: 12,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'tai/c23/077',
    image: "https://i.postimg.cc/L8NPm9xQ/monsurah_abdur-rahman.jpg",
    name: 'Monsurah Abdul-rahman',
    dept: 'Fashion Designing',
    weeklyAttendance: 6,
    softSkillAttendance: 0,
    test: 6,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'tai/c23/078',
    image: "https://i.postimg.cc/y6bY6qPY/bukola_adebayo.jpg",
    name: 'Bukola Adebayo',
    dept: 'Fashion Designing',
    weeklyAttendance: 5.25,
    softSkillAttendance: 0,
    test: 12,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'tai/c23/087',
    image: "https://i.postimg.cc/pVSxjR4B/samuel_onasoga.jpg",
    name: 'Samuel Onasoga',
    dept: 'Fashion Designing',
    weeklyAttendance: 5.75,
    softSkillAttendance: 0,
    test: 8.5,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }

  },



  ///////////////////////////////HAIRDRESSING DEPARTMENT//////////////////////////////////////
  {
    id: 'had/c23/015',
    image: "https://i.postimg.cc/nVQ0PzZ0/feyisara-adeniji.jpg",
    name: 'Feyisara Adeniji',
    dept: 'Hairdressing',
    weeklyAttendance: 5.25,
    softSkillAttendance: 0,
    test: 10,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'had/c23/121',
    image: "https://i.postimg.cc/d0yrdg1k/simbiat_olatunde.jpg",
    name: 'Simbiat Olatunde',
    dept: 'Hairdressing',
    weeklyAttendance: 4.25,
    softSkillAttendance: 0,
    test: 16,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'had/c23/108',
    image: "https://i.postimg.cc/GptMMb7t/Amudalat_Amode.jpg",
    name: 'Amudalat Amode',
    dept: 'Hairdressing',
    weeklyAttendance: 2.5,
    softSkillAttendance: 0,
    test: 16,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'had/c23/113',
    image: "https://i.postimg.cc/LsYCP7tG/Rukayat_Olamide.jpg",
    name: 'Rukayat Olamide',
    dept: 'Hairdressing',
    weeklyAttendance: 4.25,
    softSkillAttendance: 0,
    test: 18,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'had/c23/002',
    image: "https://i.postimg.cc/26H9m5Mj/Adejoke-Idowu-hairdressing.jpg",
    name: 'Adejoke Idowu',
    dept: 'Hairdressing',
    weeklyAttendance: 5.5,
    softSkillAttendance: 0,
    test: 14,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'had/c23/020',
    image: "https://i.postimg.cc/P5vMr6fF/Tomisin-Sanusi.jpg",
    name: 'Tomisin Sanusi',
    dept: 'Hairdressing',
    weeklyAttendance: 4.5,
    softSkillAttendance: 0,
    test: 7,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'had/c23/032',
    image: "https://i.postimg.cc/ZqqWp7Tt/titilayo-okeowo.jpg",
    name: 'Titilayo Okeowo',
    dept: 'Hairdressing',
    weeklyAttendance: 2.75,
    softSkillAttendance: 0,
    test: 7,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'had/c23/074',
    image: "https://i.postimg.cc/D0k1jRS4/ibukunoluwa-taiwo.jpg",
    name: 'Ibukunoluwa Taiwo',
    dept: 'Hairdressing',
    weeklyAttendance: 6,
    softSkillAttendance: 0,
    test: 18,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }

  },

  {
    id: 'had/c23/099',
    image: "https://i.postimg.cc/7LSSQ2mv/Charline_Ihebunachi.jpg",
    name: 'Charline Ihebunachi',
    dept: 'Hairdressing',
    weeklyAttendance: 5.25,
    softSkillAttendance: 0,
    test: 10,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },


  {
    id: 'had/c23/076',
    image: "https://i.postimg.cc/CxKn1yBv/funmilola_aiyepola.jpg",
    name: 'Funmilola Aiyepola',
    dept: 'Hairdressing',
    weeklyAttendance: 5.5,
    softSkillAttendance: 0,
    test: 13,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'had/c23/086',
    image: "https://i.postimg.cc/NMs59p3r/salami_adebusola.jpg",
    name: 'Adebusola Salami',
    dept: 'Hairdressing',
    weeklyAttendance: 2,
    softSkillAttendance: 0,
    test: 0,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'had/c23/090',
    image: "https://i.postimg.cc/fWY6nWd4/Fridause_Adediran.jpg",
    name: 'Fridause Adediran',
    dept: 'Hairdressing',
    weeklyAttendance: 2,
    softSkillAttendance: 2,
    test: 10,
    softSkillProject: 12,
    finalProject: 32,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },



  /////////////////////////////////////WEB DEVELOPMENT DEPARTMENT//////////////////////////////////////////
  {
    id: 'iwd/c23/054',
    image: "https://i.postimg.cc/CxYSN2ZW/Sumayyah-abdul-salam.jpg",
    name: 'Sumayyah Abdul-salam',
    dept: 'Web Development',
    weeklyAttendance: 6,
    softSkillAttendance: 0,
    test: 6,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }

  },

  {
    id: 'iwd/c23/116',
    image: "https://i.postimg.cc/bvDwDQm3/Timilehin_Balogun.jpg",
    name: 'Timilehin Balogun',
    dept: 'Web Development',
    weeklyAttendance: 2.25,
    softSkillAttendance: 0,
    test: 2.8,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }

  },


  {
    id: 'iwd/c23/064',
    image: "https://i.postimg.cc/fbfDsbj3/hamed-aguntasolo.jpg",
    name: 'Hammed Aguntansolo',
    dept: 'Web Development',
    weeklyAttendance: 6,
    softSkillAttendance: 0,
    test: 6,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'iwd/c23/058',
    image: "https://i.postimg.cc/N0pKktCH/gbolahan_babayanju.jpg",
    name: 'Gbolahan Babayanju',
    dept: 'Web Development',
    weeklyAttendance: 5.25,
    softSkillAttendance: 0,
    test: 4.8,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'iwd/c23/066',
    image: "https://i.postimg.cc/HLPjb0Bg/david_iwaotan.jpg",
    name: 'David Iwaotan',
    dept: 'Web Development',
    weeklyAttendance: 5.75,
    softSkillAttendance: 0,
    test: 4.8,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }

  },

  {
    id: 'iwd/c23/048',
    image: "https://i.postimg.cc/SNyY9Ghn/aminah_sosanya.jpg",
    name: 'Aminah Sosanya',
    dept: 'Web Development',
    weeklyAttendance: 6,
    softSkillAttendance: 0,
    test: 6.6,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'iwd/c23/052',
    image: "https://i.postimg.cc/zGmSQX7p/temidayo_taoreed.jpg",
    name: 'Temidayo Taoreed',
    dept: 'Web Development',
    weeklyAttendance: 5.25,
    softSkillAttendance: 0,
    test: 6.6,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'iwd/c23/062',
    image: "https://i.postimg.cc/d1BM7CrK/patrick_uboh.jpg",
    name: 'Patrick Uboh',
    dept: 'Web Development',
    weeklyAttendance: 5.75,
    softSkillAttendance: 0,
    test: 6.2,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'iwd/c23/088',
    image: "https://i.postimg.cc/FHjRSJ8J/samuel_oshodi.jpg",
    name: 'Samuel Oshodi',
    dept: 'Web Development',
    weeklyAttendance: 4.75,
    softSkillAttendance: 0,
    test: 4.4,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'iwd/c23/089',
    image: "https://i.postimg.cc/XvZfMJp9/nusaybah_waliyullah.jpg",
    name: 'Nusaybah Waliyullah',
    dept: 'Web Development',
    weeklyAttendance: 3.5,
    softSkillAttendance: 0,
    test: 0,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'iwd/c23/0100',
    image: "https://i.postimg.cc/N0X3MBk8/Rasheed_Sadiku.jpg",
    name: 'Rasheed Sadiku',
    dept: 'Web Development',
    weeklyAttendance: 3,
    softSkillAttendance: 0,
    test: 0,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },


  ///////////////////////////////UI/UX DEPARTMENT///////////////////////////////

  {
    id: 'uix/c23/057',
    image: "https://i.postimg.cc/WpgbHDGm/muritala-isah.jpg",
    name: 'Isah Muritala',
    dept: 'UI/UX Design',
    weeklyAttendance: 4.25,
    softSkillAttendance: 0,
    test: 0,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'uix/c23/112',
    image: "https://i.postimg.cc/yW48y2tx/Promise_Salau.jpg",
    name: 'Promise Salau',
    dept: 'UI/UX Design',
    weeklyAttendance: 3.75,
    softSkillAttendance: 0,
    test: 4.5,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'uix/c23/065',
    image: "https://i.postimg.cc/J0xPcczR/goodness_afolagboye.jpg",
    name: 'Goodness AFolagboye',
    dept: 'UI/UX Design',
    weeklyAttendance: 5.25,
    softSkillAttendance: 0,
    test: 6.5,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'uix/c23/053',
    image: "https://i.postimg.cc/VNmBFfBT/bayode_taoreed.jpg",
    name: 'Bayode Taoreed',
    dept: 'UI/UX Design',
    weeklyAttendance: 5.75,
    softSkillAttendance: 0,
    test: 6,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'uix/c23/094',
    image: "https://i.postimg.cc/sgq1tmdD/emmanuel_lukosi.jpg",
    name: 'Emmanuel Lukosi',
    dept: 'UI/UX Design',
    weeklyAttendance: 3.75,
    softSkillAttendance: 0,
    test: 3.5,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },

  {
    id: 'uix/c23/059',
    image: "https://i.postimg.cc/VL1QsD4S/Jennifer_Okorie.jpg",
    name: 'Jennifer Okorie',
    dept: 'UI/UX Design',
    weeklyAttendance: 5.5,
    softSkillAttendance: 0,
    test: 5.5,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }

  },

  {
    id: 'uix/c23/051',
    image: "https://i.postimg.cc/3xb3wVL8/ibrahim_Taira.jpg",
    name: 'Ibrahim Tairu',
    dept: 'UI/UX Design',
    weeklyAttendance: 5.5,
    softSkillAttendance: 0,
    test: 6.5,
    softSkillProject: 0,
    finalProject: 0,
    allScores: function(){
      return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
    }
  },
]