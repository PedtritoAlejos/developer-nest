/* eslint-disable prettier/prettier */
import { load } from 'ts-dotenv';

const env = load({
  TYPE:String,
  DATABASE: String,
  HOST:String,
  PORT: Number,
  USERNAME:String,
  PASSWORD:String,
  SYNCHRONIZE:Boolean,

});

export const getProperty = (key:string): any => {
    return env[key];
}