import { twoWordsRegexp, dateRegexp, passRegexp } from "./constants";
import { isEmail, isUrl } from 'validator';

//  true means error
const validators = {
  nameInCharge: {
    required(value) {
      return value.trim() === '';
    },
    twoWords(value) {
      return !twoWordsRegexp.test(value);
    },
  },
  date: {
    format(value) {
      return !dateRegexp.test(value);
    },
    required(value) {
      return value.trim() === '';
    },
  },
  password: {
    required(value) {
      return value.trim() === '';
    },
    length(value) {
      return !toString(value).length > 8 && !toString(value).length < 32; 
    },
    passFormat(value) {
      return !passRegexp.test(value);
    }

  },
  email: {
    isValidEmail(value){
      return !isEmail(value);
    },
  },
  name: {
    minLength(value){
      return value.length < 2;
    },
    required(value){
      return value.trim() === '';
    },
  },
  secretKey: {

  }

}
