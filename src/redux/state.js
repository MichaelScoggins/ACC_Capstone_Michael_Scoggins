export default {
  user: "",
  checkUser: "",
  bearerToken: "",
  profile: {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    city: "",
    state: "",
  },
  favorites: [],
  experiences: {
    preLogs: [],
    reviews: [],
  },
  title: "",
  preTokeForm: {
    strain: {
      name: "",
      id: "",
      race: "",
      flavors: [],
      effects: {
        positive: [],
        negative: [],
        medical: [],
      },
    },
    when: "",
    sessionNum: 0,
    reason: "",
    mood: "",
    expectations: "",
    worries: "",
    goals: "",
    alreadyAccomplished: "",
    planToAccomplish: "",
    describeAppearance: "",
  },
  reviewForm: {
    strain: {
      name: "",
      id: "",
      race: "",
      flavors: [],
      effects: {
        positive: [],
        negative: [],
        medical: [],
      },
    },
    when: "",
    sessionNum: 0,
    reason: "",
    mood: "",
    worries: "",
    experience: "",
    expectations: "",
    goals: "",
    describeAppearance: "",
  },
  drawerOpen: false,
  snackbarOpen: false,
  findPerfectStrainModalOpen: false,
  isLoading: false,
  allStrains: {},
  perfectStrainResults: [],
  searchParams: "",
  userSearchInput: "",
  userSearchResults: [],
  effects: {
    positive: [],
    negative: [],
    medical: [],
  },
  flavors: [],
  strainDescription: "",
  speciesPrefs: [],
  posPrefs: [],
  avoidPrefs: [],
  medPrefs: [],
  flavPrefs: [],
};
