import { regexps } from "./constants";
import { isEmail, isURL } from 'validator';

export const validators = {
  volume: {
    required(v){
      return v.trim() === '';
    },
    volumeFormat(v){
      return !regexps.weigthAndVolumeFormatError.test(v);
    },
  },
  bottleCapWeight: {
    required(v){
      return v.trim() === '';
    },
    bottleCapWeightFormat(v){
      return !regexps.weigthAndVolumeFormatError.test(v);
    },
  },
  fullWeight: {
    required(v){
      return v.trim() === '';
    },
    fullWeightFormat(v){
      return !regexps.weigthAndVolumeFormatError.test(v);
    },
  },
  bottleWeight: {
    required(v){
      return v.trim() === '';
    },
    bottleWeightFormat(v){
      return !regexps.weigthAndVolumeFormatError.test(v);
    },
  },
  nameInCharge: {
    required(v) {
      return v.trim() === '';
    },
    twoWords(v) {
      return !regexps.twoWordsRegexp.test(v);
    },
  },
  date: {
    required(v) {
      return v.trim() === '';
    },
    format(v) {
      return !regexps.dateRegexp.test(v);
    },
  },
  password: {
    required(v) {
      return v.trim() === '';
    },
    minLength(v) {
      return toString(v).length < 8; 
    },
    maxLength(v) {
      return toString(v).length > 32; 
    },
    passFormat(v) {
      return !regexps.passRegexp.test(v);
    },
  },
  email: {
    required(v){
      return v.trim() === '';
    },
    isValidEmail(v){
      return !isEmail(v);
    },
  },
  name: {
    required(v){
      return v.trim() === '';
    },
    minLength(v){
      return v.length < 2;
    },
  },
  secretKey: {
    required(v){
      return v.trim() === ''
    }
  },
  bottleTitle: {
    required(v){
      return v.trim() === '';
    },
    minLength(v){
      return v.length < 2;
    },
    maxLength(v){
      return v.length > 50;
    },
  },
  madeIn: {
    titleFormat(v) {
      return !regexps.titleFormat.test(v);
    }
  },
  bottleModel: {
    titleFormat(v) {
      return !regexps.titleFormat.test(v);
    }
  },
  label: {
    required(v){
      return v.trim() === '';
    },
    urlFormatError(v){
      return !isURL(v);
    }
  },
  barcode: {
    required(v){
      return v.trim() === '';
    },
    barcodeFormat(v){
      return !regexps.numberRegexp.test(v);
    },
    barcodeLength(v){
      return v.length !== 13;
    },
  },
  alcoType: {
    required(v){
      return v.trim() === '';
    },
  },

}
