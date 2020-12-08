export default {
  user: "",
  checkUser: "",
  bearerToken: "",
  profile: {
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: "",
  },
  favStrainObj: {
    username: "",
    strainId: 0,
    strainName: "",
    strainSpecies: "",
  },
  favorites: [],
  preLogs: [],
  reviews: [],
  title: "",
  preTokeForm: {
    username: "",
    strainId: 0,
    strainName: "",
    strainSpecies: "",
    preWhen: "",
    preMood: "",
    sessionPurpose: "",
    expectToAchieve: "",
    lingeringWorries: "",
    goal: "",
    alreadyDone: "",
    todo: "",
  },
  reviewForm: {
    username: "",
    session_id: 0,
    strainId: 0,
    strainName: "",
    strainSpecies: "",
    budDescript: "",
    goodFor: "",
    transformedMood: "",
    transformedExpectations: "",
    experience: "",
    transformedWorries: "",
    transformedGoals: "",
    disappointments: "",
    wouldChangeNextTime: "",
    wouldRecommend: null,
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
  userPrefsObj: {
    speciesPrefs: [],
    posPrefs: [],
    avoidPrefs: [],
    medPrefs: [],
    flavPrefs: [],
  },
  speciesPrefs: [],
  posPrefs: [],
  avoidPrefs: [],
  medPrefs: [],
  flavPrefs: [],
};
