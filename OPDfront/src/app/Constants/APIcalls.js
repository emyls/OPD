export const Base_URL = 'http://13.68.130.71:7070';
// export const Base_URL = 'http://192.168.8.102:7070';

export const DRUGLIST = 'http://13.68.130.71:7081/getAllDruglist';
export const DRUGLIST_POST = 'http://13.68.130.71:7081/createDruglist';
export const DRUGS = Base_URL + '/drugs';
export const LABS = Base_URL + '/labs';
export const PATIENTS = Base_URL + '/patients';
export const TREATEMENTS = Base_URL + '/treatments';
export const USERS = Base_URL + '/users';
export const VISITS = Base_URL + '/visits';
export const LOGIN = USERS + '/validate';
export const VISIT_GET_BY_PID = VISITS + "/patients";